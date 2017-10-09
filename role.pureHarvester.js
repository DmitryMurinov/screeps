module.exports = {

    run: function (creep) {

        var link;

        if (creep.carry.energy > creep.carryCapacity - 10) {

            if(creep.memory.linkToWithdrawId){
                var linkTo = Game.getObjectById(creep.memory.linkToWithdrawId);
                if(creep.transfer(linkTo, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                    creep.moveTo(linkTo);
                }
            } else {



                var couriers = creep.pos.findInRange(FIND_MY_CREEPS, 1, {filter: (c) => c.memory.role == 'courier'});

                var courier;
                if (couriers.length >= 1) {
                    courier = couriers[0];
                }

                if (courier != undefined) {
                    creep.transfer(courier, RESOURCE_ENERGY);
                } else {

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

                        var sourceToFindContainer = Game.getObjectById(creep.memory.sourceId);
                        if (sourceToFindContainer) {


                        containers = sourceToFindContainer.pos.findInRange(FIND_STRUCTURES, 2, {
                            filter: (c) =>
                                c.structureType == STRUCTURE_CONTAINER && _.sum(c.store) < c.storeCapacity
                        });
                    }

                        if (containers != undefined && containers.length > 0) {
                            creep.memory.containerId = containers[0].id;
                        }
                    }

                    if (container) {
                        if(creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                            // creep.say(creep.name);
                            // creep.move(LEFT);
                            creep.moveTo(container);
                        }
                    } else {

                        var courier = creep.pos.findInRange(FIND_MY_CREEPS, 1, {filter: (c) => _.sum(c.carry) < c.carryCapacity});

                        if (courier) {
                            creep.transfer(courier[0], RESOURCE_ENERGY);
                        }
                    }

                }

                if(!creep.memory.linkLookTries){
                    creep.memory.linkLookTries = 0;
                }

                if(creep.memory.linkLookTries < 10) {

                    if (creep.memory.linkToWithdrawId == (null || undefined)) {

                        link = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                            filter: (s) => s.pos.x >= (creep.pos.x - 3) && s.pos.x <= (creep.pos.x + 3)
                                && s.pos.y >= (creep.pos.y - 3) && s.pos.y <= (creep.pos.y + 3) && s.structureType == STRUCTURE_LINK
                        });

                        if (link != null) {
                            creep.memory.linkToWithdrawId = link.id;
                        }
                    }

                    creep.memory.linkLookTries++;
                }

            }
        }

        if(creep.memory.sourceId != undefined){
            source = Game.getObjectById(creep.memory.sourceId);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE){
                creep.moveTo(source);
            }
        } else {

            var sourceToMove = creep.pos.findClosestByPath(FIND_SOURCES,
                {
                    filter: (s) => s.energy > 0 &&
                        s.pos.findInRange(FIND_MY_CREEPS, 1, {
                            filter: (c) => c.memory.role == 'pureHarvester' &&
                                c.id != creep.id
                        }) == 0
                });

            // if (creep.carry.energy < creep.carryCapacity && link == (null || undefined)) {
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

            // }
        }
    }


};