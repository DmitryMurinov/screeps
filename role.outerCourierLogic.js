var helperCounter = require('helper.counter');
var sNeedEnergy = require('struct.structuresNeedEnergy');

module.exports = {

    run: function (creep) {


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
        }

        //Working state logic:

        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
            creep.memory.storedPath = undefined;
            creep.memory.pathNeedUpdate = true;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
            creep.memory.objectToMoveId = undefined;
            creep.memory.linkId = undefined;
            creep.memory.storageId = undefined;
            creep.memory.towerId = undefined;
            creep.memory.storedPath = undefined;
            creep.memory.pathNeedUpdate = true;

        }

        //TransferLogic:
        if (creep.pos.x == creep.memory.roomToWorkX && creep.pos.y == creep.memory.roomToWorkY && creep.room.name == creep.memory.roomToWorkName) {
            creep.memory.arrived = true;
            // creep.memory.storedPath = undefined;
        }

        if (creep.carry.energy == 0 && creep.room.name != creep.memory.roomToWorkName) {
            creep.memory.arrived == false;
            // creep.memory.storedPath = undefined;
        }

        if (creep.memory.arrived == true && creep.memory.working == true) {
            if (creep.pos.x == creep.memory.roomToBackX && creep.pos.y == creep.memory.roomToBackY && creep.room.name == creep.memory.origination) {
                creep.memory.arrived = false;
                creep.memory.storedPath = undefined;
            } else {

                if (!creep.memory.storedPath) {
                    creep.memory.pathNeedUpdate = true;
                }

                if (creep.memory.pathNeedUpdate == true) {
                    creep.memory.storedPath = creep.pos.findPathTo(new RoomPosition(creep.memory.roomToBackX, creep.memory.roomToBackY, creep.memory.origination));
                }
                if (creep.memory.storedPath) {
                    moveResult = creep.moveByPath(creep.memory.storedPath);
                }
                if (moveResult == OK) {
                    creep.memory.pathNeedUpdate = false;
                } else {
                    creep.memory.storedPath = creep.pos.findPathTo(new RoomPosition(creep.memory.roomToBackX, creep.memory.roomToBackY, creep.memory.origination));
                    moveResult = creep.moveByPath(creep.memory.storedPath);
                    creep.memory.pathNeedUpdate = false;
                }
            }
        }

        if (creep.memory.arrived == false && creep.memory.working == false) {
            if (creep.pos.x == creep.memory.roomToWorkX && creep.pos.y == creep.memory.roomToWorkY && creep.room.name == creep.memory.roomToWorkName) {
                creep.memory.arrived = true;
                creep.memory.storedPath = undefined;
            } else {

                if (!creep.memory.storedPath) {
                    creep.memory.pathNeedUpdate = true;
                }

                if (creep.memory.pathNeedUpdate == true) {
                    creep.memory.storedPath = creep.pos.findPathTo(new RoomPosition(creep.memory.roomToWorkX, creep.memory.roomToWorkY, creep.memory.roomToWorkName));
                }
                if (creep.memory.storedPath) {
                    moveResult = creep.moveByPath(creep.memory.storedPath);
                }
                if (moveResult == OK) {
                    creep.memory.pathNeedUpdate = false;
                } else {
                    creep.memory.storedPath = creep.pos.findPathTo(new RoomPosition(creep.memory.roomToWorkX, creep.memory.roomToWorkY, creep.memory.roomToWorkName));
                    moveResult = creep.moveByPath(creep.memory.storedPath);
                    creep.memory.pathNeedUpdate = false;
                }

                // creep.moveTo(new RoomPosition(creep.memory.roomToWorkX, creep.memory.roomToWorkY, creep.memory.roomToWorkName));
            }
        }

        //Main logic

        if (creep.room.name == creep.memory.origination && creep.memory.working == true && creep.memory.arrived == false) {

            var link = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: (s) => s.pos.x == creep.memory.linkRoomX && s.pos.y == creep.memory.linkRoomY && s.structureType == STRUCTURE_LINK
            });

            var transResult;

            if (link) {
                creep.memory.targetId = link.id;
                transResult = creep.transfer(link, RESOURCE_ENERGY)
            } else {
                var closestExtOrSpawnNeedEnergy = sNeedEnergy.closestExtensionOrSpawn(creep);
                if (closestExtOrSpawnNeedEnergy) {
                    creep.memory.targetId = closestExtOrSpawnNeedEnergy.id;
                    transResult = creep.transfer(closestExtOrSpawnNeedEnergy, RESOURCE_ENERGY);
                } else {
                    var tower = creep.pos.findClosestByPath(helperCounter.towersNeedPopupSameRoom(creep));
                    if (tower) {
                        creep.memory.targetId = tower.id;
                        transResult = creep.transfer(tower, RESOURCE_ENERGY);
                    } else {
                        var storage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                            filter: (s) => (s.structureType == STRUCTURE_STORAGE || s.structureType == STRUCTURE_CONTAINER)
                                && _.sum(s.store) < s.storeCapacity
                        });
                        if (storage) {
                            creep.memory.targetId = storage.id;
                            if(creep.transfer(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                                creep.moveTo(storage);
                            }
                        }
                    }
                }
            }

            if(transResult == ERR_NOT_IN_RANGE){
                if(creep.memory.previousTargetId){
                    if(creep.memory.targetId == creep.memory.previousTargetId){
                        if(!creep.memory.storedPath){
                            creep.memory.storedPath = creep.pos.findPathTo(Game.getObjectById(creep.memory.targetId));
                        }
                        if(creep.moveByPath(creep.memory.storedPath) == ERR_NOT_FOUND){
                            creep.memory.storedPath = creep.pos.findPathTo(Game.getObjectById(creep.memory.targetId));
                            creep.moveByPath(creep.memory.storedPath)
                        }
                    } else {
                        creep.memory.storedPath = undefined;
                    }
                }
                creep.memory.previousTargetId = creep.memory.targetId;
            }
        }

        if (creep.room.name == creep.memory.roomToWorkName && creep.memory.working == false && creep.memory.arrived == true) {


            if (creep.carry.energy < creep.carryCapacity && creep.memory.working == false) {
                // var pureHarvester = creep.pos.findClosestByPath(helperCounter.pureHarvsSameRoom(creep, 15));
                var droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
                    filter: (r) => r.amount >= creep.carryCapacity
                });

                if (droppedEnergy != null && droppedEnergy != undefined) {
                    if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(droppedEnergy);
                    }
                } else {
                    var container = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (c) => _.sum(c.store) >= 350 &&
                    c.structureType == STRUCTURE_CONTAINER});
                    if (container != null && container != undefined) {
                        if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(container);
                        }
                    } else {

                        var harvToMove = creep.pos.findClosestByPath(FIND_MY_CREEPS,
                            {
                                filter: (harv) => harv.memory.role == 'outerHarvesterLogic' &&
                                    harv.pos.findInRange(FIND_MY_CREEPS, 2, {
                                        filter: (c) => c.memory.role == creep.memory.role &&
                                            c.id != creep.id
                                    }).lenght == 0
                                    && harv.pos.findInRange(FIND_STRUCTURES, 1, {
                                        filter: (s) => s.structureType == STRUCTURE_LINK
                                    }).lenght == 0
                            });

                        if (harvToMove != null) {
                            creep.moveTo(harvToMove);
                        }
                    }
                }
            }
        }

    }


};