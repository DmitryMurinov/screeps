var counter = require('helper.counter');


module.exports = {


    runLabs: function (allReservesCount, gameTime) {

        var roomsList = counter.roomsList();

        for (var i in roomsList) {
            var roomName = roomsList[i];
            if (!Game.rooms[roomName].memory.labsBoost &&
                gameTime.substring(gameTime.length - 1, gameTime.length) == '0') {
                this.reaction(roomName, allReservesCount);
            } else {
                this.boost(roomName);
            }
        }

    },

    reaction: function (roomName, allReservesCount) {

        var totalLabs = counter.totalLabs(roomName);
        var resourceNeededType;
        var resourceNeededAmount;

        var roomMemory = Game.rooms[roomName].memory;

        if (!roomMemory.labWork) {
            roomMemory.labWork = 'finished';
        }


        if (totalLabs > 0) {

            var produceModifier = 1;
            if (Game.rooms[roomName].memory.catalizedResourcesBalanced = false) {
                produceModifier = 0.5;
            }

            if (roomName == 'E52N19') {

                if (Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_GHODIUM_ALKALIDE] == undefined ||
                    Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_GHODIUM_ALKALIDE] < 12000 * produceModifier) {
                    resourceNeededType = RESOURCE_CATALYZED_GHODIUM_ALKALIDE;
                    resourceNeededAmount = 1500;
                    this.produce(roomName, totalLabs, resourceNeededType, resourceNeededAmount)
                } else if (allReservesCount[roomName + ";" + RESOURCE_LEMERGIUM_ALKALIDE] > 200 && (
                        Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE] == undefined ||
                        Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE] < 6000 * produceModifier)) {
                    resourceNeededType = RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE;
                    resourceNeededAmount = 1500;
                    this.produce(roomName, totalLabs, resourceNeededType, resourceNeededAmount)
                } else if (allReservesCount[roomName + ";" + RESOURCE_UTRIUM_ALKALIDE] > 200 && (
                        Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_UTRIUM_ALKALIDE] == undefined ||
                        Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_UTRIUM_ALKALIDE] < 6000 * produceModifier)) {
                    resourceNeededType = RESOURCE_CATALYZED_UTRIUM_ALKALIDE;
                    resourceNeededAmount = 1500;
                    this.produce(roomName, totalLabs, resourceNeededType, resourceNeededAmount)
                } else if (Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_ZYNTHIUM_ACID] == undefined ||
                    Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_ZYNTHIUM_ACID] < 6000 * produceModifier) {
                    resourceNeededType = RESOURCE_CATALYZED_ZYNTHIUM_ACID;
                    resourceNeededAmount = 1500;
                    this.produce(roomName, totalLabs, resourceNeededType, resourceNeededAmount)
                } else if (Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_KEANIUM_ALKALIDE] == undefined ||
                    Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_KEANIUM_ALKALIDE] < 6000 * produceModifier) {
                    resourceNeededType = RESOURCE_CATALYZED_KEANIUM_ALKALIDE;
                    resourceNeededAmount = 1500;
                    this.produce(roomName, totalLabs, resourceNeededType, resourceNeededAmount)
                } else if (Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_UTRIUM_ACID] == undefined ||
                    Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_UTRIUM_ACID] < 6000 * produceModifier) {
                    resourceNeededType = RESOURCE_CATALYZED_UTRIUM_ACID;
                    resourceNeededAmount = 1500;
                    this.produce(roomName, totalLabs, resourceNeededType, resourceNeededAmount)
                } else {
                    roomMemory.labWork == 'finished';
                    roomMemory.labWorkFromId = null;
                    roomMemory.labWorkToId = null;
                }
            } else if (roomName == 'E53N16') {
                if (Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_GHODIUM_ALKALIDE] == undefined ||
                    Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_GHODIUM_ALKALIDE] < 12000 * produceModifier) {
                    resourceNeededType = RESOURCE_CATALYZED_GHODIUM_ALKALIDE;
                    resourceNeededAmount = 1500;
                    this.produce(roomName, totalLabs, resourceNeededType, resourceNeededAmount)
                } else if (allReservesCount[roomName + ";" + RESOURCE_LEMERGIUM_ALKALIDE] > 200 && (
                        Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE] == undefined ||
                        Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE] < 6000 * produceModifier)) {
                    resourceNeededType = RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE;
                    resourceNeededAmount = 1500;
                    this.produce(roomName, totalLabs, resourceNeededType, resourceNeededAmount)
                } else if (allReservesCount[roomName + ";" + RESOURCE_UTRIUM_ALKALIDE] > 200 && (
                        Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_UTRIUM_ALKALIDE] == undefined ||
                        Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_UTRIUM_ALKALIDE] < 6000 * produceModifier)) {
                    resourceNeededType = RESOURCE_CATALYZED_UTRIUM_ALKALIDE;
                    resourceNeededAmount = 1500;
                    this.produce(roomName, totalLabs, resourceNeededType, resourceNeededAmount)
                } else if (Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_ZYNTHIUM_ACID] == undefined ||
                    Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_ZYNTHIUM_ACID] < 6000 * produceModifier) {
                    resourceNeededType = RESOURCE_CATALYZED_ZYNTHIUM_ACID;
                    resourceNeededAmount = 1500;
                    this.produce(roomName, totalLabs, resourceNeededType, resourceNeededAmount)
                } else if (Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_KEANIUM_ALKALIDE] == undefined ||
                    Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_KEANIUM_ALKALIDE] < 6000 * produceModifier) {
                    resourceNeededType = RESOURCE_CATALYZED_KEANIUM_ALKALIDE;
                    resourceNeededAmount = 1500;
                    this.produce(roomName, totalLabs, resourceNeededType, resourceNeededAmount)
                } else if (Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_UTRIUM_ACID] == undefined ||
                    Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_UTRIUM_ACID] < 6000 * produceModifier) {
                    resourceNeededType = RESOURCE_CATALYZED_UTRIUM_ACID;
                    resourceNeededAmount = 1500;
                    this.produce(roomName, totalLabs, resourceNeededType, resourceNeededAmount)
                } else {
                    roomMemory.labWork == 'finished';
                    roomMemory.labWorkFromId = null;
                    roomMemory.labWorkToId = null;
                }
            }
        }
    },

    boost: function (roomName) {

        var totalLabs = counter.totalLabs(roomName);
        var resourceNeededType;
        var resourceNeededAmount;

        var storage = Game.rooms[roomName].storage;
        var terminal = Game.rooms[roomName].terminal;
        if (storage && terminal) {
            var terminalPosition = terminal.pos;

            var roomMemory = Game.rooms[roomName].memory;

            if (roomMemory.boostWait == undefined || roomMemory.boostWait == null) {
                roomMemory.boostWait = 0;
            }

            if (roomMemory.boostWait > 20) {
                roomMemory.labsBoost = false;
            }

            if (!roomMemory.labWork) {
                roomMemory.labWork = 'finished';
            }

            if (totalLabs == 3) {

                var terminalPosition = Game.rooms[roomName].terminal.pos;

                var lab1 = Game.rooms[roomName].lookForAt('structure', terminalPosition.x, terminalPosition.y + 2)[0];
                var lab2 = Game.rooms[roomName].lookForAt('structure', terminalPosition.x, terminalPosition.y + 1)[0];
                var lab3 = Game.rooms[roomName].lookForAt('structure', terminalPosition.x + 1, terminalPosition.y + 1)[0];

                var upgradePosition = new RoomPosition(Game.rooms[roomName].terminal.pos.x + 1, Game.rooms[roomName].terminal.pos.y + 2, roomName);
                var creeps = Game.rooms[roomName].lookForAt(LOOK_CREEPS, upgradePosition);

                var creep;
                if (creeps.length > 0) {
                    creep = creeps[0];
                }

                if (creep) {
                    if (creep.memory.role.indexOf('medic') !== -1
                        || creep.memory.role == 'pureMiner' || creep.memory.role.indexOf('controllerAttacker') !== -1 ||
                        creep.memory.role.indexOf('dismantalist') !== -1 ||
                        creep.memory.role.indexOf('attackerLogic') !== -1) {
                        var ingredient1 = this.ingredientsBoost(creep.memory.role)[0];
                        var ingredient2;
                        if (this.ingredientsBoost(creep.memory.role)[1] != undefined) {
                            ingredient2 = this.ingredientsBoost(creep.memory.role)[1];
                        }
                        var ingredient3;
                        if (this.ingredientsBoost(creep.memory.role)[2] != undefined) {
                            ingredient3 = this.ingredientsBoost(creep.memory.role)[2];
                        }
                        if (lab1.mineralType != null && lab1.mineralType != ingredient1) {
                            if (roomMemory.labWork != 'starting' && roomMemory.labWork != 'started') {
                                roomMemory.labWork = 'starting';
                            }
                            roomMemory.labWorkFromId = lab1.id;
                            roomMemory.labWorkToId = storage.id;
                            roomMemory.labWorkResource = lab1.mineralType;
                        } else if (ingredient2 && lab2.mineralType != null && lab2.mineralType != ingredient2) {
                            if (roomMemory.labWork != 'starting' && roomMemory.labWork != 'started') {
                                roomMemory.labWork = 'starting';
                            }
                            roomMemory.labWorkFromId = lab2.id;
                            roomMemory.labWorkToId = storage.id;
                            roomMemory.labWorkResource = lab2.mineralType;
                        } else if (lab1.mineralAmount < 30 && (terminal.store[ingredient1] > 0 ||
                                storage.store[ingredient1] > 0)) {
                            if (roomMemory.labWork != 'starting' && roomMemory.labWork != 'started') {
                                roomMemory.labWork = 'starting';
                            }
                            if (terminal.store[ingredient1] > 0) {
                                roomMemory.labWorkFromId = terminal.id;
                            } else {
                                roomMemory.labWorkFromId = storage.id;
                            }
                            roomMemory.labWorkToId = lab1.id;
                            roomMemory.labWorkResource = ingredient1;
                        } else if (ingredient2 && lab2.mineralAmount < 30 && (terminal.store[ingredient2] > 0 ||
                                storage.store[ingredient2] > 0)) {
                            if (roomMemory.labWork != 'starting' && roomMemory.labWork != 'started') {
                                roomMemory.labWork = 'starting';
                            }
                            if (terminal.store[ingredient2] > 0) {
                                roomMemory.labWorkFromId = terminal.id;
                            } else {
                                roomMemory.labWorkFromId = storage.id;
                            }
                            roomMemory.labWorkToId = lab2.id;
                            roomMemory.labWorkResource = ingredient2;
                        } else if (ingredient3 && lab3.mineralAmount < 30 && (terminal.store[ingredient3] > 0 ||
                                storage.store[ingredient3] > 0)) {
                            if (roomMemory.labWork != 'starting' && roomMemory.labWork != 'started') {
                                roomMemory.labWork = 'starting';
                            }
                            if (terminal.store[ingredient3] > 0) {
                                roomMemory.labWorkFromId = terminal.id;
                            } else {
                                roomMemory.labWorkFromId = storage.id;
                            }
                            roomMemory.labWorkToId = lab3.id;
                            roomMemory.labWorkResource = ingredient3;
                        } else {

                        }

                        if (lab1.mineralType != null && lab1.mineralType == ingredient1) {
                            lab1.boostCreep(creep);
                        }
                        if (ingredient2 && lab2.mineralType != null && lab2.mineralType == ingredient2) {
                            lab2.boostCreep(creep);
                        }
                        if (ingredient3 && lab3.mineralType != null && lab3.mineralType == ingredient3) {
                            lab3.boostCreep(creep);
                        }

                    } else {
                        roomName.boostWait++;
                    }
                } else {
                    roomName.boostWait++;
                }
            }
        }
    }
    ,

    produce: function (roomName, totalLabs, resourceNeededType, resourceNeededAmount) {

        var storage = Game.rooms[roomName].storage;
        var terminal = Game.rooms[roomName].terminal;
        var terminalPosition = terminal.pos;
        var roomMemory = Game.rooms[roomName].memory;

        if (totalLabs == 3) {
            var lab1 = Game.rooms[roomName].lookForAt('structure', terminalPosition.x, terminalPosition.y + 2)[0];
            var lab2 = Game.rooms[roomName].lookForAt('structure', terminalPosition.x, terminalPosition.y + 1)[0];
            var lab3 = Game.rooms[roomName].lookForAt('structure', terminalPosition.x + 1, terminalPosition.y + 1)[0];


            var ingredient1 = this.ingredientsReaction(resourceNeededType)[0];
            var ingredient2 = this.ingredientsReaction(resourceNeededType)[1];


            if ((lab1.mineralType != null && lab1.mineralType != resourceNeededType) || lab1.mineralAmount > 500) {
                if (roomMemory.labWork != 'starting' && roomMemory.labWork != 'started') {
                    roomMemory.labWork = 'starting';
                }
                roomMemory.labWorkFromId = lab1.id;
                roomMemory.labWorkToId = storage.id;
                roomMemory.labWorkResource = lab1.mineralType;
            } else if (lab2.mineralType != null && lab2.mineralType != ingredient1) {
                if (roomMemory.labWork != 'starting' && roomMemory.labWork != 'started') {
                    roomMemory.labWork = 'starting';
                }
                roomMemory.labWorkFromId = lab2.id;
                roomMemory.labWorkToId = storage.id;
                roomMemory.labWorkResource = lab2.mineralType;
            } else if (lab3.mineralType != null && lab3.mineralType != ingredient2) {
                if (roomMemory.labWork != 'starting' && roomMemory.labWork != 'started') {
                    roomMemory.labWork = 'starting';
                }
                roomMemory.labWorkFromId = lab3.id;
                roomMemory.labWorkToId = storage.id;
                roomMemory.labWorkResource = lab3.mineralType;
            } else if (lab2.mineralAmount < 500 && (terminal.store[ingredient1] >= 100 ||
                    storage.store[ingredient1] >= 100)) {
                if (roomMemory.labWork != 'starting' && roomMemory.labWork != 'started') {
                    roomMemory.labWork = 'starting';
                }
                if (terminal.store[ingredient1] >= 100) {
                    roomMemory.labWorkFromId = terminal.id;
                } else {
                    roomMemory.labWorkFromId = storage.id;
                }
                roomMemory.labWorkToId = lab2.id;
                roomMemory.labWorkResource = ingredient1;
            } else if (lab3.mineralAmount < 500 && (terminal.store[ingredient2] >= 100 ||
                    storage.store[ingredient2] >= 100)) {
                if (roomMemory.labWork != 'starting' && roomMemory.labWork != 'started') {
                    roomMemory.labWork = 'starting';
                }
                if (terminal.store[ingredient2] >= 100) {
                    roomMemory.labWorkFromId = terminal.id;
                } else {
                    roomMemory.labWorkFromId = storage.id;
                }
                roomMemory.labWorkToId = lab3.id;
                roomMemory.labWorkResource = ingredient2;
            } else {
                roomMemory.labWorkFromId = null;
                roomMemory.labWork = 'finished';
            }

            if (lab2.mineralType == ingredient1 && lab2.mineralAmount > 0 && lab3.mineralType == ingredient2 && lab3.mineralAmount > 0) {
                lab1.runReaction(lab2, lab3);
            }
        }
    },

    ingredientsReaction: function (resourceType) {
        if (resourceType == RESOURCE_HYDROXIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_HYDROGEN);
            resourcesList.push(RESOURCE_OXYGEN);
            return resourcesList;
        } else if (resourceType == RESOURCE_ZYNTHIUM_KEANITE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_ZYNTHIUM);
            resourcesList.push(RESOURCE_KEANIUM);
            return resourcesList;
        } else if (resourceType == RESOURCE_UTRIUM_LEMERGITE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_UTRIUM);
            resourcesList.push(RESOURCE_LEMERGIUM);
            return resourcesList;
        } else if (resourceType == RESOURCE_GHODIUM) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_ZYNTHIUM_KEANITE);
            resourcesList.push(RESOURCE_UTRIUM_LEMERGITE);
            return resourcesList;
        } else if (resourceType == RESOURCE_UTRIUM_HYDRIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_UTRIUM);
            resourcesList.push(RESOURCE_HYDROGEN);
            return resourcesList;
        } else if (resourceType == RESOURCE_UTRIUM_OXIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_UTRIUM);
            resourcesList.push(RESOURCE_OXYGEN);
            return resourcesList;
        } else if (resourceType == RESOURCE_KEANIUM_HYDRIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_KEANIUM);
            resourcesList.push(RESOURCE_HYDROGEN);
            return resourcesList;
        } else if (resourceType == RESOURCE_KEANIUM_OXIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_KEANIUM);
            resourcesList.push(RESOURCE_OXYGEN);
            return resourcesList;
        } else if (resourceType == RESOURCE_LEMERGIUM_HYDRIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_LEMERGIUM);
            resourcesList.push(RESOURCE_HYDROGEN);
            return resourcesList;
        } else if (resourceType == RESOURCE_LEMERGIUM_OXIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_LEMERGIUM);
            resourcesList.push(RESOURCE_OXYGEN);
            return resourcesList;
        } else if (resourceType == RESOURCE_ZYNTHIUM_HYDRIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_ZYNTHIUM);
            resourcesList.push(RESOURCE_HYDROGEN);
            return resourcesList;
        } else if (resourceType == RESOURCE_ZYNTHIUM_OXIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_ZYNTHIUM);
            resourcesList.push(RESOURCE_OXYGEN);
            return resourcesList;
        } else if (resourceType == RESOURCE_GHODIUM_HYDRIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_GHODIUM);
            resourcesList.push(RESOURCE_HYDROGEN);
            return resourcesList;
        } else if (resourceType == RESOURCE_GHODIUM_OXIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_GHODIUM);
            resourcesList.push(RESOURCE_OXYGEN);
            return resourcesList;
        } else if (resourceType == RESOURCE_UTRIUM_ACID) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_UTRIUM_HYDRIDE);
            resourcesList.push(RESOURCE_HYDROXIDE);
            return resourcesList;
        } else if (resourceType == RESOURCE_UTRIUM_ALKALIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_UTRIUM_OXIDE);
            resourcesList.push(RESOURCE_HYDROXIDE);
            return resourcesList;
        } else if (resourceType == RESOURCE_KEANIUM_ACID) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_KEANIUM_HYDRIDE);
            resourcesList.push(RESOURCE_HYDROXIDE);
            return resourcesList;
        } else if (resourceType == RESOURCE_KEANIUM_ALKALIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_KEANIUM_OXIDE);
            resourcesList.push(RESOURCE_HYDROXIDE);
            return resourcesList;
        } else if (resourceType == RESOURCE_LEMERGIUM_ACID) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_LEMERGIUM_HYDRIDE);
            resourcesList.push(RESOURCE_HYDROXIDE);
            return resourcesList;
        } else if (resourceType == RESOURCE_LEMERGIUM_ALKALIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_LEMERGIUM_OXIDE);
            resourcesList.push(RESOURCE_HYDROXIDE);
            return resourcesList;
        } else if (resourceType == RESOURCE_ZYNTHIUM_ACID) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_ZYNTHIUM_HYDRIDE);
            resourcesList.push(RESOURCE_HYDROXIDE);
            return resourcesList;
        } else if (resourceType == RESOURCE_ZYNTHIUM_ALKALIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_ZYNTHIUM_OXIDE);
            resourcesList.push(RESOURCE_HYDROXIDE);
            return resourcesList;
        } else if (resourceType == RESOURCE_GHODIUM_ACID) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_GHODIUM_HYDRIDE);
            resourcesList.push(RESOURCE_HYDROXIDE);
            return resourcesList;
        } else if (resourceType == RESOURCE_GHODIUM_ALKALIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_GHODIUM_OXIDE);
            resourcesList.push(RESOURCE_HYDROXIDE);
            return resourcesList;
        } else if (resourceType == RESOURCE_CATALYZED_UTRIUM_ACID) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_UTRIUM_ACID);
            resourcesList.push(RESOURCE_CATALYST);
            return resourcesList;
        } else if (resourceType == RESOURCE_CATALYZED_UTRIUM_ALKALIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_UTRIUM_ALKALIDE);
            resourcesList.push(RESOURCE_CATALYST);
            return resourcesList;
        } else if (resourceType == RESOURCE_CATALYZED_KEANIUM_ACID) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_KEANIUM_ACID);
            resourcesList.push(RESOURCE_CATALYST);
            return resourcesList;
        } else if (resourceType == RESOURCE_CATALYZED_KEANIUM_ALKALIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_KEANIUM_ALKALIDE);
            resourcesList.push(RESOURCE_CATALYST);
            return resourcesList;
        } else if (resourceType == RESOURCE_CATALYZED_LEMERGIUM_ACID) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_LEMERGIUM_ACID);
            resourcesList.push(RESOURCE_CATALYST);
            return resourcesList;
        } else if (resourceType == RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_LEMERGIUM_ALKALIDE);
            resourcesList.push(RESOURCE_CATALYST);
            return resourcesList;
        } else if (resourceType == RESOURCE_CATALYZED_ZYNTHIUM_ACID) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_ZYNTHIUM_ACID);
            resourcesList.push(RESOURCE_CATALYST);
            return resourcesList;
        } else if (resourceType == RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_ZYNTHIUM_ALKALIDE);
            resourcesList.push(RESOURCE_CATALYST);
            return resourcesList;
        } else if (resourceType == RESOURCE_CATALYZED_GHODIUM_ACID) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_GHODIUM_ACID);
            resourcesList.push(RESOURCE_CATALYST);
            return resourcesList;
        } else if (resourceType == RESOURCE_CATALYZED_GHODIUM_ALKALIDE) {
            var resourcesList = new Array();
            resourcesList.push(RESOURCE_GHODIUM_ALKALIDE);
            resourcesList.push(RESOURCE_CATALYST);
            return resourcesList;
        }
    },

    ingredientsBoost: function (role) {

        if (role.indexOf('controllerAttacker') !== -1 || role.indexOf('medic') !== -1) {
            var resourceList = new Array();
            resourceList.push(RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE);
            resourceList.push(RESOURCE_CATALYZED_GHODIUM_ALKALIDE);
            return resourceList;
        } else if (role == 'pureMiner') {
            var resourceList = new Array();
            resourceList.push(RESOURCE_CATALYZED_UTRIUM_ALKALIDE);
            return resourceList;
        } else if (role.indexOf('dismantalist') !== -1) {
            var resourceList = new Array();
            resourceList.push(RESOURCE_CATALYZED_ZYNTHIUM_ACID);
            resourceList.push(RESOURCE_CATALYZED_GHODIUM_ALKALIDE);
            return resourceList;
        } else if (role.indexOf('attackerLogic') !== -1) {
            var resourceList = new Array();
            resourceList.push(RESOURCE_CATALYZED_GHODIUM_ALKALIDE);
            return resourceList;
        }
    }

};