var creepTemplates = require('creep.templates');

module.exports = {

    create: function (roomName, allCreepsCount, gameTime, creepsData, creepsNeeded, allReservesCount) {

        var localMadeCreeps = allCreepsCount[roomName + ";total"];
        var localMadeBasicCreeps = allCreepsCount[roomName + ";basicCreep"];
        var localMadePureHarvesters = allCreepsCount[roomName + ";pureHarvester"];
        var localMadePureMiners = allCreepsCount[roomName + ";pureMiner"];
        var localMadeCouriers = allCreepsCount[roomName + ";courier"];
        var localMadeUpgraders = allCreepsCount[roomName + ";upgrader"];
        var localMadeBasicCreepsOuter1 = allCreepsCount[roomName + ";basicCreepOuter1"];
        var localMadeBasicCreepsOuter2 = allCreepsCount[roomName + ";basicCreepOuter2"];
        var localMadeBasicCreepsOuter3 = allCreepsCount[roomName + ";basicCreepOuter3"];
        var localMadeBasicCreepsOuter4 = allCreepsCount[roomName + ";basicCreepOuter4"];
        var localMadeBasicCreepsOuter5 = allCreepsCount[roomName + ";basicCreepOuter5"];
        var localMadeBasicCreepsOuter6 = allCreepsCount[roomName + ";basicCreepOuter6"];
        var localMadeOuterHarvesterLogic = allCreepsCount[roomName + ";outerHarvesterLogic"];
        var localMadeOuterHarvesterLogic1 = allCreepsCount[roomName + ";outerHarvesterLogic1"];
        var localMadeOuterHarvesterLogic2 = allCreepsCount[roomName + ";outerHarvesterLogic2"];
        var localMadeOuterHarvesterLogic3 = allCreepsCount[roomName + ";outerHarvesterLogic3"];
        var localMadeOuterHarvesterLogic4 = allCreepsCount[roomName + ";outerHarvesterLogic4"];
        var localMadeOuterHarvesterLogic5 = allCreepsCount[roomName + ";outerHarvesterLogic5"];
        var localMadeOuterCourierLogic1 = allCreepsCount[roomName + ";outerCourierLogic1"];
        var localMadeOuterCourierLogic2 = allCreepsCount[roomName + ";outerCourierLogic2"];
        var localMadeOuterCourierLogic3 = allCreepsCount[roomName + ";outerCourierLogic3"];
        var localMadeOuterCourierLogic4 = allCreepsCount[roomName + ";outerCourierLogic4"];
        var localMadeOuterCourierLogic5 = allCreepsCount[roomName + ";outerCourierLogic5"];
        var localMadeAttackerLogic1 = allCreepsCount[roomName + ";attackerLogic1"];
        var localMadeAttackerLogic2 = allCreepsCount[roomName + ";attackerLogic2"];
        var localMadeAttackerLogic3 = allCreepsCount[roomName + ";attackerLogic3"];
        var localMadeAttackerLogic4 = allCreepsCount[roomName + ";attackerLogic4"];
        var localMadeAttackerLogic5 = allCreepsCount[roomName + ";attackerLogic5"];
        var localMadeAttackerLogic6 = allCreepsCount[roomName + ";attackerLogic6"];
        var localMadeAttackerLogic7 = allCreepsCount[roomName + ";attackerLogic7"];
        var localMadeAttackerLogic8 = allCreepsCount[roomName + ";attackerLogic8"];

        var localMadeRangedAttacker1 = allCreepsCount[roomName + ";rangedAttacker1"];

        var localMadeKeeperKiller1 = allCreepsCount[roomName + ";keeperKiller1"];
        var localMadeKeeperKiller2 = allCreepsCount[roomName + ";keeperKiller2"];
        var localMadeKeeperKiller3 = allCreepsCount[roomName + ";keeperKiller3"];
        var localMadeKeeperKiller4 = allCreepsCount[roomName + ";keeperKiller4"];
        var localMadeKeeperKiller5 = allCreepsCount[roomName + ";keeperKiller5"];

        var controllerAttacker1 = allCreepsCount[roomName + ";controllerAttacker1"];
        var controllerAttacker2 = allCreepsCount[roomName + ";controllerAttacker2"];
        var localMadeOuterReserver1 = allCreepsCount[roomName + ";outerReserver1"];
        var localMadeOuterReserver2 = allCreepsCount[roomName + ";outerReserver2"];
        var localMadeOuterReserver3 = allCreepsCount[roomName + ";outerReserver3"];
        var localMadeOuterReserver4 = allCreepsCount[roomName + ";outerReserver4"];
        var localMadeOuterReserver5 = allCreepsCount[roomName + ";outerReserver5"];
        var localMadeDismantilist1 = allCreepsCount[roomName + ";dismantilist1"];
        var localMadeDismantilist2 = allCreepsCount[roomName + ";dismantilist2"];
        var localMadeMedic1 = allCreepsCount[roomName + ";medic1"];
        var localMadeMedic2 = allCreepsCount[roomName + ";medic2"];
        var localMadeSieger = allCreepsCount[roomName + ";sieger"];
        var localMadeBankir = allCreepsCount[roomName + ";bankir"];
        var localMadeCourierMiner = allCreepsCount[roomName + ";courierMiner"];
        var localMadeExausters = allCreepsCount[roomName + ";exauster"];
        var localMadeDefender = allCreepsCount[roomName + ";defender"];

        var localMadeBasicCreepsNeeded = creepsNeeded.get("basicCreep");
        var localMadePureHarvestersNeeded = creepsNeeded.get("pureHarvester");
        var localMadePureMinersNeeded = creepsNeeded.get("pureMiner");
        var localMadeCouriersNeeded = creepsNeeded.get("courier");
        var localMadeUpgradersNeeded = creepsNeeded.get("upgrader");
        var localMadeBasicCreepsOuter1Needed = creepsNeeded.get("basicCreepOuter1");
        var localMadeBasicCreepsOuter2Needed = creepsNeeded.get("basicCreepOuter2");
        var localMadeBasicCreepsOuter3Needed = creepsNeeded.get("basicCreepOuter3");
        var localMadeBasicCreepsOuter4Needed = creepsNeeded.get("basicCreepOuter4");
        var localMadeBasicCreepsOuter5Needed = creepsNeeded.get("basicCreepOuter5");
        var localMadeBasicCreepsOuter6Needed = creepsNeeded.get("basicCreepOuter6");
        var localMadeOuterHarvesterLogicNeeded = creepsNeeded.get("outerHarvesterLogic");
        var localMadeOuterHarvesterLogic1Needed = creepsNeeded.get("outerHarvesterLogic1");
        var localMadeOuterHarvesterLogic2Needed = creepsNeeded.get("outerHarvesterLogic2");
        var localMadeOuterHarvesterLogic3Needed = creepsNeeded.get("outerHarvesterLogic3");
        var localMadeOuterHarvesterLogic4Needed = creepsNeeded.get("outerHarvesterLogic4");
        var localMadeOuterHarvesterLogic5Needed = creepsNeeded.get("outerHarvesterLogic5");
        var localMadeOuterCourierLogic1Needed = creepsNeeded.get("outerCourierLogic1");
        var localMadeOuterCourierLogic2Needed = creepsNeeded.get("outerCourierLogic2");
        var localMadeOuterCourierLogic3Needed = creepsNeeded.get("outerCourierLogic3");
        var localMadeOuterCourierLogic4Needed = creepsNeeded.get("outerCourierLogic4");
        var localMadeOuterCourierLogic5Needed = creepsNeeded.get("outerCourierLogic5");
        var localMadeAttackerLogic1Needed = creepsNeeded.get("attackerLogic1");
        var localMadeAttackerLogic2Needed = creepsNeeded.get("attackerLogic2");
        var localMadeAttackerLogic3Needed = creepsNeeded.get("attackerLogic3");
        var localMadeAttackerLogic4Needed = creepsNeeded.get("attackerLogic4");
        var localMadeAttackerLogic5Needed = creepsNeeded.get("attackerLogic5");
        var localMadeAttackerLogic6Needed = creepsNeeded.get("attackerLogic6");
        var localMadeAttackerLogic7Needed = creepsNeeded.get("attackerLogic7");
        var localMadeAttackerLogic8Needed = creepsNeeded.get("attackerLogic8");
        var localMadeRangedAttacker1Needed = creepsNeeded.get("rangedAttacker1");
        var localMadeKeeperKiller1Needed = creepsNeeded.get("keeperKiller1");
        var localMadeKeeperKiller2Needed = creepsNeeded.get("keeperKiller2");
        var localMadeKeeperKiller3Needed = creepsNeeded.get("keeperKiller3");
        var localMadeKeeperKiller4Needed = creepsNeeded.get("keeperKiller4");
        var localMadeKeeperKiller5Needed = creepsNeeded.get("keeperKiller5");
        var controllerAttacker1Needed = creepsNeeded.get("controllerAttacker1");
        var controllerAttacker2Needed = creepsNeeded.get("controllerAttacker2");
        var localMadeOuterReserver1Needed = creepsNeeded.get("outerReserver1");
        var localMadeOuterReserver2Needed = creepsNeeded.get("outerReserver2");
        var localMadeOuterReserver3Needed = creepsNeeded.get("outerReserver3");
        var localMadeOuterReserver4Needed = creepsNeeded.get("outerReserver4");
        var localMadeOuterReserver5Needed = creepsNeeded.get("outerReserver5");
        var localMadeDismantilist1Needed = creepsNeeded.get("dismantilist1");
        var localMadeDismantilist2Needed = creepsNeeded.get("dismantilist2");
        var localMadeMedic1Needed = creepsNeeded.get("medic1");
        var localMadeMedic2Needed = creepsNeeded.get("medic2");
        var localMadeSiegerNeeded = creepsNeeded.get("sieger");
        // var localMadeBankirNeeded = creepsNeeded.get("bankir");
        // var localMadeCourierMinerNeeded = creepsNeeded.get("courierMiner");
        var localMadeExaustersNeeded = creepsNeeded.get("exauster");

        var localMadeDefenderNeeded = 0;

        var enemies;
        if (enemies == undefined) {
            enemies = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS, {
                filter:
                    (c) => c.owner.username == 'Creepz'
            });
        }

        if (enemies && enemies.length > 0) {
            if (enemies.length <= 2) {
                localMadeDefenderNeeded = 5;
            } else {
                localMadeDefenderNeeded = enemies.length * 2.5;
            }
        }

        var mines = Game.rooms[roomName].find(FIND_MINERALS);
        var mine = mines[0];

        var controllerLevel = Game.rooms[roomName].controller.level;

        var roomMemory = Game.rooms[roomName].memory;

        if (controllerLevel < 6) {
            roomMemory.haveExtractor = false;
        } else if (roomMemory.haveExtractor == false) {
            var extractors = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_EXTRACTOR});
            if (extractors.length > 0) {
                roomMemory.haveExtractor = true;
            }
        }

        var localMadePureMinersNeeded = 0;
        if (mine.mineralAmount > 0 && roomMemory.haveExtractor == true) {
            localMadePureMinersNeeded = 1;
        }

        var localMadeBankirNeeded = 0;

        if (controllerLevel >= 6) {
            localMadeBankirNeeded = 1;
        }

        if (controllerLevel < 8) {
            if (allReservesCount[roomName + ";" + RESOURCE_ENERGY] > 200000) {
                localMadeUpgradersNeeded += 2;
            } else if (allReservesCount[roomName + ";" + RESOURCE_ENERGY] > 100000) {
                localMadeUpgradersNeeded += 1;
            }
        }

        var roomToWorkName1 = null;
        var roomToWorkX1 = null;
        var roomToWorkY1 = null;
        var roomToWorkName2 = null;
        var roomToWorkX2 = null;
        var roomToWorkY2 = null;
        var roomToWorkName3 = null;
        var roomToWorkX3 = null;
        var roomToWorkY3 = null;
        var roomToWorkName4 = null;
        var roomToWorkX4 = null;
        var roomToWorkY4 = null;
        var roomToWorkName5 = null;
        var roomToWorkX5 = null;
        var roomToWorkY5 = null;

        if (roomMemory.roomToWorkName1) {
            roomToWorkName1 = roomMemory.roomToWorkName1;
            roomToWorkX1 = roomMemory.roomToWorkX1;
            roomToWorkY1 = roomMemory.roomToWorkY1;
        }
        if (roomMemory.roomToWorkName2) {
            roomToWorkName2 = roomMemory.roomToWorkName2;
            roomToWorkX2 = roomMemory.roomToWorkX2;
            roomToWorkY2 = roomMemory.roomToWorkY2;
        }
        if (roomMemory.roomToWorkName3) {
            roomToWorkName3 = roomMemory.roomToWorkName3;
            roomToWorkX3 = roomMemory.roomToWorkX3;
            roomToWorkY3 = roomMemory.roomToWorkY3;
        }
        if (roomMemory.roomToWorkName4) {
            roomToWorkName4 = roomMemory.roomToWorkName4;
            roomToWorkX4 = roomMemory.roomToWorkX4;
            roomToWorkY4 = roomMemory.roomToWorkY4;
        }
        if (roomMemory.roomToWorkName5) {
            roomToWorkName5 = roomMemory.roomToWorkName5;
            roomToWorkX5 = roomMemory.roomToWorkX5;
            roomToWorkY5 = roomMemory.roomToWorkY5;
        }

        if (gameTime.substring(gameTime.length - 3, gameTime.length) === '500') {
            var creepPotential = 0;

            if (controllerLevel < 7) {
                creepPotential = 300 * _.sum(Game.spawns, (s) => s.room.name == roomName && s.owner.username == 'Dehar')
                    + 50 * _.sum(Game.structures, (s) => s.room.name == roomName && s.owner.username == 'Dehar' &&
                        s.structureType == STRUCTURE_EXTENSION);
            } else if (controllerLevel == 7) {
                creepPotential = 300 * _.sum(Game.spawns, (s) => s.room.name == roomName && s.owner.username == 'Dehar')
                    + 100 * _.sum(Game.structures, (s) => s.room.name == roomName && s.owner.username == 'Dehar' &&
                        s.structureType == STRUCTURE_EXTENSION);

            } else if (controllerLevel == 8) {
                creepPotential = 300 * _.sum(Game.spawns, (s) => s.room.name == roomName && s.owner.username == 'Dehar')
                    + 200 * _.sum(Game.structures, (s) => s.room.name == roomName && s.owner.username == 'Dehar' &&
                        s.structureType == STRUCTURE_EXTENSION);
            }

            roomMemory.creepPotential = creepPotential;
        }

        if (!roomMemory.creepPotential) {
            var creepPotential = 0;

            if (controllerLevel < 7) {
                creepPotential = 300 * _.sum(Game.spawns, (s) => s.room.name == roomName && s.owner.username == 'Dehar')
                    + 50 * _.sum(Game.structures, (s) => s.room.name == roomName && s.owner.username == 'Dehar' &&
                        s.structureType == STRUCTURE_EXTENSION);
            } else if (controllerLevel == 7) {
                creepPotential = 300 * _.sum(Game.spawns, (s) => s.room.name == roomName && s.owner.username == 'Dehar')
                    + 100 * _.sum(Game.structures, (s) => s.room.name == roomName && s.owner.username == 'Dehar' &&
                        s.structureType == STRUCTURE_EXTENSION);

            } else if (controllerLevel == 8) {
                creepPotential = 300 * _.sum(Game.spawns, (s) => s.room.name == roomName && s.owner.username == 'Dehar')
                    + 200 * _.sum(Game.structures, (s) => s.room.name == roomName && s.owner.username == 'Dehar' &&
                        s.structureType == STRUCTURE_EXTENSION);
            }

            roomMemory.creepPotential = creepPotential;
        }

        var freeSpawn;

        loopSpawns:
            for (let i in Game.spawns) {
                var spawn = (Game.spawns[i]);

                if (spawn.room.name == roomName && spawn.isActive() === true && spawn.spawning === null) {
                    freeSpawn = spawn;
                    break loopSpawns;
                }
            }

        var creepPotential = roomMemory.creepPotential;

        if (freeSpawn != undefined) {
            if (controllerLevel >= 3 && creepPotential >= 800 && localMadeCreeps >= 4) {
                var pureMinerLevel = 6;
                var upgraderLevel = controllerLevel;
                var pureMinerXUH02 = 540;
                if (creepPotential < 550) {
                    controllerLevel = 1;
                } else if (creepPotential < 800) {
                    controllerLevel = 2;
                } else if (creepPotential < 1300) {
                    controllerLevel = 3;
                } else if (creepPotential < 1800) {
                    controllerLevel = 4;
                } else if (creepPotential < 2300) {
                    pureMinerLevel = 5;
                    pureMinerXUH02 = 420;
                }

                //Pure miner upgrade resources calc


                var controllerLevel1to3 = controllerLevel;
                if (controllerLevel > 3) {
                    controllerLevel1to3 = 3;
                }

                var controllerLevel1to4 = controllerLevel;
                if (controllerLevel > 4) {
                    controllerLevel1to4 = 4;
                }

                var controllerLevel1to5 = controllerLevel;
                if (controllerLevel > 5) {
                    controllerLevel1to5 = 5;
                }

                var controllerLevel1to6 = controllerLevel;
                if (controllerLevel > 6) {
                    controllerLevel1to6 = 6;
                }

                var controllerLevel1to7 = controllerLevel;
                if (controllerLevel == 8) {
                    controllerLevel1to7 = 7;
                }

                if (localMadeCreeps < 2) {
                    var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, CARRY, CARRY, MOVE, MOVE], " +
                        "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                    eval(createString);
                } else if (localMadeBasicCreeps < localMadeBasicCreepsNeeded) {
                    var memory = "{role: 'basicCreep', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreep\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadePureHarvesters < localMadePureHarvestersNeeded) {
                    var memory = "{role: 'pureHarvester', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel >= 6 && localMadePureMiners < localMadePureMinersNeeded) {
                    var pureMinerBoost = false;
                    var a = 0;
                    var b = 0;
                    if (Game.rooms[roomName].storage && Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_UTRIUM_ALKALIDE] != undefined) {
                        a = Game.rooms[roomName].storage.store[RESOURCE_CATALYZED_UTRIUM_ALKALIDE];
                    }
                    if (Game.rooms[roomName].terminal && Game.rooms[roomName].terminal.store[RESOURCE_CATALYZED_UTRIUM_ALKALIDE] != undefined) {
                        b = Game.rooms[roomName].terminal.store[RESOURCE_CATALYZED_UTRIUM_ALKALIDE];
                    }
                    if ((a + b) >= pureMinerXUH02) {
                        pureMinerBoost = true;
                    }

                    var memory = "{role: 'pureMiner', working: false, origination: '" + roomName + "'" +
                        ", needBoost: " + pureMinerBoost +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + pureMinerLevel + "(\"pureMiner\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeCourierMiner < localMadePureMiners) {
                    var memory = "{role: 'courierMiner', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 5 + "(\"courier\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeCouriers < localMadeCouriersNeeded) {
                    var memory = "{role: 'courier', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"courier\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeBankir < localMadeBankirNeeded) {
                    var memory = "{role: 'bankir', claim: true, working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 4 + "(\"courier\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeUpgraders < localMadeUpgradersNeeded) {
                    var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"upgrader\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeExausters < localMadeExaustersNeeded) {
                    var memory = "{role: 'exauster', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to6 + "(\"exauster\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 2 && controllerAttacker1 < controllerAttacker1Needed && roomMemory.controllerAttacker1Needed == true) {
                    var memory = "{role: 'controllerAttacker1', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                        creepsData.get('controllerAttacker1') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to5 + "(\"controllerAttacker\"), memory)";
                    console.log("string=" + constructorString);
                    console.log("memory=" + memory);
                    var createString = eval(constructorString);
                    eval(createString);
                    roomMemory.controllerAttacker1Needed = false;
                } else if (controllerLevel > 2 && controllerAttacker2 < controllerAttacker2Needed && roomMemory.controllerAttacker2Needed == true) {
                    var memory = "{role: 'controllerAttacker2', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                        creepsData.get('controllerAttacker2') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 5 + "(\"controllerAttacker\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                    roomMemory.controllerAttacker2Needed = false;
                } else if (localMadeMedic1 < localMadeMedic1Needed) {
                    var memory = "{role: 'medic1', claim: true, working: false, origination: '" + roomName + "', arrived1: false, " +
                        creepsData.get('medic1') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"medicLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeMedic2 < localMadeMedic2Needed) {
                    var memory = "{role: 'medic2', claim: true, working: false, origination: '" + roomName + "', arrived1: false, " +
                        creepsData.get('medic2') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"medicLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeDefender < localMadeDefenderNeeded) {
                    var memory = "{role: 'defender', claim: true, working: false, origination: '" + roomName + "', needBoost: true," +
                        // creepsData.get('attacker1') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 5 + "(\"rangedAttacker\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeRangedAttacker1 < localMadeRangedAttacker1Needed) {
                    var memory = "{role: 'rangedAttacker1', claim: true, working: false, origination: '" + roomName + "', " +
                        creepsData.get('rangedAttacker1') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 5 + "(\"rangedAttacker\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeAttackerLogic1 < localMadeAttackerLogic1Needed) {
                    var memory = "{role: 'attackerLogic1', claim: true, working: false, origination: '" + roomName + "', " +
                        creepsData.get('attacker1') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeKeeperKiller1 < localMadeKeeperKiller1Needed) {
                    var memory = "{role: 'keeperKiller1', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX1 + ", roomToWorkY1: " + roomToWorkY1 + ",roomToWorkName1: \"" + roomToWorkName1 + "\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 7 + "(\"keeperKiller\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic1 < localMadeOuterHarvesterLogic1Needed) {
                    var memory = "{role: 'outerHarvesterLogic1', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                    var outerHarvesterLevel = controllerLevel1to3;
                    if (creepsData.get("outerHarverster1Level") != undefined) {
                        outerHarvesterLevel = creepsData.get("outerHarverster1Level");
                    }
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + outerHarvesterLevel + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterCourierLogic1 < localMadeOuterCourierLogic1Needed) {
                    var memory = "{role: 'outerCourierLogic1', working: false, origination: '" + roomName + "', arrived: false, " +
                        creepsData.get('outerCourier1') +
                        "linkRoomName: \"" + roomName + "\", " +
                        "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to7 + "(\"outerCourierLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 2 && localMadeOuterReserver1 < localMadeOuterReserver1Needed) {
                    var memory = "{role: 'outerReserver1', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX1 + "," +
                        "roomToWorkY1: " + roomToWorkY1 + "," +
                        "roomToWorkName1: \"" + roomToWorkName1 + "\"," +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerClaimerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeBasicCreepsOuter1 < localMadeBasicCreepsOuter1Needed) {
                    var memory = "{role: 'basicCreepOuter1', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX1 + "," +
                        "roomToWorkY1: " + roomToWorkY1 + "," +
                        "roomToWorkName1: \"" + roomToWorkName1 + "\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreepOuter\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeAttackerLogic2 < localMadeAttackerLogic2Needed) {
                    var memory = "{role: 'attackerLogic2', claim: true, working: false, origination: '" + roomName + "', " +
                        creepsData.get('attacker2') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeKeeperKiller2 < localMadeKeeperKiller2Needed) {
                    var memory = "{role: 'keeperKiller2', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX2 + ", roomToWorkY1: " + roomToWorkY2 + ",roomToWorkName1: \"" + roomToWorkName2 + "\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 7 + "(\"keeperKiller\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic2 < localMadeOuterHarvesterLogic2Needed) {
                    var memory = "{role: 'outerHarvesterLogic2', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                    var outerHarvesterLevel = controllerLevel1to3;
                    if (creepsData.get("outerHarverster2Level") != undefined) {
                        outerHarvesterLevel = creepsData.get("outerHarverster2Level");
                    }
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + outerHarvesterLevel + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterCourierLogic2 < localMadeOuterCourierLogic2Needed) {
                    var memory = "{role: 'outerCourierLogic2', working: false, origination: '" + roomName + "', arrived: false, " +
                        creepsData.get('outerCourier2') +
                        "linkRoomName: \"" + roomName + "\", " +
                        "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to7 + "(\"outerCourierLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 2 && localMadeOuterReserver2 < localMadeOuterReserver2Needed) {
                    var memory = "{role: 'outerReserver2', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX2 + "," +
                        "roomToWorkY1: " + roomToWorkY2 + "," +
                        "roomToWorkName1: \"" + roomToWorkName2 + "\"," +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerClaimerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeBasicCreepsOuter2 < localMadeBasicCreepsOuter2Needed) {
                    var memory = "{role: 'basicCreepOuter2', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX2 + "," +
                        "roomToWorkY1: " + roomToWorkY2 + "," +
                        "roomToWorkName1: \"" + roomToWorkName2 + "\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreepOuter\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeAttackerLogic3 < localMadeAttackerLogic3Needed) {
                    var memory = "{role: 'attackerLogic3', claim: true, working: false, origination: '" + roomName + "', " +
                        creepsData.get('attacker3') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeKeeperKiller3 < localMadeKeeperKiller3Needed) {
                    var memory = "{role: 'keeperKiller3', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX3 + ", roomToWorkY1: " + roomToWorkY3 + ",roomToWorkName1: \"" + roomToWorkName3 + "\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 7 + "(\"keeperKiller\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic3 < localMadeOuterHarvesterLogic3Needed) {
                    var memory = "{role: 'outerHarvesterLogic3', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX3 + ", roomToWorkY: " + roomToWorkY3 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName3 + "\"}";
                    var outerHarvesterLevel = controllerLevel1to3;
                    if (creepsData.get("outerHarverster3Level") != undefined) {
                        outerHarvesterLevel = creepsData.get("outerHarverster3Level");
                    }
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + outerHarvesterLevel + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterCourierLogic3 < localMadeOuterCourierLogic3Needed) {
                    var memory = "{role: 'outerCourierLogic3', working: false, origination: '" + roomName + "', arrived: false, " +
                        creepsData.get('outerCourier3') +
                        "linkRoomName: \"" + roomName + "\", " +
                        "roomToWorkX: " + roomToWorkX3 + ", roomToWorkY: " + roomToWorkY3 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName3 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to7 + "(\"outerCourierLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 2 && localMadeOuterReserver3 < localMadeOuterReserver3Needed) {
                    var memory = "{role: 'outerReserver3', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX3 + "," +
                        "roomToWorkY1: " + roomToWorkY3 + "," +
                        "roomToWorkName1: \"" + roomToWorkName3 + "\"," +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerClaimerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeBasicCreepsOuter3 < localMadeBasicCreepsOuter3Needed) {
                    var memory = "{role: 'basicCreepOuter3', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX3 + "," +
                        "roomToWorkY1: " + roomToWorkY3 + "," +
                        "roomToWorkName1: \"" + roomToWorkName3 + "\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreepOuter\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeAttackerLogic4 < localMadeAttackerLogic4Needed) {
                    var memory = "{role: 'attackerLogic4', claim: true, working: false, origination: '" + roomName + "', " +
                        creepsData.get('attacker4') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeKeeperKiller4 < localMadeKeeperKiller4Needed) {
                    var memory = "{role: 'keeperKiller4', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX4 + ", roomToWorkY1: " + roomToWorkY4 + ",roomToWorkName1: \"" + roomToWorkName4 + "\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 7 + "(\"keeperKiller\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic4 < localMadeOuterHarvesterLogic4Needed) {
                    var memory = "{role: 'outerHarvesterLogic4', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX4 + ", roomToWorkY: " + roomToWorkY4 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName4 + "\"}";
                    var outerHarvesterLevel = controllerLevel1to3;
                    var levFromData = creepsData.get("outerHarverster4Level");
                    if (levFromData != undefined) {
                        outerHarvesterLevel = creepsData.get("outerHarverster4Level");
                    }
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + outerHarvesterLevel + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterCourierLogic4 < localMadeOuterCourierLogic4Needed) {
                    var memory = "{role: 'outerCourierLogic4', working: false, origination: '" + roomName + "', arrived: false, " +
                        creepsData.get('outerCourier4') +
                        "linkRoomName: \"" + roomName + "\", " +
                        "roomToWorkX: " + roomToWorkX4 + ", roomToWorkY: " + roomToWorkY4 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName4 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to7 + "(\"outerCourierLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 2 && localMadeOuterReserver4 < localMadeOuterReserver4Needed) {
                    var memory = "{role: 'outerReserver4', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX4 + "," +
                        "roomToWorkY1: " + roomToWorkY4 + "," +
                        "roomToWorkName1: \"" + roomToWorkName4 + "\"," +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerClaimerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeBasicCreepsOuter4 < localMadeBasicCreepsOuter4Needed) {
                    var memory = "{role: 'basicCreepOuter4', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX4 + "," +
                        "roomToWorkY1: " + roomToWorkY4 + "," +
                        "roomToWorkName1: \"" + roomToWorkName4 + "\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreepOuter\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeAttackerLogic5 < localMadeAttackerLogic5Needed) {
                    var memory = "{role: 'attackerLogic5', claim: true, working: false, origination: '" + roomName + "', " +
                        creepsData.get('attacker5') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeKeeperKiller5 < localMadeKeeperKiller5Needed) {
                    var memory = "{role: 'keeperKiller5', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX5 + ", roomToWorkY1: " + roomToWorkY5 + ",roomToWorkName1: \"" + roomToWorkName5 + "\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 7 + "(\"keeperKiller\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic5 < localMadeOuterHarvesterLogic5Needed) {
                    var memory = "{role: 'outerHarvesterLogic5', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX5 + ", roomToWorkY: " + roomToWorkY5 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName5 + "\"}";
                    var outerHarvesterLevel = controllerLevel1to3;
                    if (creepsData.get("outerHarverster5Level") != undefined) {
                        outerHarvesterLevel = creepsData.get("outerHarverster5Level");
                    }
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + outerHarvesterLevel + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterCourierLogic5 < localMadeOuterCourierLogic5Needed) {
                    var memory = "{role: 'outerCourierLogic5', working: false, origination: '" + roomName + "', arrived: false, " +
                        creepsData.get('outerCourier5') +
                        "linkRoomName: \"" + roomName + "\", " +
                        "roomToWorkX: " + roomToWorkX5 + ", roomToWorkY: " + roomToWorkY5 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName5 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to7 + "(\"outerCourierLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 2 && localMadeOuterReserver5 < localMadeOuterReserver5Needed) {
                    var memory = "{role: 'outerReserver5', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX5 + "," +
                        "roomToWorkY1: " + roomToWorkY5 + "," +
                        "roomToWorkName1: \"" + roomToWorkName5 + "\"," +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerClaimerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeBasicCreepsOuter5 < localMadeBasicCreepsOuter5Needed) {
                    var memory = "{role: 'basicCreepOuter5', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX5 + "," +
                        "roomToWorkY1: " + roomToWorkY5 + "," +
                        "roomToWorkName1: \"" + roomToWorkName5 + "\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreepOuter\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeAttackerLogic6 < localMadeAttackerLogic6Needed) {
                    var memory = "{role: 'attackerLogic6', claim: true, working: false, origination: '" + roomName + "', " +
                        creepsData.get('attacker6') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeAttackerLogic7 < localMadeAttackerLogic7Needed) {
                    var memory = "{role: 'attackerLogic7', claim: true, working: false, origination: '" + roomName + "', " +
                        creepsData.get('attacker7') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeAttackerLogic8 < localMadeAttackerLogic8Needed) {
                    var memory = "{role: 'attackerLogic8', claim: true, working: false, origination: '" + roomName + "', " +
                        creepsData.get('attacker8') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeDismantilist1 < localMadeDismantilist1Needed) {
                    var memory = "{role: 'dismantalist1', claim: true, working: false, origination: '" + roomName + "', arrived1: false, " +
                        creepsData.get('dismantalist1') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"dismantilist\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeDismantilist2 < localMadeDismantilist2Needed) {
                    var memory = "{role: 'dismantalist2', claim: true, working: false, origination: '" + roomName + "', arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
                        creepsData.get('dismantalist2') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"dismantilist\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeBasicCreepsOuter6 < localMadeBasicCreepsOuter6Needed) {
                    var memory = "{role: 'basicCreepOuter6', working: false, origination: '" + roomName + "', arrived: false," +
                        creepsData.get('basicCreepOuter6') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 5 + "(\"basicCreepOuter\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeSieger < localMadeSiegerNeeded) {
                    var memory = "{role: 'siegerLogic', claim: true, working: false, origination: '" + roomName + "', " +
                        creepsData.get('siegerLogic') +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                }
            } else {

                localMadeBasicCreepsNeeded = localMadeBasicCreepsNeeded + 2;
                localMadeOuterCourierLogic1Needed = localMadeOuterCourierLogic1Needed + 2;

                if (controllerLevel == 1 && localMadeCreeps < localMadeBasicCreepsNeeded) {
                    var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, CARRY, MOVE], " +
                        "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                    eval(createString);
                } else if (controllerLevel >= 2) {

                    controllerLevel = 2;

                    if (localMadeCreeps < 2) {
                        var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, CARRY, MOVE], " +
                            "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                        eval(createString);
                    } else if (creepPotential > 500 && localMadeCreeps >= 2) {
                        if (localMadeBasicCreeps < localMadeBasicCreepsNeeded) {
                            var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], " +
                                "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                            eval(createString);
                        } else if (localMadePureHarvesters < localMadePureHarvestersNeeded) {
                            var memory = "{role: 'pureHarvester', working: false, origination: '" + roomName + "'}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeUpgraders < localMadeUpgradersNeeded) {
                            var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"upgrader\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeAttackerLogic1 < localMadeAttackerLogic1Needed) {
                            var memory = "{role: 'attackerLogic1', claim: true, working: false, origination: '" + roomName + "', " +
                                creepsData.get('attacker1') +
                                "}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"attackerLogic\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeBasicCreepsOuter1 < localMadeBasicCreepsOuter1Needed) {
                            var memory = "{role: 'basicCreepOuter1', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreepOuter\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeOuterHarvesterLogic1 < localMadeOuterHarvesterLogic1Needed) {
                            var memory = "{role: 'outerHarvesterLogic1', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeOuterCourierLogic1 < localMadeOuterCourierLogic1Needed) {
                            var memory = "{role: 'outerCourierLogic1', working: false, origination: '" + roomName + "', arrived: false, " +
                                creepsData.get('outerCourier1') +
                                "linkRoomName: \"" + roomName + "\", " +
                                "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerCourierLogic\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } /*else if (localMadeBasicCreepsOuter2 < localMadeBasicCreepsOuter2Needed) {
                            var memory = "{role: 'basicCreepOuter2', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreepOuter\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeOuterHarvesterLogic2 < localMadeOuterHarvesterLogic2Needed) {
                            var memory = "{role: 'outerHarvesterLogic2', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeOuterCourierLogic2 < localMadeOuterCourierLogic2Needed) {
                            var memory = "{role: 'outerCourierLogic2', working: false, origination: '" + roomName + "', arrived: false, " +
                                creepsData.get('outerCourier2') +
                                "linkRoomName: \"" + roomName + "\", " +
                                "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerCourierLogic\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        }*/
                    } else if (creepPotential >= 400 && localMadeCreeps < 4) {
                        var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], " +
                            "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                        eval(createString);
                    } else if (localMadeCreeps < 4) {
                        var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, CARRY, CARRY, MOVE, MOVE], " +
                            "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                        eval(createString);
                    }
                } else if (controllerLevel >= 3) {

                    if (localMadeCreeps < 2) {
                        var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, CARRY, MOVE], " +
                            "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                        eval(createString);
                    } else if (creepPotential > 750) {
                        if (localMadeBasicCreeps < localMadeBasicCreepsNeeded) {
                            var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], " +
                                "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                            eval(createString);
                        } else if (localMadePureHarvesters < localMadePureHarvestersNeeded) {
                            var memory = "{role: 'pureHarvester', working: false, origination: '" + roomName + "'}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeUpgraders < localMadeUpgradersNeeded) {
                            var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"upgrader\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeAttackerLogic1 < localMadeAttackerLogic1Needed) {
                            var memory = "{role: 'attackerLogic1', claim: true, working: false, origination: '" + roomName + "', " +
                                creepsData.get('attacker1') +
                                "}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeBasicCreepsOuter1 < localMadeBasicCreepsOuter1Needed) {
                            var memory = "{role: 'basicCreepOuter1', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreepOuter\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeOuterHarvesterLogic1 < localMadeOuterHarvesterLogic1Needed) {
                            var memory = "{role: 'outerHarvesterLogic1', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeOuterCourierLogic1 < localMadeOuterCourierLogic1Needed) {
                            var memory = "{role: 'outerCourierLogic1', working: false, origination: '" + roomName + "', arrived: false, " +
                                creepsData.get('outerCourier1') +
                                "linkRoomName: \"" + roomName + "\", " +
                                "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerCourierLogic\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        }
                    } else if (creepPotential >= 700) {
                        var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], " +
                            "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                        eval(createString);
                    } else if (creepPotential >= 600) {
                        var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], " +
                            "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                        eval(createString);
                    } else if (creepPotential >= 500) {
                        var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], " +
                            "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                        eval(createString);
                    } else if (creepPotential >= 400) {
                        var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], " +
                            "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                        eval(createString);
                    } else {
                        var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, CARRY, CARRY, MOVE, MOVE], " +
                            "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                        eval(createString);
                    }
                }
            }
        }
    }


};
