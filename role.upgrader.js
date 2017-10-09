module.exports = {

    run: function (creep) {

        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.carry.energy > 0 && creep.memory.working == true) {
            if (creep.room.controller) {
                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        }


        if (creep.pos.x == 27 && creep.pos.y == 15) {
            creep.move(BOTTOM_LEFT);
        } else if (creep.carry.energy < creep.carryCapacity && creep.memory.working == false) {

            var source;

            if (creep.ticksToLive == 1499) {
                var linkController = creep.room.controller.pos.findInRange(FIND_STRUCTURES, 4, {
                    filter: (s) => s.structureType == STRUCTURE_LINK
                })[0];
                if (linkController) {
                    creep.memory.linkControllerId = linkController.id;
                }
            }

            if (creep.memory.linkControllerId) {
                source = Game.getObjectById(creep.memory.linkControllerId);
                if (source && source.energy == 0) {
                    source = null;
                }
            }

            if (creep.ticksToLive == 1499) {
                var containerController = creep.room.controller.pos.findInRange(FIND_STRUCTURES, 4, {
                    filter: (s) => s.structureType == STRUCTURE_CONTAINER
                        && s.store[RESOURCE_ENERGY] > 0
                })[0];
                if (containerController) {
                    creep.memory.containerControllerId = containerController.id;
                }
            }

            if (!source && creep.memory.containerControllerId) {
                source = Game.getObjectById(creep.memory.containerControllerId);
                if(source && source.store[RESOURCE_ENERGY] == 0){
                    source = null;
                }
            }

            if (!source) {
                source = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_STORAGE &&
                        s.store[RESOURCE_ENERGY] > 100
                });
            }

            if (!source) {
                var source = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 0
                })
            }


            if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
    }

};