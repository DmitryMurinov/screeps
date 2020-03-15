var sNeedEnergy = require('struct.structuresNeedEnergy');


module.exports = {

    run: function (creep) {

        if (creep.memory.labWork == undefined || creep.memory.labWork == null) {
            creep.memory.labWork = 'finished';
        }

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

        creep.memory.previousPositionX = creep.pos.x;
        creep.memory.previousPositionY = creep.pos.y;

        if(creep.memory.moveResource == undefined || creep.memory.moveResource == null){
            creep.memory.moveResource = 'finished';
        }

        if(creep.memory.labWork == undefined || creep.memory.labWork == null){
            creep.memory.labWork = 'finished';
        }

        if(creep.ticksToLive == 1499){
            creep.memory.labWork == 'finished';
            creep.room.memory.labWork = 'finished';
        }

        var roomMemory = Game.rooms[creep.room.name].memory;
        // if(creep.memory.doNothingTicks >= 10){
        //     creep.memory.labWork == 'finished';
        //     creep.memory.moveResource = 'finished';
        //     roomMemory.labWork == 'finished';
        //     roomMemory.moveResource == 'finished';
        //     creep.memory.doNothingTicks = 0;
        // }


        if (roomMemory.labWork == 'starting' && creep.memory.labWork == 'finished') {
            creep.memory.labWork = 'starting';
        }

        if (roomMemory.moveResource == 'starting' && creep.memory.moveResource == 'finished'){
            creep.memory.moveResource = 'starting';
        }

        if (creep.memory.labWork != 'finished') {
            this.labWork(creep);
        } else if (creep.memory.moveResource != 'finished'){
            this.moveResource(creep);
        }  else {

            if (creep.memory.working == true && _.sum(creep.carry) == 0) {
                creep.memory.working = false;
            }
            else if (creep.memory.working == false && _.sum(creep.carry) > 0) {
                creep.memory.working = true;
            }

            var storage;
            if (creep.memory.storageId == (null || undefined)) {
                storage = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_STORAGE});
                creep.memory.storageId = storage.id;
            } else {
                storage = Game.getObjectById(creep.memory.storageId);
            }

            if (storage && creep.memory.doNothingTicks >= 10) {
                var parkingPosition;

                if (!creep.memory.parkingPos) {
                    var parkingPosition = new RoomPosition((storage.pos.x + 1), (storage.pos.y + 1), creep.room.name);
                    creep.memory.parkingPos = parkingPosition;
                } else {
                    parkingPosition = creep.memory.parkingPos;
                }
                if (creep.pos.x != parkingPosition.x || creep.pos.y != parkingPosition.y) {
                    if (!creep.memory.storedPath) {
                        creep.memory.storedPath = creep.pos.findPathTo(parkingPosition.x, parkingPosition.y);
                    }
                    var moveResult = creep.moveByPath(creep.memory.storedPath);
                    if (moveResult != OK) {
                        creep.memory.storedPath = null;
                    }
                } else {
                    creep.memory.storedPath = null;
                }
            }

            var linkStorage;

            if (creep.memory.linkStorageId == (null || undefined)) {
                linkStorage = storage.pos.findClosestByRange(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_LINK});
                creep.memory.linkStorageId = linkStorage.id;
            } else {
                linkStorage = Game.getObjectById(creep.memory.linkStorageId);
            }

            var terminal;

            if (creep.memory.terminalId) {
                terminal = Game.getObjectById(creep.memory.terminalId);
            } else {
                terminal = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TERMINAL});
                if (terminal) {
                    creep.memory.terminalId = terminal.id;
                }
            }

            var lab = sNeedEnergy.closestLabNeedEnergy(creep);

            var mines = creep.room.find(FIND_MINERALS);
            var mine = mines[0];
            var mineralType = mine.mineralType;

            if (terminal && creep.memory.working == true && creep.carry.energy > 0 && terminal.store[RESOURCE_ENERGY] < 1000
                && storage.store[RESOURCE_ENERGY] > 500) {
                if (creep.transfer(terminal, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(terminal);
                }
            } else if (lab && creep.carry.energy > 0) {
                if (creep.transfer(lab, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(lab);
                }
            } else if (creep.memory.working == true && creep.carry.energy > 0) {
                if (creep.transfer(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(storage);
                }
            } else if (creep.memory.working == true && _.sum(creep.carry) > 0) {
                if (creep.transfer(terminal, mineralType) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(terminal);
                }
            }

            if (creep.carry.energy < creep.carryCapacity && creep.memory.working == false) {
                if (linkStorage.energy > 0) {
                    creep.memory.doNothingTicks = 0;
                    if (creep.withdraw(linkStorage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(linkStorage);
                    }
                } else if (terminal) {
                    if ((terminal.store[mineralType] == undefined
                            || terminal.store[mineralType] < 10000)
                        && storage.store[mineralType] > 2500) {
                        creep.memory.doNothingTicks = 0;
                        if (creep.withdraw(storage, mineralType) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(storage);
                        }
                    } else {
                        creep.memory.doNothingTicks++;
                    }
                }
            }
        }
    },

    labWork: function (creep) {

        var roomMemory = Game.rooms[creep.room.name].memory;

        if (roomMemory.labWork != 'finished' && creep.memory.labWork == 'finished') {
            creep.memory.labWork = 'starting';
            roomMemory.labWork = 'starting';
        }

        var storage;
        if (creep.memory.storageId == (null || undefined)) {
            storage = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_STORAGE});
            creep.memory.storageId = storage.id;
        } else {
            storage = Game.getObjectById(creep.memory.storageId);
        }

        if (creep.memory.labWork == 'starting') {
            if (_.sum(creep.carry) > 0) {
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
            } else {
                creep.memory.labWork = 'started';
                roomMemory.labWork = 'started';
            }
        }

        if (creep.memory.labWork == 'started') {
            if (_.sum(creep.carry) == 0 && (!roomMemory.labWorkFromId || !roomMemory.labWorkToId)) {
                creep.memory.labWork = 'finishing';
            } else {
                if (_.sum(creep.carry) == 0) {
                    creep.memory.storedToId = null;
                    creep.memory.labWorkResource = null;
                }
                var from = Game.getObjectById(roomMemory.labWorkFromId);

                if (!creep.memory.storedToId) {
                    creep.memory.storedToId = roomMemory.labWorkToId;
                }

                if (!creep.memory.labWorkResource) {
                    creep.memory.labWorkResource = roomMemory.labWorkResource;
                }

                var to = Game.getObjectById(creep.memory.storedToId);
                var resource = creep.memory.labWorkResource;

                if(to.structureType == STRUCTURE_LAB && to.mineralType != null && to.mineralType != creep.memory.labWorkResource){
                    creep.memory.labWork = 'finishing';
                }
                if(to.structureType == STRUCTURE_LAB && to.mineralAmount > 2000){
                    creep.memory.labWork = 'finishing';
                }

                if (_.sum(creep.carry) == 0) {
                    if (creep.withdraw(from, resource) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(from);
                    }
                } else {
                    if (creep.transfer(to, resource) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(to);
                    }
                }
            }
        }

        if (creep.memory.labWork == 'finishing') {
            if (_.sum(creep.carry) > 0) {
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
            } else {
                creep.memory.labWork = 'finished';
                roomMemory.labWork = 'finished';
                creep.memory.storedToId = null;
                creep.memory.labWorkResource = null;
            }
        }
    },

    moveResource: function (creep) {

        var roomMemory = Game.rooms[creep.room.name].memory;

        if (roomMemory.moveResource != 'finished' && creep.memory.moveResource == 'finished') {
            creep.memory.moveResource = 'starting';
            roomMemory.moveResource = 'starting';
        }

        var objectFrom = Game.getObjectById(roomMemory.moveResourceFromId);
        var objectTo = Game.getObjectById(roomMemory.moveResourceToId);
        var resources = Game.getObjectById(roomMemory.moveResourceResource);

        var storage;
        if (creep.memory.storageId == (null || undefined)) {
            storage = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_STORAGE});
            creep.memory.storageId = storage.id;
        } else {
            storage = Game.getObjectById(creep.memory.storageId);
        }

        if (creep.memory.moveResource == 'starting') {
            if (_.sum(creep.carry) > 0) {
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
            } else {
                creep.memory.moveResource = 'started';
                roomMemory.moveResource = 'started';
            }
        }

        if (creep.memory.moveResource == 'started') {
            if (_.sum(creep.carry) == 0 && (!roomMemory.moveResourceFromId && !roomMemory.moveResourceToId)) {
                creep.memory.moveResource = 'finishing';
            } else {
                if (_.sum(creep.carry) == 0) {
                    creep.memory.storedToId = null;
                    creep.memory.moveResourceResource = null;
                }

                var from = Game.getObjectById(roomMemory.moveResourceFromId);

                if (!creep.memory.storedToId) {
                    creep.memory.storedToId = roomMemory.moveResourceToId;
                }

                if (!creep.memory.moveResourceResource) {
                    creep.memory.moveResourceResource = roomMemory.moveResourceResource;
                }

                var to = Game.getObjectById(creep.memory.storedToId);
                var resource = creep.memory.moveResourceResource;

                if (_.sum(creep.carry) == 0) {
                    if (creep.withdraw(from, resource) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(from);
                    }
                } else {
                    if (creep.transfer(to, resource) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(to);
                    }
                }
            }
        }


        if (creep.memory.moveResource == 'finishing') {
            if (_.sum(creep.carry) > 0) {
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
            } else {
                creep.memory.moveResource = 'finished';
                roomMemory.moveResource = 'finished';
                creep.memory.storedToId = null;
                creep.memory.labWorkResource = null;
            }
        }
    }


}
;