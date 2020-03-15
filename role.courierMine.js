var helperCounter = require('helper.counter');
var sNeedEnergy = require('struct.structuresNeedEnergy');


module.exports = {

    run: function (creep) {

        // var startCpu = Game.cpu.getUsed();


        if (creep.memory.working == true && _.sum(creep.carry) == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && _.sum(creep.carry) == creep.carryCapacity) {
            creep.memory.working = true;
        }


        var storage;
        if (creep.memory.storageId) {
            storage = Game.getObjectById(creep.memory.storageId);
        } else {
            storage = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_STORAGE});
            if (storage) {
                creep.memory.storageId = storage.id;
            }
        }

        var moveResult;
        if (creep.memory.working == true) {

            var resourcesList = Object.keys(creep.carry);

            for (let i in resourcesList) {

                var resource = resourcesList[i];

                if (creep.carry[resource] > 0) {
                    var transferResult = creep.transfer(storage, resource);
                    if (transferResult == ERR_NOT_IN_RANGE) {
                        creep.moveTo(storage);
                    }
                }
            }


            // ags131 [10:00 PM]
            // `Object.keys(Game.creeps...carry)` will return an array of keys

            // [10:01]
            // `_.each(Game.creeps....carry, (amount, resource) => { ... })`

        }

        if (_.sum(creep.carry) < creep.carryCapacity && creep.memory.working == false) {
            // var pureHarvester = creep.pos.findClosestByPath(helperCounter.pureHarvsSameRoom(creep, 15));

            var mines = creep.room.find(FIND_MINERALS);
            var mine = mines[0];
            var mineralType = mine.mineralType;

            var droppedResource = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
                filter: (r) => r.amount > 50 && r.resourceType == mineralType
            });

            if (droppedResource) {
                if (creep.pickup(droppedResource) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(droppedResource)
                }
            } else {
                var container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_CONTAINER &&
                        s.getUsedCapacity() > s.store[RESOURCE_ENERGY]
                });

                if (container) {
                    var resourcesList = Object.keys(container.store);
                    for (let i in resourcesList) {

                        var resource = resourcesList[i];

                        if (resource != 'energy') {
                            if (container.store[resource] > 0) {
                                var transferResult = creep.withdraw(container, resource);
                                if (transferResult == ERR_NOT_IN_RANGE) {
                                    creep.moveTo(container);
                                }
                            }
                        }
                    }
                } else {
                    var harvToMove = creep.pos.findClosestByPath(FIND_MY_CREEPS,
                        {
                            filter: (harv) => harv.memory.role == ('pureMiner')
                        });

                    if (harvToMove != null) {
                        creep.moveTo(harvToMove);
                    }
                }
            }
        }

        // console.log(Game.cpu.getUsed() - startCpu);

    }

};