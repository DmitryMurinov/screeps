module.exports = {

    run: function (creep, roomToHarvestName, roomToHarvestX, roomToHarvestY) {


        //TransferLogic:

        if (creep.pos.x == 0 || creep.pos.x == 49 || creep.pos.y == 0 || creep.pos.y == 49) {
            creep.memory.destinationPath = undefined;
        }

        if (creep.memory.arrived == false) {
            if (creep.pos.x == creep.memory.roomToWorkX && creep.pos.y == creep.memory.roomToWorkY && creep.room.name == creep.memory.roomToWorkName) {
                creep.memory.arrived = true;
                creep.memory.destinationPath = undefined;
            }
            var moveResult;
            if (creep.memory.destinationPath != undefined) {
                moveResult = creep.moveByPath(creep.memory.destinationPath);
            }

            console.log(creep.room.name);

            if (creep.moveByPath.destinationPath == undefined || moveResult != 'OK') {
                creep.memory.destinationPath = creep.pos.findPathTo(
                new RoomPosition(creep.memory.roomToWorkX, creep.memory.roomToWorkY, creep.memory.roomToWorkName));
                creep.moveByPath(creep.memory.destinationPath);
            }
        }


        //Main logic
        if (creep.memory.arrived == true) {


            if (_.sum(creep.carry) > (creep.carryCapacity - 10)) {

                var container;
                var containers;
                if (creep.memory.containerId) {
                    container = Game.getObjectById(creep.memory.containerId);
                    if(container) {
                        if (_.sum(container.store) == container.storeCapacity) {
                            creep.memory.containerId = null;
                            container = null;
                        }
                    } else {
                        creep.memory.containerId = undefined;
                    }
                } else {
                    if(creep.memory.sourceId){
                        var source = Game.getObjectById(creep.memory.sourceId);
                        containers = source.pos.findInRange(FIND_STRUCTURES, 3, {
                            filter: (c) =>
                                c.structureType == STRUCTURE_CONTAINER && _.sum(c.store) < c.storeCapacity
                        });

                        if (containers.length > 0) {
                            creep.memory.containerId = containers[0].id;
                        }
                    }
                }

                if (container) {
                    if(creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                        creep.moveTo(container);
                    }
                } else {

                    var courier = creep.pos.findInRange(FIND_MY_CREEPS, 1, {filter: (c) => _.sum(c.carry) < c.carryCapacity});

                    if (courier) {
                        creep.transfer(courier[0], RESOURCE_ENERGY);
                    }
                }
            }

            if (creep.memory.sourceId) {
                var source = Game.getObjectById(creep.memory.sourceId);
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
                }
            } else {

                var sourceToMove = creep.pos.findClosestByPath(FIND_SOURCES,
                    {
                        filter: (s) => s.energy > 0 &&
                            s.pos.findInRange(FIND_MY_CREEPS, 1, {
                                filter: (c) => c.memory.role == creep.memory.role &&
                                    c.id != creep.id
                            }) == 0
                    });

                    var harvResult = creep.harvest(sourceToMove);
                    if (harvResult == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sourceToMove);
                    }
                    if (harvResult == OK) {
                        if (creep.memory.sourceFound == undefined) {
                            creep.memory.sourceFound = 0;
                        } else {
                            creep.memory.sourceFound++;
                        }
                    }
                    if (creep.memory.sourceFound >= 5) {
                        creep.memory.sourceId = sourceToMove.id;
                    }


            }

        }


    }
}
;