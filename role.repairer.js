module.exports = {

    run: function (creep) {

        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }


        // creep.memory.structureToRepair = null;

        var wallMaxRepair = 100000;

        // creep.memory.structureToRepairX;
        // creep.memory.structureToRepairY;
        // creep.memory.structureRepaired;
        // console.log(creep.memory.structureToRepairX);


        if (creep.carry.energy > 0 && creep.memory.working == true) {

            var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (s) =>
                s.structureType != STRUCTURE_CONTROLLER && s.hits <= (s.hitsMax / 5 * 3) && s.hits <= (wallMaxRepair - 5000)});

            if (creep.memory.structureToRepair == undefined || creep.memory.structureToRepair.hitsMax == null) {
                creep.memory.structureRepaired = true;
            }

            if (creep.memory.structureRepaired == true) {
                var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (s) => s.hits < (s.hitsMax / 2) && s.hits < (wallMaxRepair - 5000)});

                if (structure != null) {
                    creep.memory.structureToRepair = structure.id;
                    creep.memory.structureRepaired = false;
                }
            }

            if(creep.memory.structureToRepair != undefined) {
                if (creep.repair(Game.getObjectById(creep.memory.structureToRepair)) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(Game.getObjectById(creep.memory.structureToRepair));
                }
             } //else {
                // roleOuterBuilder2.run(creep);
            // }

            if(creep.memory.structureToRepair != undefined) {
                if (Game.getObjectById(creep.memory.structureToRepair).hits >= (Game.getObjectById(creep.memory.structureToRepair).hitsMax / 5 * 4) ||
                    Game.getObjectById(creep.memory.structureToRepair).hits >= wallMaxRepair) {
                    creep.memory.structureRepaired = true;
                }
            }
        }


        if (creep.carry.energy < creep.carryCapacity && creep.memory.working == false) {
            //V1
            // var source = creep.pos.findClosestByPath(FIND_SOURCES);
            // if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
            //     creep.moveTo(source)
            // }

            // }
            var source = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_STORAGE &&
                    s.store[RESOURCE_ENERGY] > 10000
            });


            if (source == undefined) {
                var source = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 0
                })
            }

            // console.log("source: " + source);

            if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }

    }


};