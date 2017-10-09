module.exports = {

    run: function (creep) {

        // creep.say("hi");

        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        if(creep.carry.energy > 0 && creep.memory.working == true) {
            var tower = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TOWER});
                if (creep.transfer(tower, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(tower);
                }
        }

        if (creep.carry.energy < creep.carryCapacity && creep.memory.working == false) {
            var source = creep.pos.findClosestByPath(FIND_SOURCES, {filter : (s) => s.energy > 0});
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source)
            }
        }

    }

};