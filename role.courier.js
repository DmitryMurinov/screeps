var sNeedEnergy = require('struct.structuresNeedEnergy');

module.exports = {

    run: function (creep) {

        // var startCpu = Game.cpu.getUsed();

        if (!creep.memory.doNothingTicks) {
            creep.memory.doNothingTicks = 0;
        }

        if(!creep.memory.previousPositionX){
            creep.memory.previousPositionX = creep.pos.x;
        }

        if(!creep.memory.previousPositionY){
            creep.memory.previousPositionY = creep.pos.y;
        }

        if(creep.pos.x == creep.memory.previousPositionX && creep.pos.y == creep.memory.previousPositionY){
            creep.memory.doNothingTicks ++;
        }

        if(creep.memory.doNothingTicks >= 5){
            creep.memory.doNothingTicks = 0;
            creep.memory.storedPath = null;
            creep.memory.pathNeedUpdate = true;
            creep.memory.closestTowerNeedPopupSameRoomId = null;
            creep.memory.storageId = null;
            creep.memory.previousPositionX = null;
            creep.memory.previousPositionY = null;
        }

        if (creep.memory.workqueue == null || creep.memory.workqueue == undefined) {
            creep.memory.workqueue = 0;
        }

        if (creep.memory.working == true && _.sum(creep.carry) == 0) {
            creep.memory.working = false;
            creep.memory.pathNeedUpdate = true;
        }
        else if (creep.memory.working == false && _.sum(creep.carry) == creep.carryCapacity) {
            creep.memory.workqueue++;
            creep.memory.working = true;
            creep.memory.pathNeedUpdate = true;
            if (creep.memory.workqueue == 2) {
                creep.memory.workqueue = 0;
            }
        }


        var closestExtOrSpawnNeedEnergy;
        if (creep.memory.closestExtOrSpawnNeedEnergyId) {
            closestExtOrSpawnNeedEnergy = Game.getObjectById(creep.memory.closestExtOrSpawnNeedEnergyId);

            if (!closestExtOrSpawnNeedEnergy) {
                creep.memory.closestExtOrSpawnNeedEnergyId = null;
            }

            if (closestExtOrSpawnNeedEnergy.energy == closestExtOrSpawnNeedEnergy.energyCapacity) {
                creep.memory.closestExtOrSpawnNeedEnergyId = null;
                closestExtOrSpawnNeedEnergy = undefined;
                closestExtOrSpawnNeedEnergy = sNeedEnergy.closestExtensionOrSpawn(creep);
                if (closestExtOrSpawnNeedEnergy) {
                    creep.memory.closestExtOrSpawnNeedEnergyId = closestExtOrSpawnNeedEnergy.id;
                    creep.memory.pathNeedUpdate = true;
                }
            }
        } else {
            closestExtOrSpawnNeedEnergy = sNeedEnergy.closestExtensionOrSpawn(creep);
            if (closestExtOrSpawnNeedEnergy) {
                creep.memory.closestExtOrSpawnNeedEnergyId = closestExtOrSpawnNeedEnergy.id;
                creep.memory.pathNeedUpdate = true;
            }
        }

        var closestTowerNeedPopupSameRoom;
        if (creep.memory.closestTowerNeedPopupSameRoomId) {
            closestTowerNeedPopupSameRoom = Game.getObjectById(creep.memory.closestTowerNeedPopupSameRoomId);
            if (closestTowerNeedPopupSameRoom.energy == closestTowerNeedPopupSameRoom.energyCapacity) {
                creep.memory.closestTowerNeedPopupSameRoomId = null;
                closestTowerNeedPopupSameRoom = undefined;
                closestTowerNeedPopupSameRoom = sNeedEnergy.closestTowerNeedPopupSameRoom(creep);
                if (closestTowerNeedPopupSameRoom) {
                    creep.memory.closestTowerNeedPopupSameRoomId = closestTowerNeedPopupSameRoom.id;
                    creep.memory.pathNeedUpdate = true;
                }
            }
        } else {
            closestTowerNeedPopupSameRoom = sNeedEnergy.closestTowerNeedPopupSameRoom(creep);
            if (closestTowerNeedPopupSameRoom) {
                creep.memory.closestTowerNeedPopupSameRoomId = closestTowerNeedPopupSameRoom.id;
                creep.memory.pathNeedUpdate = true;
            }
        }

        var containerController = creep.room.controller.pos.findInRange(FIND_STRUCTURES, 4, {
                filter: (s) => s.structureType == STRUCTURE_CONTAINER
                    && (2000 - s.store[RESOURCE_ENERGY]) >= creep.carryCapacity
            })[0];

        var storage;
        if (creep.memory.storageId) {
            storage = Game.getObjectById(creep.memory.storageId);
            if ((storage.store[RESOURCE_ENERGY] >= 500000 && storage.structureType == STRUCTURE_STORAGE) ||
                (storage.store[RESOURCE_ENERGY] >= 1000 && storage.structureType == STRUCTURE_CONTAINER)) {
                storage = undefined;
                if (creep.room.controller.level < 4) {
                    storage = sNeedEnergy.closestStorageOrContainerNeedPopupSameRoom(creep);
                } else {
                    storage = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_STORAGE});
                }
                if (storage) {
                    creep.memory.storageId = storage.id;
                    creep.memory.pathNeedUpdate = true;
                }
            }
        } else {
            storage = sNeedEnergy.closestStorageOrContainerNeedPopupSameRoom(creep);
            if (storage) {
                creep.memory.storageId = storage.id;
                creep.memory.pathNeedUpdate = true;
            }
        }

        var moveResult;

        if (creep.memory.working == true) {
            if (creep.memory.workqueue == 1 && containerController && creep.carry[RESOURCE_ENERGY] > 0) {
                if (creep.transfer(containerController, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    if (creep.memory.pathNeedUpdate == true) {
                        creep.memory.storedPath = creep.pos.findPathTo(containerController);
                    }
                    if (creep.memory.storedPath) {
                        moveResult = creep.moveByPath(creep.memory.storedPath);
                    }
                    if (moveResult == OK) {
                    } else {
                        creep.memory.storedPath = creep.pos.findPathTo(containerController);
                        creep.moveByPath(creep.memory.storedPath);
                    }
                }
            } else if (creep.carry.energy == 0 && _.sum(creep.carry) > 0) {
                var storage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_STORAGE && _.sum(s.store) < 1000000
                        || (s.structureType == STRUCTURE_CONTAINER && _.sum(s.store) < 2000)
                });
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
            } else if (closestExtOrSpawnNeedEnergy) {
                if (creep.transfer(closestExtOrSpawnNeedEnergy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    if (creep.memory.pathNeedUpdate == true) {
                        creep.memory.storedPath = creep.pos.findPathTo(closestExtOrSpawnNeedEnergy);
                    }
                    if (creep.memory.storedPath) {
                        moveResult = creep.moveByPath(creep.memory.storedPath);
                    }
                    if (moveResult == OK) {
                    } else {
                        creep.memory.storedPath = creep.pos.findPathTo(closestExtOrSpawnNeedEnergy);
                        creep.moveByPath(creep.memory.storedPath);
                    }
                }
            } else if (closestTowerNeedPopupSameRoom) {
                if (creep.transfer(closestTowerNeedPopupSameRoom, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    if (creep.memory.pathNeedUpdate == true) {
                        creep.memory.storedPath = creep.pos.findPathTo(closestTowerNeedPopupSameRoom);
                    }
                    if (creep.memory.storedPath) {
                        moveResult = creep.moveByPath(creep.memory.storedPath);
                    }
                    if (moveResult == OK) {
                    } else {
                        creep.memory.storedPath = creep.pos.findPathTo(closestTowerNeedPopupSameRoom);
                        creep.moveByPath(creep.memory.storedPath);
                    }
                }
            } else if (storage) {
                if (creep.transfer(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    if (creep.memory.pathNeedUpdate == true) {
                        creep.memory.storedPath = creep.pos.findPathTo(storage);
                    }
                    if (creep.memory.storedPath) {
                        moveResult = creep.moveByPath(creep.memory.storedPath);

                    }
                    if (moveResult != OK) {
                        creep.memory.storedPath = creep.pos.findPathTo(storage);
                        moveResult = creep.moveByPath(creep.memory.storedPath);
                    }
                }
            } else {
                var storage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_STORAGE && _.sum(s.store) < 1000000
                        || (s.structureType == STRUCTURE_CONTAINER && _.sum(s.store) < 2000)
                });
                if (creep.transfer(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(storage);
                }
            }
        }


        if (creep.carry.energy < creep.carryCapacity && creep.memory.working == false) {
            var droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
                filter: (r) => r.amount >= creep.carryCapacity
            });

            if (droppedEnergy != null && droppedEnergy != undefined) {
                if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(droppedEnergy);
                }
            } else {

                var harvContainer = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (s) => s.pos.findInRange(FIND_SOURCES, 3).length > 0 &&
                        s.structureType == STRUCTURE_CONTAINER
                });


                if (harvContainer && harvContainer.store[RESOURCE_ENERGY] >= creep.carryCapacity) {

                    if (creep.withdraw(harvContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(harvContainer);
                    }
                } else {

                    storage = creep.room.storage;

                    if (storage && storage.store[RESOURCE_ENERGY] > 50000) {
                        if (creep.withdraw(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(storage);
                        }
                    }
                    else {

                        var harvToMove = creep.pos.findClosestByPath(FIND_MY_CREEPS,
                            {
                                filter: (harv) => harv.memory.role == ('pureHarvester' || 'pureMiner') &&
                                    harv.pos.findInRange(FIND_MY_CREEPS, 1, {
                                        filter: (c) => c.memory.role == 'courier' &&
                                            c.id != creep.id
                                    }) == 0
                                    && harv.pos.findInRange(FIND_STRUCTURES, 1, {
                                        filter: (s) => s.structureType == STRUCTURE_LINK
                                    }) == 0
                            });

                        if (harvToMove != null) {
                            creep.moveTo(harvToMove);
                        }
                    }
                }
            }
        }
    }
}
;