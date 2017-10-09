var helperCounter = require('helper.counter');
var sNeedEnergy = require('struct.structuresNeedEnergy');


module.exports = {

    run: function (creep) {

        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        var closestExtOrSpawnNeedEnergy = sNeedEnergy.closestExtensionOrSpawn(creep);


        if (creep.memory.working == true && closestExtOrSpawnNeedEnergy != null) {
            if (creep.transfer(closestExtOrSpawnNeedEnergy, RESOURCE_ENERGY)) {
                creep.moveTo(closestExtOrSpawnNeedEnergy)
            }
        } else if (creep.memory.working == true &&
            helperCounter.towersNeedPopupSameRoom(creep).length > 0 && closestExtOrSpawnNeedEnergy == null) {
            if (creep.transfer(creep.pos.findClosestByPath(helperCounter.towersNeedPopupSameRoom(creep)), RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.pos.findClosestByPath(helperCounter.towersNeedPopupSameRoom(creep)));
            }
        } /*else if (
            creep.memory.working == true && closestExtOrSpawnNeedEnergy == null) {
            var storage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_STORAGE
                    || (s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] < 2000)
            });
            if (creep.transfer(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(storage);
            }
        }*/


        // creep.memory.source = null;
        //
        // if(creep.memory.source == null){
        //     creep.memory.socreep.pos.findClosestByPath(helperCounter.pureHarvsSameRoom(creep, 100);
        // }


        if (creep.carry.energy < creep.carryCapacity && creep.memory.working == false) {

            var storage = creep.room.find(FIND_MY_STRUCTURES, {filter : (s) => s.structureType == STRUCTURE_STORAGE})

            if(creep.withdraw(storage[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(storage[0]);
            }
            // var pureHarvester = creep.pos.findClosestByPath(helperCounter.pureHarvsSameRoom(creep, 15));
            /*var droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
                filter: (r) => r.amount > 50
            });

            if (droppedEnergy != null && droppedEnergy != undefined) {
                if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(droppedEnergy);
                }
            } else {

                linkToWithdaw = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_LINK &&
                        s.pos.x == 21 && s.pos.y == 26
                });

                // console.log(linkToWithdaw);
                var harvToMove = creep.pos.findClosestByPath(FIND_MY_CREEPS,
                    {
                        filter: (harv) => harv.memory.role == 'pureHarvester' &&
                            harv.pos.findInRange(FIND_MY_CREEPS, 1, {
                                filter: (c) => c.memory.role == 'courier' &&
                                    c.id != creep.id
                            }) == 0
                            // && harv.carry.energy > 480
                            && harv.pos.findInRange(FIND_STRUCTURES, 1, {
                                filter: (s) => s.structureType == STRUCTURE_LINK
                            }) == 0
                    });

                // console.log("harv: " + harvToMove);
                if (harvToMove != null) {
                    creep.moveTo(harvToMove);
                } else {

                    // result = creep.withdraw(linkToWithdaw, RESOURCE_ENERGY);
                    // console.log(result);

                    if (creep.withdraw(linkToWithdaw, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(linkToWithdaw);
                    }
                }*/
            // }
        }
    }

    // }

};