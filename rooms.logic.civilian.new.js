var creepTemplates = require('creep.templates');
var market = require('market');

module.exports = {

    runMyRooms: function (allCreepsCount, gameTime) {

        // this.roomW32N24();

        this.E53N16(allCreepsCount, gameTime);
        this.E54N18(allCreepsCount, gameTime);
        this.E52N19(allCreepsCount, gameTime);

    },

    E53N16: function (allCreepsCount, gameTime) {

        // for(var i in allCreepsCount){
        // var entry = allCreepsCount[i];
        // }


        // var startCpu = Game.cpu.getUsed();


        var betterRoomName = "W33N23";

        var roomName = "E53N16";

        var controllerLevel = Game.rooms[roomName].controller.level;

        var wallsLevel = 10000;

        var basicCreepsNeeded = 2;
        var localMadeUpgradersNeeded = 2;

        if (Game.rooms['E53N16'].storage.store[RESOURCE_ENERGY] > 100000) {
            localMadeUpgradersNeeded += 2;
        }


        if (controllerLevel == 2) {
            var wallsLevel = 25000;
        } else if (controllerLevel == 3) {
            var wallsLevel = 55000;
        } else if (controllerLevel == 4) {
            wallsLevel = 115000;
        } else if (controllerLevel == 5) {
            wallsLevel = 215000;
        } else if (controllerLevel == 6) {
            wallsLevel = 515000;
        } else if (controllerLevel == 7) {
            wallsLevel = 1015000;
            basicCreepsNeeded = 5;
        } else if (controllerLevel == 8) {
            wallsLevel = 10015000;
        }

        this.defendRoom(roomName, wallsLevel);

        if (controllerLevel >= 4 && gameTime.substring(gameTime.length - 1, gameTime.length) == '0') {
            this.placeRampart(roomName);
        }

        var mines = Game.rooms[roomName].find(FIND_MINERALS);
        var mine = mines[0];

        if (controllerLevel >= 6) {
            var extractor = Game.rooms[roomName].find(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_EXTRACTOR});
            if (extractor.length == 0) {
                var extractorConstructionSite = Game.rooms[roomName].find(FIND_CONSTRUCTION_SITES, {filter: (cs) => cs.structureType == STRUCTURE_EXTRACTOR});
                if (extractorConstructionSite.length == 0) {
                    var constructionSiteCreated = Game.rooms[roomName].createConstructionSite(mine.pos, STRUCTURE_EXTRACTOR);
                }
            }
        }

        var localMadePureMinersNeeded = 1;
        if (mine.mineralAmount == 0) {
            localMadePureMinersNeeded = 0;
        }


        var roomToWorkName1 = "E52N16";
        var roomToWorkX1 = 46;
        var roomToWorkY1 = 20;

        var roomToWorkName2 = "E53N17";
        var roomToWorkX2 = 5;
        var roomToWorkY2 = 45;


        var roomToWorkName3 = "E53N15";
        var roomToWorkX3 = 14;
        var roomToWorkY3 = 2;

        var roomToWorkName4 = "E52N15";
        var roomToWorkX4 = 45;
        var roomToWorkY4 = 38;

        var localMadeCreepsNeeded = 2;
        var localMadeBasicCreepsNeeded = 0;
        var localMadePureHarvestersNeeded = 1;
        var localMadeCouriersNeeded = 1;
        var localMadePureMinerNeeded = 0;
        var localMadeCourierMineNeeded = 0;
        var localMadeUpgradersNeeded = 0;
        var localMadeBasicCreepsOuter1Needed = 0;
        var localMadeBasicCreepsOuter2Needed = 0;
        var localMadeBasicCreepsOuter3Needed = 0;
        var localMadeBasicCreepsOuter4Needed = 0;
        var localMadeBasicCreepsOuter5Needed = 0;
        var localMadeBasicCreepsOuter6Needed = 0;
        var localMadeOuterHarvesterLogicNeeded = 0;
        var localMadeOuterHarvesterLogic1Needed = 0;
        var localMadeOuterHarvesterLogic2Needed = 0;
        var localMadeOuterHarvesterLogic3Needed = 0;
        var localMadeOuterHarvesterLogic4Needed = 0;
        var localMadeOuterHarvesterLogic5Needed = 0;
        var localMadeOuterHarvesterLogic6Needed = 0;
        var localMadeOuterCourierLogic1Needed = 0;
        var localMadeOuterCourierLogic2Needed = 0;
        var localMadeOuterCourierLogic3Needed = 0;
        var localMadeOuterCourierLogic4Needed = 0;
        var localMadeOuterCourierLogic5Needed = 0;
        var localMadeOuterCourierLogic6Needed = 0;
        var localMadeReserver1Needed = 0;
        var localMadeReserver2Needed = 0;
        var localMadeReserver3Needed = 0;
        var localMadeReserver4Needed = 0;
        var localMadeReserver5Needed = 0;
        var localMadeReserver6Needed = 0;
        var localMadeBankirLogicNeeded = 0;
        var localMadeOuterClaimerLogicNeeded = 0;
        var localMadeAttackerLogic1Needed = 0;
        var localMadeAttackerLogic2Needed = 0;
        var localMadeAttackerLogic3Needed = 0;
        var localMadeSiegerLogic1Needed = 0;
        var localMadeSiegerLogic2Needed = 0;
        var localMadeSiegerLogic3Needed = 0;
        var localMadeMedicLogic1Needed = 0;
        var localMadeMedicLogic2Needed = 0;
        var localMadeMedicLogic3Needed = 0;
        var localMadeExausters1Needed = 0;
        var localMadeExausters2Needed = 0;
        var localMadeExausters3Needed = 0;

        var localMadeCreeps = allCreepsCount[roomName + ";total"];
        var localMadeBasicCreeps = allCreepsCount[roomName + ";basicCreep"];
        var localMadePureHarvesters = allCreepsCount[roomName + ";pureHarvester"];
        var localMadeCouriers = allCreepsCount[roomName + ";courier"];
        var localMadePureMiner = allCreepsCount[roomName + ";pureMiner"];
        var localMadeCourierMine = allCreepsCount[roomName + ";courierMine"];
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
        var localMadeOuterHarvesterLogic6 = allCreepsCount[roomName + ";outerHarvesterLogic6"];
        var localMadeOuterCourierLogic1 = allCreepsCount[roomName + ";outerCourierLogic1"];
        var localMadeOuterCourierLogic2 = allCreepsCount[roomName + ";outerCourierLogic2"];
        var localMadeOuterCourierLogic3 = allCreepsCount[roomName + ";outerCourierLogic3"];
        var localMadeOuterCourierLogic4 = allCreepsCount[roomName + ";outerCourierLogic4"];
        var localMadeOuterCourierLogic5 = allCreepsCount[roomName + ";outerCourierLogic5"];
        var localMadeOuterCourierLogic6 = allCreepsCount[roomName + ";outerCourierLogic6"];
        var localMadeReserver1 = allCreepsCount[roomName + ";reserver1"];
        var localMadeReserver2 = allCreepsCount[roomName + ";reserver2"];
        var localMadeReserver3 = allCreepsCount[roomName + ";reserver3"];
        var localMadeReserver4 = allCreepsCount[roomName + ";reserver4"];
        var localMadeReserver5 = allCreepsCount[roomName + ";reserver5"];
        var localMadeReserver6 = allCreepsCount[roomName + ";reserver6"];
        var localMadeBankirLogic = allCreepsCount[roomName + ";bankirLogic"];
        var localMadeOuterClaimerLogic = allCreepsCount[roomName + ";outerClaimerLogic"];
        var localMadeAttackerLogic1 = allCreepsCount[roomName + ";attackerLogic1"];
        var localMadeAttackerLogic2 = allCreepsCount[roomName + ";attackerLogic2"];
        var localMadeAttackerLogic3 = allCreepsCount[roomName + ";attackerLogic3"];
        var localMadeSiegerLogic1 = allCreepsCount[roomName + ";siegerLogic1"];
        var localMadeSiegerLogic2 = allCreepsCount[roomName + ";siegerLogic2"];
        var localMadeSiegerLogic3 = allCreepsCount[roomName + ";siegerLogic3"];
        var localMadeMedicLogic1 = allCreepsCount[roomName + ";medicLogic1"];
        var localMadeMedicLogic2 = allCreepsCount[roomName + ";medicLogic2"];
        var localMadeMedicLogic3 = allCreepsCount[roomName + ";medicLogic3"];
        var localMadeExausters1 = allCreepsCount[roomName + ";exauster1"];
        var localMadeExausters2 = allCreepsCount[roomName + ";exauster2"];
        var localMadeExausters3 = allCreepsCount[roomName + ";exauster3"];

        var localSpawns = new Array();

        for (let i in Game.spawns) {
            var spawn = (Game.spawns[i]);

            if (spawn.room.name == roomName) {
                localSpawns.push(spawn);
            }
        }

        var betterRoomSpawns = new Array();

        for (let i in Game.spawns) {
            var spawn = (Game.spawns[i]);

            if (spawn.room.name == betterRoomName) {
                betterRoomSpawns.push(spawn);
            }
        }

        var freeSpawn;

        if (localSpawns.length > 0) {
            freeSpawn = localSpawns[0].pos.findClosestByRange(localSpawns.filter((s) => s.isActive() == true && s.spawning == null));
        }

        if (controllerLevel >= 7) {
            var creepsToExtendLife;
            if (freeSpawn) {
                creepsToExtendLife = freeSpawn.pos.findInRange(FIND_MY_CREEPS, 1, {
                    filter: (c) => c.ticksToLive < 1200 &&
                        c.memory.role != 'attackerLogic' && c.memory.role != 'warRepairer' && c.memory.role != 'bowman' && c.memory.role != 'medicLogic' &&
                        c.memory.role != 'outerClaimerLogic'
                });
            }

            if (creepsToExtendLife != undefined && creepsToExtendLife.length > 0) {
                var creepToExtendLife = creepsToExtendLife[0];
                var healString = " Game.spawns." + freeSpawn.name + ".renewCreep(Game.creeps." + creepToExtendLife.name + ")";
                eval(healString);
            }
        }

        var creepPotential = 0;

        creepPotential = 300 * _.sum(Game.spawns, (s) => s.room.name == roomName && s.owner.username == 'Dehar')
            + 50 * _.sum(Game.structures, (s) => s.room.name == roomName && s.owner.username == 'Dehar' &&
                s.structureType == STRUCTURE_EXTENSION);


        if (controllerLevel >= 6 && creepPotential >= 2300 && creepPotential <= 5300) {
            controllerLevel = 6;
        }

        if (freeSpawn != undefined) {
            if (controllerLevel < 3 || creepPotential < 800 || localMadeCreeps < 4) {

                if (controllerLevel == 1 && localMadeCreeps < 4) {
                    var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, CARRY, MOVE], " +
                        "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                    eval(createString);
                } else if (controllerLevel >= 2) {

                    controllerLevel = 2;

                    if (localMadeCreeps < 2) {
                        var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, CARRY, CARRY, MOVE, MOVE], " +
                            "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                        eval(createString);
                    } else if (creepPotential > 500 && localMadeCreeps >= 2) {
                        if (localMadeBasicCreeps < basicCreepsNeeded) {
                            var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], " +
                                "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                            eval(createString);
                        } else if (localMadePureHarvesters < 1) {
                            var memory = "{role: 'pureHarvester', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeBasicCreepsOuter1 < 2) {
                            var memory = "{role: 'basicCreepOuter1', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreepOuter\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeOuterHarvesterLogic1 < 2) {
                            var memory = "{role: 'outerHarvesterLogic1', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + c + "(\"pureHarvester\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeOuterCourierLogic1 < 3) {
                            var memory = "{role: 'outerCourierLogic1', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: " + 2 + ", " +
                                "roomToBackY: " + 19 + "," +
                                "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerCourierLogic\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeBasicCreepsOuter2 < 2) {
                            var memory = "{role: 'basicCreepOuter2', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreepOuter\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeOuterHarvesterLogic2 < 2) {
                            var memory = "{role: 'outerHarvesterLogic2', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeOuterCourierLogic2 < 4) {
                            var memory = "{role: 'outerCourierLogic2', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: " + 6 + ", " +
                                "roomToBackY: " + 2 + "," +
                                "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerCourierLogic\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeUpgraders < 3) {
                            var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"upgrader\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeAttackerLogic1 < 1) {
                            var memory = "{role: 'attackerLogic1', working: false, origination: '" + roomName + "'}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"attackerLogic\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        }
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
                        if (localMadeBasicCreeps < basicCreepsNeeded) {
                            var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], " +
                                "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                            eval(createString);
                        } else if (localMadeBasicCreepsOuter1 < 1) {
                            var memory = "{role: 'basicCreepOuter1', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"basicCreepOuter\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeOuterHarvesterLogic1 < 2) {
                            var memory = "{role: 'outerHarvesterLogic1', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeOuterCourierLogic1 < 2) {
                            var memory = "{role: 'outerCourierLogic1', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: " + 2 + ", " +
                                "roomToBackY: " + 19 + "," +
                                "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"outerCourierLogic\"), memory)";
                            var createString = eval(constructorString);
                            eval(createString);
                        } else if (localMadeUpgraders < 2) {
                            var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                            var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"upgrader\"), memory)";
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

            } else {

                var pureMinerLevel = controllerLevel;
                var upgraderLevel = controllerLevel;
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
                    upgraderLevel = 5;
                }

                var controllerLevel1to3 = controllerLevel;
                if (controllerLevel > 3) {
                    controllerLevel1to3 = 3;
                }

                var controllerLevel1to4 = controllerLevel;
                if (controllerLevel > 4) {
                    controllerLevel1to4 = 4;
                }

                var controllerLevel1to6 = controllerLevel;
                if (controllerLevel > 6) {
                    controllerLevel1to4 = 6;
                }

                if (localMadeCreeps < localMadeCreepsNeeded) {
                    var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, CARRY, CARRY, MOVE, MOVE], " +
                        "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                    eval(createString);
                } else if (localMadeBasicCreeps < basicCreepsNeeded) {
                    var memory = "{role: 'basicCreep', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreep\"), memory)";
                    var createString = eval(constructorString);
                    // var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadePureHarvesters < localMadePureHarvestersNeeded) {
                    var memory = "{role: 'pureHarvester', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel >= 6 && localMadePureMiner < localMadePureMinersNeeded) {
                    var memory = "{role: 'pureMiner', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + pureMinerLevel + "(\"pureMiner\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeCourierMine < localMadePureMiner) {
                    var memory = "{role: 'courierMine', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 2 + "(\"courier\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeCouriers < localMadeCouriersNeeded) {
                    var memory = "{role: 'courier', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"courier\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeBankirLogic < 1) {
                    var memory = "{role: 'bankirLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 4 + "(\"courier\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeAttackerLogic1 < 1) {
                    var memory = "{role: 'attackerLogic1', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"," +
                        "roomToInvestigateName0 : \"E53N17\", roomToInvestigateX0: 16, roomToInvestigateY0: 1," +
                        "roomToInvestigateName1 : \"E53N18\", roomToInvestigateX1: 32, roomToInvestigateY1: 28," +
                        "roomToInvestigateName2 : \"E53N19\", roomToInvestigateX2: 45, roomToInvestigateY2: 45" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeExausters1 < 0) {
                    var memory = "{role: 'exauster1', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to6 + "(\"exauster\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic1 < 2) {
                    var memory = "{role: 'outerHarvesterLogic1', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterCourierLogic1 < 2) {
                    var memory = "{role: 'outerCourierLogic1', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 2, roomToBackY: 19," +
                        "roomToWorkX: " + (roomToWorkX1 - 2) + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                        "linkRoomName: \"" + roomName + "\", linkRoomX: 2" + ", linkRoomY: 18," +
                        "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerCourierLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic2 < 2) {
                    var memory = "{role: 'outerHarvesterLogic2', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterCourierLogic2 < 3) {
                    var memory = "{role: 'outerCourierLogic2', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 9, roomToBackY: 2," +
                        "roomToWorkX: " + (roomToWorkX2 - 2) + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        "linkRoomName: \"" + roomName + "\", linkRoomX: 5" + ", linkRoomY: 2," +
                        "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerCourierLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeOuterClaimerLogic < 0) {
                    var memory = "{role: 'outerClaimerLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false," +
                        "roomToWorkX1: 10," +
                        "roomToWorkY1: 48," +
                        "roomToWorkName1: \"E51N20\"," +
                        "roomToWorkX2: 5," +
                        "roomToWorkY2: 36," +
                        "roomToWorkName2: \"E51N19\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerClaimerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeOuterCourierLogic3 < 0) {
                    var memory = "{role: 'outerCourierLogic3', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 46, roomToBackY: 12," +
                        "roomToWorkX: " + roomToWorkX3 + ", roomToWorkY: " + roomToWorkY3 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName3 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 5 + "(\"outerCourierLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 2 && localMadeReserver1 < 1) {
                    var memory = "{role: 'reserver1', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX1 + "," +
                        "roomToWorkY1: " + roomToWorkY1 + "," +
                        "roomToWorkName1: \"" + roomToWorkName1 + "\"," +
                        // "roomToWorkX2: 8," +
                        // "roomToWorkY2: 2," +
                        // "roomToWorkName2: \"E54N18\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerClaimerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 2 && localMadeReserver2 < 1) {
                    var memory = "{role: 'reserver2', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX2 + "," +
                        "roomToWorkY1: " + roomToWorkY2 + "," +
                        "roomToWorkName1: \"" + roomToWorkName2 + "\"," +
                        // "roomToWorkX2: 8," +
                        // "roomToWorkY2: 2," +
                        // "roomToWorkName2: \"E54N18\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerClaimerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 2 && localMadeReserver3 < 1) {
                    var memory = "{role: 'reserver3', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX3 + "," +
                        "roomToWorkY1: " + roomToWorkY3 + "," +
                        "roomToWorkName1: \"" + roomToWorkName3 + "\"," +
                        // "roomToWorkX2: 8," +
                        // "roomToWorkY2: 2," +
                        // "roomToWorkName2: \"E54N18\"" +
                        "}";
                    // "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                    // "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerClaimerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 2 && localMadeReserver4 < 1) {
                    var memory = "{role: 'reserver4', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX4 + "," +
                        "roomToWorkY1: " + roomToWorkY4 + "," +
                        "roomToWorkName1: \"" + roomToWorkName4 + "\"," +
                        // "roomToWorkX2: 8," +
                        // "roomToWorkY2: 2," +
                        // "roomToWorkName2: \"E54N18\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerClaimerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeBasicCreepsOuter1 < 1) {
                    var memory = "{role: 'basicCreepOuter1', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX1 + "," +
                        "roomToWorkY1: " + roomToWorkY1 + "," +
                        "roomToWorkName1: \"" + roomToWorkName1 + "\"," +
                        // "roomToWorkX2: 8," +
                        // "roomToWorkY2: 2," +
                        // "roomToWorkName2: \"E54N18\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreepOuter\"), memory)";
                    var createString = eval(constructorString);
                    var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                    eval(createString);
                } else if (localMadeBasicCreepsOuter2 < 1) {
                    var memory = "{role: 'basicCreepOuter2', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX2 + "," +
                        "roomToWorkY1: " + roomToWorkY2 + "," +
                        "roomToWorkName1: \"" + roomToWorkName2 + "\"," +
                        // "roomToWorkX2: 8," +
                        // "roomToWorkY2: 2," +
                        // "roomToWorkName2: \"E54N18\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreepOuter\"), memory)";
                    var createString = eval(constructorString);
                    var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                    eval(createString);
                } else if (localMadeBasicCreepsOuter5 < 0) {
                    var memory = "{role: 'basicCreepOuter5', working: false, origination: '" + roomName + "', arrived: false," +
                        "roomToWorkX1: 28," +
                        "roomToWorkY1: 32," +
                        "roomToWorkName1: \"E53N18\"," +
                        // "roomToWorkX2: 8," +
                        // "roomToWorkY2: 2," +
                        // "roomToWorkName2: \"E54N18\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreepOuter\"), memory)";
                    var createString = eval(constructorString);
                    // var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                    eval(createString);
                } else if (localMadeBasicCreepsOuter6 < 0) {
                    var memory = "{role: 'basicCreepOuter6', working: false, origination: '" + roomName + "', arrived: false," +
                        "roomToWorkX1: 40," +
                        "roomToWorkY1: 47," +
                        "roomToWorkName1: \"E50N20\"," +
                        "roomToWorkX2: 5," +
                        "roomToWorkY2: 36," +
                        "roomToWorkName2: \"E51N19\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreepOuter\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeUpgraders < localMadeUpgradersNeeded) {
                    var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"upgrader\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeMedicLogic1 < 0) {
                    var memory = "{role: 'medicLogic1', claim: true, working: false, origination: '" + roomName + "', arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
                        ", arrived2: false, roomToWorkX1: 39, roomToWorkY1: 3,  roomToWorkName1: \"W30S50\"" +
                        ", arrived3: false, roomToWorkX1: 5, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"medicLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeSiegerLogic1 < 0) {
                    var memory = "{role: 'siegerLogic1', claim: true, working: false, origination: '" + roomName + "', arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
                        ", arrived2: false, roomToWorkX1: 39, roomToWorkY1: 3,  roomToWorkName1: \"W30S50\"" +
                        ", arrived3: false, roomToWorkX1: 3, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                }
            }
        }


    },

    E54N18:

        function (allCreepsCount, gameTime) {

            // var startCpu = Game.cpu.getUsed();


            var betterRoomName = "W33N23";

            var roomName = "E54N18";

            var controllerLevel = Game.rooms[roomName].controller.level;

            var wallsLevel = 10000;

            var basicCreepsNeeded = 2;

            var localMadeUpgradersNeeded = 3;

            if (controllerLevel == 2) {
                var wallsLevel = 25000;
            } else if (controllerLevel == 3) {
                var wallsLevel = 55000;
                localMadeUpgradersNeeded += 2;
            } else if (controllerLevel == 4) {
                wallsLevel = 115000;
                localMadeUpgradersNeeded += 2;
            } else if (controllerLevel == 5) {
                wallsLevel = 215000;
                localMadeUpgradersNeeded += 1;
            } else if (controllerLevel == 6) {
                wallsLevel = 515000;
            } else if (controllerLevel == 7) {
                wallsLevel = 1015000;
                basicCreepsNeeded = 5;
            } else if (controllerLevel == 8) {
                wallsLevel = 10015000;
            }

            this.defendRoom(roomName, wallsLevel);

            if (controllerLevel >= 4 && gameTime.substring(gameTime.length - 1, gameTime.length) == '0') {
                this.placeRampart(roomName);
            }

            var mines = Game.rooms[roomName].find(FIND_MINERALS);
            var mine = mines[0];

            var localMadePureMinersNeeded = 1;
            if (mine.mineralAmount == 0) {
                localMadePureMinersNeeded = 0;
            }

            var gameTime = Game.time.toString();


            var roomToWorkName1 = "E54N19";
            var roomToWorkX1 = 13;
            var roomToWorkY1 = 47;

            var roomToWorkName2 = "E53N19";
            var roomToWorkX2 = 48;
            var roomToWorkY2 = 25;

            var roomToWorkName3 = "E54N17";
            var roomToWorkX3 = 28;
            var roomToWorkY3 = 2;

            var roomToWorkName4 = "E55N17";
            var roomToWorkX4 = 2;
            var roomToWorkY4 = 7;


            var localMadeCreeps = _.sum(Game.creeps, (c) => c.memory.origination == roomName);

            var localMadeBasicCreeps = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreep');

            var localMadePureHarvesters = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'pureHarvester');

            var localMadePureMiners = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'pureMiner');

            var localMadeCouriers = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'courier');

            var localMadeUpgraders = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'upgrader');

            var localMadeBasicCreepsOuter1 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' &&
                c.memory.roomToWorkName == roomToWorkName1);

            var localMadeBasicCreepsOuter2 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' &&
                c.memory.roomToWorkName == roomToWorkName2);

            var localMadeBasicCreepsOuter3 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' &&
                c.memory.roomToWorkName == roomToWorkName3);

            var localMadeBasicCreepsOuter5 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' && c.memory.tribe == 5);

            var localMadeOuterHarvesterLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerHarvesterLogic' &&
                c.memory.roomToWorkName == roomToWorkName1);

            var localMadeOuterHarvesterLogic2 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerHarvesterLogic' &&
                c.memory.roomToWorkName == roomToWorkName2);

            var localMadeOuterHarvesterLogic3 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerHarvesterLogic' &&
                c.memory.roomToWorkName == roomToWorkName3);

            var localMadeOuterCourierLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerCourierLogic' &&
                c.memory.roomToWorkName == roomToWorkName1);

            var localMadeOuterCourierLogic2 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerCourierLogic' &&
                c.memory.roomToWorkName == roomToWorkName2);

            var localMadeOuterCourierLogic3 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerCourierLogic' &&
                c.memory.roomToWorkName == roomToWorkName3);


            var localMadeOuterReserverLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerClaimerLogic' && c.memory.claim == false &&
                c.memory.roomToWorkName == roomToWorkName1);

            var localMadeOuterReserverLogic2 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerClaimerLogic' && c.memory.claim == false &&
                c.memory.roomToWorkName == roomToWorkName2);

            var localMadeOuterReserverLogic3 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerClaimerLogic' && c.memory.claim == false &&
                c.memory.roomToWorkName == roomToWorkName3);

            var localMadeOuterReserverLogic4 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerClaimerLogic' && c.memory.claim == false &&
                c.memory.roomToWorkName == roomToWorkName4);

            var localMadeOuterClaimerLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerClaimerLogic' && c.memory.claim == true &&
                c.memory.roomToWorkName == roomToWorkName1);


            var localMadeAttackerLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'attackerLogic');

            var localMadeAttackerLogic2 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'attackerLogic2');

            var localMadePatrolLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'patrolLogic');

            var localMadeSiegerLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'siegerLogic');

            var localMadeMedicLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'medicLogic');

            var localMadeBankirLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'bankirLogic');

            var localMadeCourierMine = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'courierMine');

            var controllerAttacker = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'controllerAttacker');

            var localSpawns = new Array();

            for (let i in Game.spawns) {
                var spawn = (Game.spawns[i]);

                if (spawn.room.name == roomName) {
                    localSpawns.push(spawn);
                }
            }

            var betterRoomSpawns = new Array();

            for (let i in Game.spawns) {
                var spawn = (Game.spawns[i]);

                if (spawn.room.name == betterRoomName) {
                    betterRoomSpawns.push(spawn);
                }
            }

            var freeSpawn;

            if (localSpawns.length > 0) {
                freeSpawn = localSpawns[0].pos.findClosestByRange(localSpawns.filter((s) => s.isActive() == true && s.spawning == null));
            }

            if (controllerLevel >= 7) {
                var creepsToExtendLife;
                if (freeSpawn) {
                    creepsToExtendLife = freeSpawn.pos.findInRange(FIND_MY_CREEPS, 1, {
                        filter: (c) => c.ticksToLive < 1200 &&
                            c.memory.role != 'attackerLogic' && c.memory.role != 'warRepairer' && c.memory.role != 'bowman' && c.memory.role != 'medicLogic' &&
                            c.memory.role != 'outerClaimerLogic'
                    });
                }

                if (creepsToExtendLife != undefined && creepsToExtendLife.length > 0) {
                    var creepToExtendLife = creepsToExtendLife[0];
                    var healString = " Game.spawns." + freeSpawn.name + ".renewCreep(Game.creeps." + creepToExtendLife.name + ")";
                    eval(healString);
                }
            }

            var creepPotential = 0;

            creepPotential = 300 * _.sum(Game.spawns, (s) => s.room.name == roomName && s.owner.username == 'Dehar')
                + 50 * _.sum(Game.structures, (s) => s.room.name == roomName && s.owner.username == 'Dehar' &&
                    s.structureType == STRUCTURE_EXTENSION);

            if (controllerLevel >= 6 && creepPotential >= 2300 && creepPotential <= 5300) {
                controllerLevel = 6;
            }

            if (freeSpawn != undefined) {
                if (controllerLevel < 3 || creepPotential < 800 || localMadeCreeps < 4) {

                    if (controllerLevel == 1 && localMadeCreeps < 4) {
                        var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, CARRY, CARRY, MOVE, MOVE], " +
                            "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                        eval(createString);
                    } else if (controllerLevel >= 2) {

                        controllerLevel = 2;

                        if (localMadeCreeps < 2) {
                            var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, CARRY, CARRY, MOVE, MOVE], " +
                                "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                            eval(createString);
                        } else if (creepPotential > 500 && localMadeCreeps >= 2) {
                            if (localMadeBasicCreeps < basicCreepsNeeded) {
                                var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], " +
                                    "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                                eval(createString);
                            } else if (localMadePureHarvesters < 2) {
                                var memory = "{role: 'pureHarvester', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeBasicCreepsOuter1 < 2) {
                                var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreepOuter\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeOuterHarvesterLogic < 1) {
                                var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeOuterCourierLogic < 2) {
                                var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: " + 15 + ", " +
                                    "roomToBackY: " + 3 + "," +
                                    "linkRoomName: \"" + roomName + "\", linkRoomX: 15" + ", linkRoomY: 2," +
                                    "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerCourierLogic\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeBasicCreepsOuter2 < 1) {
                                var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreepOuter\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeOuterHarvesterLogic2 < 2) {
                                var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeOuterCourierLogic2 < 3) {
                                var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: " + 15 + ", " +
                                    "roomToBackY: " + 3 + "," +
                                    "linkRoomName: \"" + roomName + "\", linkRoomX: 15" + ", linkRoomY: 2," +
                                    "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerCourierLogic\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeOuterClaimerLogic < 0) {
                                var memory = "{role: 'outerClaimerLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false," +
                                    "roomToWorkX1: 18," +
                                    "roomToWorkY1: 29," +
                                    "roomToWorkName1: \"E52N19\"," +
                                    // "roomToWorkX2: 8," +
                                    // "roomToWorkY2: 2," +
                                    // "roomToWorkName2: \"E54N18\"" +
                                    "}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerClaimerLogic\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeUpgraders < localMadeUpgradersNeeded) {
                                var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"upgrader\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeAttackerLogic < 1) {
                                var memory = "{role: 'attackerLogic', working: false, origination: '" + roomName + "'}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"attackerLogic\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            }
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
                            var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, CARRY, CARRY, MOVE, MOVE], " +
                                "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                            eval(createString);
                        } else if (creepPotential > 750) {
                            if (localMadeBasicCreeps < basicCreepsNeeded) {
                                var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], " +
                                    "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                                eval(createString);
                            } else if (localMadeBasicCreepsOuter1 < 1) {
                                var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreepOuter\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeOuterHarvesterLogic < 2) {
                                var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeOuterCourierLogic < 2) {
                                var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: " + 2 + ", " +
                                    "roomToBackY: " + 19 + "," +
                                    "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerCourierLogic\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeUpgraders < 2) {
                                var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"upgrader\"), memory)";
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

                } else
                // } else if (controllerLevel >= 3 && creepPotential >= 800)

                {

                    var pureMinerLevel = controllerLevel;
                    var upgraderLevel = controllerLevel;
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
                        upgraderLevel = 5;
                    }

                    var controllerLevel1to3 = controllerLevel;
                    if (controllerLevel > 3) {
                        controllerLevel1to3 = 3;
                    }

                    var controllerLevel1to4 = controllerLevel;
                    if (controllerLevel > 4) {
                        controllerLevel1to4 = 4;
                    }

                    var controllerLevel1to6 = controllerLevel;
                    if (controllerLevel > 6) {
                        controllerLevel1to4 = 6;
                    }


                    // controllerLevel = 4;

                    if (localMadeCreeps < 2) {
                        var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, CARRY, CARRY, MOVE, MOVE], " +
                            "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                        eval(createString);
                    } else if (localMadeBasicCreeps < basicCreepsNeeded) {
                        var memory = "{role: 'basicCreep', working: false, origination: '" + controllerLevel1to4 + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreep\"), memory)";
                        var createString = eval(constructorString);
                        // var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadePureHarvesters < 2) {
                        var memory = "{role: 'pureHarvester', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel >= 6 && localMadePureMiners < localMadePureMinersNeeded) {
                        var memory = "{role: 'pureMiner', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"pureMiner\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeCourierMine < localMadePureMiners) {
                        var memory = "{role: 'courierMine', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 2 + "(\"courier\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeCouriers < 2) {
                        var memory = "{role: 'courier', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"courier\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeBankirLogic < 1) {
                        var memory = "{role: 'bankirLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"courier\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeAttackerLogic < 1) {
                        var memory = "{role: 'attackerLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"," +
                            "roomToInvestigateName0 : \"E54N19\", roomToInvestigateX0: 14, roomToInvestigateY0: 48," +
                            "roomToInvestigateName1 : \"E54N18\", roomToInvestigateX1: 16, roomToInvestigateY1: 6," +
                            "roomToInvestigateName2 : \"E54N17\", roomToInvestigateX2: 28, roomToInvestigateY2: 1" +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 2 && controllerAttacker < 0) {
                        var memory = "{role: 'controllerAttacker', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                            "roomToWorkX1: " + 14 + "," +
                            "roomToWorkY1: " + 2 + "," +
                            "roomToWorkName1: \"" + "E59N18" + "\"" +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"controllerAttacker\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeAttackerLogic2 < 0) {
                        var memory = "{role: 'attackerLogic2', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"," +
                            "roomToInvestigateName0 : \"E59N18\", roomToInvestigateX0: 14, roomToInvestigateY0: 2," +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeBasicCreepsOuter1 < 1) {
                        var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, " +
                            "roomToWorkX1: " + roomToWorkX1 + "," +
                            "roomToWorkY1: " + roomToWorkY1 + "," +
                            "roomToWorkName1: \"" + roomToWorkName1 + "\"," +
                            // "roomToWorkX2: 8," +
                            // "roomToWorkY2: 2," +
                            // "roomToWorkName2: \"E54N18\"" +
                            "}";
                        // "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                        // "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreepOuter\"), memory)";
                        var createString = eval(constructorString);
                        var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                        eval(createString);
                    } else if (localMadeBasicCreepsOuter2 < 2) {
                        var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, " +
                            "roomToWorkX1: " + roomToWorkX2 + "," +
                            "roomToWorkY1: " + roomToWorkY2 + "," +
                            "roomToWorkName1: \"" + roomToWorkName2 + "\"," +
                            // "roomToWorkX2: 8," +
                            // "roomToWorkY2: 2," +
                            // "roomToWorkName2: \"E54N18\"" +
                            "}";
                        // "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        // "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreepOuter\"), memory)";
                        var createString = eval(constructorString);
                        var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                        eval(createString);
                    } else if (controllerLevel > 2 && localMadeOuterReserverLogic3 < 1) {
                        var memory = "{role: 'outerClaimerLogic', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                            "roomToWorkX1: " + roomToWorkX3 + "," +
                            "roomToWorkY1: " + roomToWorkY3 + "," +
                            "roomToWorkName1: \"" + roomToWorkName3 + "\"" +
                            // "roomToWorkX2: 8," +
                            // "roomToWorkY2: 2," +
                            // "roomToWorkName2: \"E54N18\"" +
                            "}";
                        // "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        // "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerClaimerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 2 && localMadeOuterReserverLogic4 < 1) {
                        var memory = "{role: 'outerClaimerLogic', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                            "roomToWorkX1: " + roomToWorkX4 + "," +
                            "roomToWorkY1: " + roomToWorkY4 + "," +
                            "roomToWorkName1: \"" + roomToWorkName4 + "\"" +
                            // "roomToWorkX2: 8," +
                            // "roomToWorkY2: 2," +
                            // "roomToWorkName2: \"E54N18\"" +
                            "}";
                        // "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        // "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerClaimerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeBasicCreepsOuter5 < 0) {
                        var memory = "{role: 'basicCreepOuter', tribe: 5, working: false, origination: '" + roomName + "', arrived: false," +
                            "roomToWorkX1: 47," +
                            "roomToWorkY1: 39," +
                            "roomToWorkName1: \"E51N19\"," +
                            // "roomToWorkX2: 8," +
                            // "roomToWorkY2: 2," +
                            // "roomToWorkName2: \"E54N18\"" +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreepOuter\"), memory)";
                        var createString = eval(constructorString);
                        var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic < 1) {
                        var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                            "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic2 < 2) {
                        var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                            "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic3 < 0) {
                        var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX3 + ", roomToWorkY: " + roomToWorkY3 + ",  " +
                            "roomToWorkName: \"" + roomToWorkName3 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeOuterClaimerLogic < 0) {
                        var memory = "{role: 'outerClaimerLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false," +
                            "roomToWorkX1: 18," +
                            "roomToWorkY1: 29," +
                            "roomToWorkName1: \"E52N19\"," +
                            // "roomToWorkX2: 8," +
                            // "roomToWorkY2: 2," +
                            // "roomToWorkName2: \"E54N18\"" +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerClaimerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeOuterCourierLogic < 1) {
                        var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 15, roomToBackY: 3," +
                            "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                            "linkRoomName: \"" + roomName + "\", linkRoomX: 15" + ", linkRoomY: 2," +
                            "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerCourierLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeOuterCourierLogic2 < 3) {
                        var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 15, roomToBackY: 3," +
                            "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                            "linkRoomName: \"" + roomName + "\", linkRoomX: 17" + ", linkRoomY: 47," +
                            "linkRoomName: \"" + roomName + "\", linkRoomX: 15" + ", linkRoomY: 2," +
                            "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerCourierLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeBasicCreepsOuter3 < 0) {
                        var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, " +
                            "roomToWorkX1: " + roomToWorkX3 + "," +
                            "roomToWorkY1: " + roomToWorkY3 + "," +
                            "roomToWorkName1: \"" + roomToWorkName3 + "\"," +
                            // "roomToWorkX2: 8," +
                            // "roomToWorkY2: 2," +
                            // "roomToWorkName2: \"E54N18\"" +
                            "}";
                        // "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        // "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreepOuter\"), memory)";
                        var createString = eval(constructorString);
                        var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                        eval(createString);
                    } else if (localMadeOuterCourierLogic3 < 0) {
                        var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 28, roomToBackY: 47," +
                            "roomToWorkX: " + roomToWorkX3 + ", roomToWorkY: " + roomToWorkY3 + ",  " +
                            "roomToWorkName: \"" + roomToWorkName3 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 5 + "(\"outerCourierLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 2 && localMadeOuterReserverLogic < 1) {
                        var memory = "{role: 'outerClaimerLogic', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                            "roomToWorkX1: " + roomToWorkX1 + "," +
                            "roomToWorkY1: " + roomToWorkY1 + "," +
                            "roomToWorkName1: \"" + roomToWorkName1 + "\"" +
                            // "roomToWorkX2: 8," +
                            // "roomToWorkY2: 2," +
                            // "roomToWorkName2: \"E54N18\"" +
                            "}";
                        // "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                        // "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerClaimerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 2 && localMadeOuterReserverLogic2 < 1) {
                        var memory = "{role: 'outerClaimerLogic', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                            "roomToWorkX1: " + roomToWorkX2 + "," +
                            "roomToWorkY1: " + roomToWorkY2 + "," +
                            "roomToWorkName1: \"" + roomToWorkName2 + "\"" +
                            // "roomToWorkX2: 8," +
                            // "roomToWorkY2: 2," +
                            // "roomToWorkName2: \"E54N18\"" +
                            "}";
                        // "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        // "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerClaimerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 2 && localMadeOuterReserverLogic3 < 0) {
                        var memory = "{role: 'outerClaimerLogic', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                            "roomToWorkX1: " + roomToWorkX3 + "," +
                            "roomToWorkY1: " + roomToWorkY3 + "," +
                            "roomToWorkName1: \"" + roomToWorkName3 + "\"" +
                            // "roomToWorkX2: 8," +
                            // "roomToWorkY2: 2," +
                            // "roomToWorkName2: \"E54N18\"" +
                            "}";
                        // "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        // "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerClaimerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeUpgraders < localMadeUpgradersNeeded) {
                        var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"upgrader\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadePatrolLogic < 0) {
                        var memory = "{role: 'patrolLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 5 + "(\"attackerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeMedicLogic < 0) {
                        var memory = "{role: 'medicLogic', claim: true, working: false, origination: '" + roomName + "', arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
                            ", arrived2: false, roomToWorkX1: 39, roomToWorkY1: 3,  roomToWorkName1: \"W30S50\"" +
                            ", arrived3: false, roomToWorkX1: 5, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\"" +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"medicLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeSiegerLogic < 0) {
                        var memory = "{role: 'siegerLogic', claim: true, working: false, origination: '" + roomName + "', arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
                            ", arrived2: false, roomToWorkX1: 39, roomToWorkY1: 3,  roomToWorkName1: \"W30S50\"" +
                            ", arrived3: false, roomToWorkX1: 3, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\"" +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"attackerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    }
                }
            }
        },

    E52N19:

        function (allCreepsCount, gameTime) {

            var betterRoomName = "W33N23";

            var roomName = "E52N19";

            var controllerLevel = Game.rooms[roomName].controller.level;

            var wallsLevel = 100000;

            var basicCreepsNeeded = 5;

            var terminals = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TERMINAL});
            var terminal;
            if (terminals.length > 0) {
                terminal = terminals[0];
            }



            if (terminal) {
                if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_GHODIUM_ALKALIDE] == undefined
                        || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_GHODIUM_ALKALIDE] < terminal.store[RESOURCE_LEMERGIUM_ALKALIDE]))) {
                    market.buy(roomName, RESOURCE_GHODIUM_ALKALIDE, 500, 3.0);
                }
                else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_UTRIUM_ACID] == undefined
                        || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_UTRIUM_ACID] < (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE])))) {
                    market.buy(roomName, RESOURCE_UTRIUM_ACID, 500, 3.0);
                }
                else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_UTRIUM_ACID] == undefined
                        || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_UTRIUM_ACID] < (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE])))) {
                    market.buy(roomName, RESOURCE_UTRIUM_ACID, 500, 3.0);
                }
                else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_LEMERGIUM_ACID] == undefined
                        || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_LEMERGIUM_ACID] < (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE])))) {
                    market.buy(roomName, RESOURCE_LEMERGIUM_ACID, 500, 3.0);
                }
                else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_CATALYST] == undefined
                        || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_CATALYST] < (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] * 6)))) {
                    market.buy(roomName, RESOURCE_CATALYST, 500, 5.0);
                }
                else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] == undefined
                        || terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] < 2000)) {
                    market.buy(roomName, RESOURCE_LEMERGIUM_ALKALIDE, 500, 3.0);

                }
            }

            if (terminal) {
                if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_UTRIUM] == undefined
                        || terminal.store[RESOURCE_UTRIUM] < 1000)) {
                    market.buy(roomName, RESOURCE_UTRIUM, 100, .6);
                }
            }

            if (terminal) {
                if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_HYDROGEN] == undefined
                        || terminal.store[RESOURCE_HYDROGEN] < 2000)) {
                    market.buy(roomName, RESOURCE_HYDROGEN, 100, 1);
                }
            }

            if (terminal) {
                if (terminal.store[RESOURCE_OXYGEN] >= 1000 && terminal.store[RESOURCE_ENERGY] > 1000) {
                    market.sell(roomName, RESOURCE_OXYGEN, 1000, 0.9);
                }
            }

            if (controllerLevel == 2) {
                var wallsLevel = 25000;
            } else if (controllerLevel == 3) {
                var wallsLevel = 55000;
            } else if (controllerLevel == 4) {
                wallsLevel = 55000;
            } else if (controllerLevel == 5) {
                wallsLevel = 115000;
            } else if (controllerLevel == 6) {
                wallsLevel = 215000;
            } else if (controllerLevel == 7) {
                wallsLevel = 515000;
                basicCreepsNeeded = 5;
            } else if (controllerLevel == 8) {
                wallsLevel = 10015000;
            }

            this.defendRoom(roomName, wallsLevel);

            var gameTime = Game.time.toString();


            if (controllerLevel >= 4 && gameTime.substring(gameTime.length - 1, gameTime.length) == '0') {
                this.placeRampart(roomName);
            }

            var mines = Game.rooms[roomName].find(FIND_MINERALS);
            var mine = mines[0];


            var localMadePureMinersNeeded = 0;
            if (controllerLevel >= 6) {
                localMadePureMinersNeeded = 1;
            }

            if (mine.mineralAmount == 0) {
                localMadePureMinersNeeded = 0;
            }

            var roomToWorkName1 = "E51N19";
            var roomToWorkX1 = 45;
            var roomToWorkY1 = 41;

            var roomToWorkName2 = "E52N18";
            var roomToWorkX2 = 12;
            var roomToWorkY2 = 2;


            var roomToWorkName3 = "E54N17";
            var roomToWorkX3 = 28;
            var roomToWorkY3 = 2;

            // var cpuStart = Game.cpu.getUsed();


            var localMadeCreeps = _.sum(Game.creeps, (c) => c.memory.origination == roomName);

            var localMadeBasicCreeps = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreep');

            var localMadePureHarvesters = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'pureHarvester');

            var localMadePureMiners = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'pureMiner');

            var localMadeCouriers = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'courier');

            var localMadeUpgraders = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'upgrader');

            var localMadeBasicCreepsOuter1 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' &&
                c.memory.roomToWorkName == roomToWorkName1);

            var localMadeBasicCreepsOuter2 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' &&
                c.memory.roomToWorkName == roomToWorkName2);

            var localMadeBasicCreepsOuter3 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' &&
                c.memory.roomToWorkName == "W27S46");

            var localMadeBasicCreepsOuter5 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' && c.memory.tribe == 5);

            var localMadeBasicCreepsOuter6 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' && c.memory.tribe == 6);

            var localMadeOuterHarvesterLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerHarvesterLogic' &&
                c.memory.roomToWorkName == roomToWorkName1);

            var localMadeOuterHarvesterLogic2 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerHarvesterLogic' &&
                c.memory.roomToWorkName == roomToWorkName2);

            var localMadeOuterHarvesterLogic3 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerHarvesterLogic' &&
                c.memory.roomToWorkName == roomToWorkName3);

            var localMadeOuterCourierLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerCourierLogic' &&
                c.memory.roomToWorkName == roomToWorkName1);

            var localMadeOuterCourierLogic2 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerCourierLogic' &&
                c.memory.roomToWorkName == roomToWorkName2);

            var localMadeOuterCourierLogic3 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerCourierLogic' &&
                c.memory.roomToWorkName == roomToWorkName3);


            var localMadeOuterReserverLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerClaimerLogic' && c.memory.claim == false &&
                c.memory.roomToWorkName == roomToWorkName1);

            var localMadeOuterReserverLogic2 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerClaimerLogic' && c.memory.claim == false &&
                c.memory.roomToWorkName == roomToWorkName2);

            var localMadeOuterReserverLogic3 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerClaimerLogic' && c.memory.claim == false &&
                c.memory.roomToWorkName == roomToWorkName3);

            var localMadeOuterClaimerLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerClaimerLogic' && c.memory.claim == true);

            var localMadeAttackerLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'attackerLogic');


            var localMadePatrolLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'patrolLogic');


            var localMadeSiegerLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'siegerLogic');

            var localMadeMedicLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'medicLogic');

            var localMadeBankirLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'bankirLogic');

            var localMadeCourierMine = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'courierMine');


            var harvestersFromBetterRoomExpected = _.sum(Game.source, (s) => s.room.name == roomName);

            var localSpawns = new Array();

            for (let i in Game.spawns) {
                var spawn = (Game.spawns[i]);

                if (spawn.room.name == roomName) {
                    localSpawns.push(spawn);
                }
            }

            var betterRoomSpawns = new Array();

            for (let i in Game.spawns) {
                var spawn = (Game.spawns[i]);

                if (spawn.room.name == betterRoomName) {
                    betterRoomSpawns.push(spawn);
                }
            }

            var freeSpawn;

            if (localSpawns.length > 0) {
                freeSpawn = localSpawns[0].pos.findClosestByRange(localSpawns.filter((s) => s.isActive() == true && s.spawning == null));
            }

            if (controllerLevel >= 7) {
                var creepsToExtendLife;
                if (freeSpawn) {
                    creepsToExtendLife = freeSpawn.pos.findInRange(FIND_MY_CREEPS, 1, {
                        filter: (c) => c.ticksToLive < 1400 &&
                            c.memory.role != 'attackerLogic' && c.memory.role != 'warRepairer' && c.memory.role != 'bowman' && c.memory.role != 'medicLogic' &&
                            c.memory.role != 'outerClaimerLogic'
                    });
                }

                if (creepsToExtendLife != undefined && creepsToExtendLife.length > 0) {
                    var creepToExtendLife = creepsToExtendLife[0];
                    var healString = " Game.spawns." + freeSpawn.name + ".renewCreep(Game.creeps." + creepToExtendLife.name + ")";
                    eval(healString);
                }
            }

            var creepPotential = 0;

            creepPotential = 300 * _.sum(Game.spawns, (s) => s.room.name == roomName && s.owner.username == 'Dehar')
                + 50 * _.sum(Game.structures, (s) => s.room.name == roomName && s.owner.username == 'Dehar' &&
                    s.structureType == STRUCTURE_EXTENSION);


            if (controllerLevel >= 6 && creepPotential >= 2300 && creepPotential <= 5300) {
                controllerLevel = 6;
            }


            if (freeSpawn != undefined) {
                if (controllerLevel < 3 || creepPotential < 800 || localMadeCreeps < 4) {

                    if (controllerLevel == 1 && localMadeCreeps < 4) {
                        var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, CARRY, CARRY, MOVE, MOVE], " +
                            "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                        eval(createString);
                    } else if (controllerLevel >= 2) {


                        controllerLevel = 2;

                        if (localMadeCreeps < 2) {
                            var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, CARRY, CARRY, MOVE, MOVE], " +
                                "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                            eval(createString);
                        } else if (creepPotential > 500 && localMadeCreeps >= 2) {
                            if (localMadeBasicCreeps < basicCreepsNeeded) {
                                var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], " +
                                    "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                                eval(createString);
                            } else if (localMadePureHarvesters < 2) {
                                var memory = "{role: 'pureHarvester', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (controllerLevel > 1 && localMadeCouriers < 2) {
                                var memory = "{role: 'courier', working: false, origination: '" + roomName + "'}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"courier\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeBasicCreepsOuter1 < 1) {
                                var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreepOuter\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeOuterHarvesterLogic < 2) {
                                var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeOuterCourierLogic < 3) {
                                var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: " + 7 + ", " +
                                    "roomToBackY: " + 37 + "," +
                                    "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerCourierLogic\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeBasicCreepsOuter2 < 1) {
                                var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreepOuter\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeOuterHarvesterLogic2 < 1) {
                                var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeOuterCourierLogic2 < 2) {
                                var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: " + 10 + ", " +
                                    "roomToBackY: " + 48 + "," +
                                    "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerCourierLogic\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeAttackerLogic < 1) {
                                var memory = "{role: 'attackerLogic', working: false, origination: '" + roomName + "'}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"attackerLogic\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeUpgraders < 0) {
                                var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"upgrader\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            }
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
                            var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, CARRY, CARRY, MOVE, MOVE], " +
                                "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                            eval(createString);
                        } else if (creepPotential > 750) {
                            if (localMadeBasicCreeps < basicCreepsNeeded) {
                                var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], " +
                                    "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                                eval(createString);
                            } else if (localMadeBasicCreepsOuter1 < 2) {
                                var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreepOuter\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeOuterHarvesterLogic < 0) {
                                var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeOuterCourierLogic < 0) {
                                var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: " + 2 + ", " +
                                    "roomToBackY: " + 19 + "," +
                                    "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerCourierLogic\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeUpgraders < 2) {
                                var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"upgrader\"), memory)";
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

                } else {

                    var pureMinerLevel = controllerLevel;
                    var upgraderLevel = controllerLevel;
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
                        upgraderLevel = 5;
                    }

                    var controllerLevel1to3 = controllerLevel;
                    if (controllerLevel > 3) {
                        controllerLevel1to3 = 3;
                    }

                    var controllerLevel1to4 = controllerLevel;
                    if (controllerLevel > 4) {
                        controllerLevel1to4 = 4;
                    }

                    var controllerLevel1to6 = controllerLevel;
                    if (controllerLevel > 6) {
                        controllerLevel1to4 = 6;
                    }

                    if (localMadeCreeps < 2) {
                        var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, CARRY, CARRY, MOVE, MOVE], " +
                            "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                        eval(createString);
                    } else if (localMadeBasicCreeps < 2) {
                        var memory = "{role: 'basicCreep', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreep\"), memory)";
                        var createString = eval(constructorString);
                        // var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadePureHarvesters < 2) {
                        var memory = "{role: 'pureHarvester', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel >= 6 && localMadePureMiners < localMadePureMinersNeeded) {
                        var memory = "{role: 'pureMiner', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + pureMinerLevel + "(\"pureMiner\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeCourierMine < localMadePureMiners) {
                        var memory = "{role: 'courierMine', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 2 + "(\"courier\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeCouriers < 1) {
                        var memory = "{role: 'courier', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"courier\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeUpgraders < 1) {
                        var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + upgraderLevel + "(\"upgrader\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeBankirLogic < 1) {
                        var memory = "{role: 'bankirLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"courier\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeAttackerLogic < 1) {
                        var memory = "{role: 'attackerLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"," +
                            "roomToInvestigateName0 : \"E51N19\", roomToInvestigateX0: 47, roomToInvestigateY0: 39," +
                            "roomToInvestigateName1 : \"E52N19\", roomToInvestigateX1: 10, roomToInvestigateY1: 39," +
                            "roomToInvestigateName2 : \"E52N18\", roomToInvestigateX2: 10, roomToInvestigateY2: 2" +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic < 2) {
                        var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                            "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeOuterCourierLogic < 2) {
                        var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 2, roomToBackY: 35," +
                            "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                            "linkRoomName: \"" + roomName + "\", linkRoomX: 2" + ", linkRoomY: 36," +
                            "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerCourierLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 2 && localMadeOuterReserverLogic < 1) {
                        var memory = "{role: 'outerClaimerLogic', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                            "roomToWorkX1: " + (roomToWorkX1 + 2) + "," +
                            "roomToWorkY1: " + roomToWorkY1 + "," +
                            "roomToWorkName1: \"" + roomToWorkName1 + "\"," +
                            // "roomToWorkX2: 8," +
                            // "roomToWorkY2: 2," +
                            // "roomToWorkName2: \"E54N18\"" +
                            "}";
                        // "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                        // "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerClaimerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeBasicCreepsOuter1 < 2) {
                        var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, " +
                            "roomToWorkX1: " + roomToWorkX1 + "," +
                            "roomToWorkY1: " + roomToWorkY1 + "," +
                            "roomToWorkName1: \"" + roomToWorkName1 + "\"," +
                            // "roomToWorkX2: 8," +
                            // "roomToWorkY2: 2," +
                            // "roomToWorkName2: \"E54N18\"" +
                            "}";
                        // "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                        // "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreepOuter\"), memory)";
                        var createString = eval(constructorString);
                        var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                        eval(createString);
                    } else if (localMadeBasicCreepsOuter6 < 0) {
                        var memory = "{role: 'basicCreepOuter', tribe: 6, working: false, origination: '" + roomName + "', arrived: false," +
                            "roomToWorkX1: 10," +
                            "roomToWorkY1: 48," +
                            "roomToWorkName1: \"E51N20\"," +
                            "roomToWorkX2: 20," +
                            "roomToWorkY2: 1," +
                            "roomToWorkName2: \"E51N19\"" +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreepOuter\"), memory)";
                        var createString = eval(constructorString);
                        var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic2 < 1) {
                        var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                            "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeOuterClaimerLogic < 0) {
                        var memory = "{role: 'outerClaimerLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false," +
                            "roomToWorkX1: 10," +
                            "roomToWorkY1: 48," +
                            "roomToWorkName1: \"E51N20\"," +
                            "roomToWorkX2: 20," +
                            "roomToWorkY2: 1," +
                            "roomToWorkName2: \"E51N19\"" +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerClaimerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeOuterCourierLogic2 < 1) {
                        var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 10, roomToBackY: 48," +
                            "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                            "linkRoomName: \"" + roomName + "\", linkRoomX: 13" + ", linkRoomY: 47," +
                            "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerCourierLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 2 && localMadeOuterReserverLogic2 < 1) {
                        var memory = "{role: 'outerClaimerLogic', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                            "roomToWorkX1: " + roomToWorkX2 + "," +
                            "roomToWorkY1: " + roomToWorkY2 + "," +
                            "roomToWorkName1: \"" + roomToWorkName2 + "\"," +
                            // "roomToWorkX2: 8," +
                            // "roomToWorkY2: 2," +
                            // "roomToWorkName2: \"E54N18\"" +
                            "}";
                        // "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        // "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerClaimerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeBasicCreepsOuter2 < 1) {
                        var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, " +
                            "roomToWorkX1: " + (roomToWorkX2 - 2) + "," +
                            "roomToWorkY1: " + roomToWorkY2 + "," +
                            "roomToWorkName1: \"" + roomToWorkName2 + "\"," +
                            // "roomToWorkX2: 8," +
                            // "roomToWorkY2: 2," +
                            // "roomToWorkName2: \"E54N18\"" +
                            "}";
                        // "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        // "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreepOuter\"), memory)";
                        var createString = eval(constructorString);
                        var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                        eval(createString);
                    } else if (localMadeOuterCourierLogic3 < 0) {
                        var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 46, roomToBackY: 12," +
                            "roomToWorkX: " + roomToWorkX3 + ", roomToWorkY: " + roomToWorkY3 + ",  " +
                            "roomToWorkName: \"" + roomToWorkName3 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 5 + "(\"outerCourierLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadePatrolLogic < 0) {
                        var memory = "{role: 'patrolLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 5 + "(\"attackerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeMedicLogic < 0) {
                        var memory = "{role: 'medicLogic', claim: true, working: false, origination: '" + roomName + "', arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
                            ", arrived2: false, roomToWorkX1: 39, roomToWorkY1: 3,  roomToWorkName1: \"W30S50\"" +
                            ", arrived3: false, roomToWorkX1: 5, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\"" +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"medicLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } /*else if (controllerLevel > 1 && localMadeUpgraders < 2) {
                        var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"upgrader\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    }*/ else if (localMadeSiegerLogic < 0) {
                        var memory = "{role: 'siegerLogic', claim: true, working: false, origination: '" + roomName + "', arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
                            ", arrived2: false, roomToWorkX1: 39, roomToWorkY1: 3,  roomToWorkName1: \"W30S50\"" +
                            ", arrived3: false, roomToWorkX1: 3, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\"" +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"attackerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    }
                }
            }
        },

    createCreeps: function () {

    },


    towersDefendAndRepairRoom: function (roomName, wallsLevel) {
        var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);

        var towers = Game.rooms[roomName].find(
            FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});

        if (towers.length > 0) {

            if (hostiles.length > 0) {
                var username = hostiles[0].owner.username;
                Game.notify(`User ${username} spotted in room ${roomName}`);
                towers.forEach(tower => tower.attack(hostiles[0]));
            } else {

                // var structure;
                //
                // if (towers[0].memory.structureToRepairId) {
                //     structure = Game.getObjectById(creep.memory.structureToRepairId);
                // }
                //
                // if (structure != (null || undefined)) {
                //     if (structure.hits <= (structure.hitsMax / 5 * 4) && structure.hits <= (wallMaxRepair - 5000)) {
                //         structure = undefined;
                //         towers[0].memory.structureToRepairId = undefined;
                //     }
                // }

                // if (towers[0].memory.structureToRepairId == undefined) {

                var energyOk = true;

                for (let i in towers) {
                    var tower = towers[i];
                    if (tower.energy < 500) {
                        energyOk = false;
                    }
                }

                if (energyOk) {

                    var structure = towers[0].pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: (s) =>
                            s.structureType != STRUCTURE_CONTROLLER &&
                            s.structureType != STRUCTURE_WALL &&
                            s.structureType == STRUCTURE_ROAD &&
                            s.hits <= (s.hitsMax / 5 * 4) && s.hits <= (wallsLevel - 10000)

                    });

                    if (!structure) {
                        structure = towers[0].pos.findClosestByPath(FIND_STRUCTURES, {
                            filter: (s) =>
                                s.structureType != STRUCTURE_CONTROLLER &&
                                s.structureType != STRUCTURE_WALL &&
                                s.hits <= (s.hitsMax / 5 * 4) && s.hits <= (wallsLevel - 10000)

                        });
                    }


                    // creep.memory.structureToRepairId = structure.id;
                    // }

                    if (structure) {
                        towers.forEach(tower => tower.repair(structure));
                    }
                }
            }
        }
    },

    placeRampartForStructure: function (roomName) {
        rampartSites = Game.rooms[roomName].find(FIND_CONSTRUCTION_SITES, {filter: (cs) => cs.structureType == STRUCTURE_RAMPART});
        if (rampartSites.length == 0) {
            var structuresForRampart = Game.rooms[roomName].find(FIND_STRUCTURES, {
                filter: (s) => s.structureType != STRUCTURE_RAMPART &&
                    s.structureType != STRUCTURE_EXTRACTOR && s.structureType != STRUCTURE_ROAD && s.structureType != STRUCTURE_CONTROLLER &&
                    s.structureType != STRUCTURE_WALL &&
                    Game.rooms[roomName].find(FIND_STRUCTURES, {
                        filter: (is) => is.structureType == STRUCTURE_RAMPART &&
                            is.pos.x == s.pos.x && is.pos.y == s.pos.y
                    }).length == 0
            });
            if (structuresForRampart.length > 0) {
                var constructionSiteCreated = Game.rooms[roomName].createConstructionSite(structuresForRampart[0].pos, STRUCTURE_RAMPART);
            }
            var x;
            var y;
            var terrain;
            var terrainOk = false;
            if (structuresForRampart.length == 0) {
                var controllerPosition = Game.rooms[roomName].controller.pos;
                for (x = controllerPosition.x - 1; x <= controllerPosition.x + 1; x++) {
                    for (y = controllerPosition.y - 1; y <= controllerPosition.y + 1; y++) {
                        structuresForRampart = Game.rooms[roomName].find(FIND_STRUCTURES, {
                            filter: (s) => (s.structureType == STRUCTURE_RAMPART || s.structureType == STRUCTURE_CONTROLLER
                                || s.structureType == STRUCTURE_EXTRACTOR || s.structureType == STRUCTURE_WALL) &&
                                s.pos.x == x && s.pos.y == y
                        });
                        if (structuresForRampart.length == 0) {
                            terrain = Game.map.getTerrainAt(x, y, roomName);
                            if (terrain != 'wall') {
                                terrainOk = true;
                                break;
                            }
                        }
                    }
                    if (terrainOk == true) {
                        var constructionSiteCreated = Game.rooms[roomName].createConstructionSite(x, y, STRUCTURE_RAMPART);
                        break;
                    }
                }
            }

        }
    }


}
;

