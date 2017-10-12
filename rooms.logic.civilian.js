var creepTemplates = require('creep.templates');
var market = require('market');

module.exports = {

    runMyRooms: function (allCreepsCount, gameTime, allReservesCount) {

        // this.roomW32N24();

        this.E53N16(allCreepsCount, gameTime, allReservesCount);
        this.E57N15(allCreepsCount, gameTime, allReservesCount);
        this.E52N19(allCreepsCount, gameTime, allReservesCount);

    },

    E53N16: function (allCreepsCount, gameTime, allReservesCount) {

        // for(var i in allCreepsCount){
        // var entry = allCreepsCount[i];
        // }

        // var startCpu = Game.cpu.getUsed();

        var betterRoomName = "W33N23";

        var roomName = "E53N16";

        var roomMemory = Game.rooms[roomName].memory;

        var controllerLevel = Game.rooms[roomName].controller.level;

        var wallsLevel = 10000;

        var basicCreepsNeeded = 3;
        var localMadeUpgradersNeeded = 1;

        if (allReservesCount[roomName + ";" + RESOURCE_ENERGY] > 100000) {
            localMadeUpgradersNeeded += 1;
        }
        if (allReservesCount[roomName + ";" + RESOURCE_ENERGY] > 200000) {
            localMadeUpgradersNeeded += 1;
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
        } else if (controllerLevel == 8) {
            wallsLevel = 10015000;
        }

        this.defendRoom(roomName, wallsLevel);

        if (controllerLevel >= 4 && gameTime.substring(gameTime.length - 2, gameTime.length) == '00') {
            this.placeRampart(roomName);
        }

        if (controllerLevel >= 6 && gameTime.substring(gameTime.length - 3, gameTime.length) == '000') {
            roomMemory.controllerAttacker1Needed = true;
            roomMemory.controllerAttacker2Needed = true;
            roomMemory.controllerAttacker3Needed = true;
        }

        var terminals = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TERMINAL});
        var terminal;
        if (terminals.length > 0) {
            terminal = terminals[0];
        }

        var lemergiumAlkalideReserve = allReservesCount[roomName + ";" + RESOURCE_LEMERGIUM_ALKALIDE];

        var lemergiumAlkalideReserveNeeded = 2000;
        // if(lemergiumAlkalideReserve >= 3000 && lemergiumAlkalideReserve < 6000){
        //     lemergiumAlkalideReserveNeeded = 6000;
        // } else if(lemergiumAlkalideReserve >= 6000 && lemergiumAlkalideReserve < 9000){
        //     lemergiumAlkalideReserveNeeded = 9000;
        // } else if(lemergiumAlkalideReserve >= 9000 && lemergiumAlkalideReserve < 12000){
        //     lemergiumAlkalideReserveNeeded = 12000;
        // } else if(lemergiumAlkalideReserve >= 15000 && lemergiumAlkalideReserve < 15000){
        //     lemergiumAlkalideReserveNeeded = 21000;
        // } else if(lemergiumAlkalideReserve >= 15000){
        //     lemergiumAlkalideReserveNeeded = 21000;
        // }

        if (terminal && Game.market.credits >= 5000) {
            if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_GHODIUM_ALKALIDE] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_GHODIUM_ALKALIDE] < lemergiumAlkalideReserve))) {
                market.buy(roomName, RESOURCE_GHODIUM_ALKALIDE, 500, 5.0);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_UTRIUM_ACID] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_UTRIUM_ACID] < lemergiumAlkalideReserve))) {
                market.buy(roomName, RESOURCE_UTRIUM_ACID, 500, 3.0);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_UTRIUM_ALKALIDE] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_UTRIUM_ALKALIDE] < lemergiumAlkalideReserve))) {
                market.buy(roomName, RESOURCE_UTRIUM_ALKALIDE, 500, 3.0);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_UTRIUM_ALKALIDE] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_UTRIUM_ALKALIDE] < lemergiumAlkalideReserve))) {
                market.buy(roomName, RESOURCE_UTRIUM_ALKALIDE, 500, 3.0);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_LEMERGIUM_ACID] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_LEMERGIUM_ACID] < lemergiumAlkalideReserve))) {
                market.buy(roomName, RESOURCE_LEMERGIUM_ACID, 500, 3.0);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_KEANIUM_ALKALIDE] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_KEANIUM_ALKALIDE] < lemergiumAlkalideReserve))) {
                market.buy(roomName, RESOURCE_KEANIUM_ALKALIDE, 500, 3.0);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_ZYNTHIUM_ACID] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_ZYNTHIUM_ACID] < lemergiumAlkalideReserve))) {
                market.buy(roomName, RESOURCE_ZYNTHIUM_ACID, 500, 3.0);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_ZYNTHIUM_ALKALIDE] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_ZYNTHIUM_ALKALIDE] < lemergiumAlkalideReserve / 2))) {
                market.buy(roomName, RESOURCE_ZYNTHIUM_ALKALIDE, 500, 3.0);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_CATALYST] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_CATALYST] < lemergiumAlkalideReserve))) {
                market.buy(roomName, RESOURCE_CATALYST, 500, 1.5);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] == undefined
                    || lemergiumAlkalideReserve < lemergiumAlkalideReserveNeeded)) {
                market.buy(roomName, RESOURCE_LEMERGIUM_ALKALIDE, 500, 3.0);
            }
        }

        if (terminal && Game.market.credits < 5000) {
            if (terminal.store[RESOURCE_LEMERGIUM] >= 500 && terminal.store[RESOURCE_ENERGY] > 500) {
                market.sell(roomName, RESOURCE_LEMERGIUM, 500, 0.35);
            }
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

        if (gameTime.substring(gameTime.length - 2, gameTime.length) == '00') {
            roomMemory.roomToWorkName1 = "E52N16";
            roomMemory.roomToWorkX1 = 46;
            roomMemory.roomToWorkY1 = 20;

            roomMemory.roomToWorkName2 = "E53N17";
            roomMemory.roomToWorkX2 = 5;
            roomMemory.roomToWorkY2 = 45;

            roomMemory.roomToWorkName3 = "E53N15";
            roomMemory.roomToWorkX3 = 20;
            roomMemory.roomToWorkY3 = 2;

            roomMemory.roomToWorkName4 = "E52N15";
            roomMemory.roomToWorkX4 = 45;
            roomMemory.roomToWorkY4 = 38;

            roomMemory.roomToWorkName5 = "E54N16";
            roomMemory.roomToWorkX5 = 2;
            roomMemory.roomToWorkY5 = 29;
        }

        if (controllerLevel >= 4 && gameTime.substring(gameTime.length - 2, gameTime.length) == '00') {
            this.placeRampart(roomName);
            var rampartAreas = new Array();
            //     var rampartArea1 = {x1: 20, y1: 17, x2: 34, y2: 31};
            var rampartArea2 = {x1: 20, y1: 17, x2: 34, y2: 17};
            var rampartArea3 = {x1: 20, y1: 31, x2: 34, y2: 31};
            var rampartArea4 = {x1: 20, y1: 17, x2: 20, y2: 31};
            var rampartArea5 = {x1: 34, y1: 17, x2: 34, y2: 31};

            //     rampartAreas.push(rampartArea1);
            rampartAreas.push(rampartArea2);
            rampartAreas.push(rampartArea3);
            rampartAreas.push(rampartArea4);
            rampartAreas.push(rampartArea5);

            // this.placeRampartFromArea(roomName, rampartAreas);
        }

        let creepsNeeded = new Map();

        creepsNeeded.set("basicCreep", 2);
        creepsNeeded.set("pureHarvester", 1);
        creepsNeeded.set("pureMiner", 1);
        creepsNeeded.set("courier", 1);
        creepsNeeded.set("upgrader", 1);
        creepsNeeded.set("basicCreepOuter1", 1);
        creepsNeeded.set("basicCreepOuter2", 1);
        creepsNeeded.set("basicCreepOuter3", 1);
        creepsNeeded.set("basicCreepOuter4", 0);
        creepsNeeded.set("basicCreepOuter5", 0);
        creepsNeeded.set("basicCreepOuter6", 3);
        creepsNeeded.set("outerHarvesterLogic", 0);
        creepsNeeded.set("outerHarvesterLogic1", 2);
        creepsNeeded.set("outerHarvesterLogic2", 2);
        creepsNeeded.set("outerHarvesterLogic3", 2);
        creepsNeeded.set("outerHarvesterLogic4", 0);
        creepsNeeded.set("outerHarvesterLogic5", 0);
        creepsNeeded.set("outerCourierLogic1", 1);
        creepsNeeded.set("outerCourierLogic2", 1);
        creepsNeeded.set("outerCourierLogic3", 1);
        creepsNeeded.set("outerCourierLogic4", 0);
        creepsNeeded.set("outerCourierLogic5", 0);
        creepsNeeded.set("attackerLogic1", 1);
        creepsNeeded.set("attackerLogic2", 0);
        creepsNeeded.set("attackerLogic3", 0);
        creepsNeeded.set("keeperKiller1", 0);
        creepsNeeded.set("keeperKiller2", 0);
        creepsNeeded.set("controllerAttacker1", 0);
        creepsNeeded.set("controllerAttacker2", 0);
        creepsNeeded.set("outerReserver1", 1);
        creepsNeeded.set("outerReserver2", 1);
        creepsNeeded.set("outerReserver3", 1);
        creepsNeeded.set("outerReserver4", 0);
        creepsNeeded.set("outerReserver5", 0);
        creepsNeeded.set("dismantilist1", 0);
        creepsNeeded.set("dismantilist2", 0);
        creepsNeeded.set("medic1", 1);
        creepsNeeded.set("medic2", 0);
        creepsNeeded.set("sieger", 0);
        creepsNeeded.set("bankir", 1);
        creepsNeeded.set("courierMiner", 0);
        creepsNeeded.set("exauster", 0);

        let creepsData = new Map();

        this.createCreeps(roomName, allCreepsCount, gameTime, creepsData, creepsNeeded);
        /*
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
        */

    },

    E57N15:

        function (allCreepsCount, gameTime, allReservesCount) {

            // var startCpu = Game.cpu.getUsed();


            var betterRoomName = "W33N23";

            var roomName = "E57N15";

            var controllerLevel = Game.rooms[roomName].controller.level;

            var wallsLevel = 100000;

            var basicCreepsNeeded = 2;

            var terminals = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TERMINAL});
            var terminal;
            if (terminals.length > 0) {
                terminal = terminals[0];
            }

            /*
                        if (terminal && Game.market.credits >= 5000) {
                            if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_GHODIUM_ALKALIDE] == undefined
                                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_GHODIUM_ALKALIDE] < 0))) {
                                market.buy(roomName, RESOURCE_GHODIUM_ALKALIDE, 500, 5.0);
                            }
                            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_UTRIUM_ACID] == undefined
                                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_UTRIUM_ACID] < 0))) {
                                market.buy(roomName, RESOURCE_UTRIUM_ACID, 500, 3.0);
                            }
                            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_UTRIUM_ALKALIDE] == undefined
                                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_UTRIUM_ALKALIDE] < 0))) {
                                market.buy(roomName, RESOURCE_UTRIUM_ALKALIDE, 500, 3.0);
                            }
                            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_UTRIUM_ALKALIDE] == undefined
                                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_UTRIUM_ALKALIDE] < 0))) {
                                market.buy(roomName, RESOURCE_UTRIUM_ALKALIDE, 500, 3.0);
                            }
                            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_LEMERGIUM_ACID] == undefined
                                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_LEMERGIUM_ACID] < 0))) {
                                market.buy(roomName, RESOURCE_LEMERGIUM_ACID, 500, 3.0);
                            }
                            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_KEANIUM_ALKALIDE] == undefined
                                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_KEANIUM_ALKALIDE] < 0))) {
                                market.buy(roomName, RESOURCE_KEANIUM_ALKALIDE, 500, 3.0);
                            }
                            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_ZYNTHIUM_ACID] == undefined
                                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_ZYNTHIUM_ACID] < 0))) {
                                market.buy(roomName, RESOURCE_ZYNTHIUM_ACID, 500, 3.0);
                            }
                            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_CATALYST] == undefined
                                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_CATALYST] < 0))) {
                                market.buy(roomName, RESOURCE_CATALYST, 500, 1.5);
                            }
                            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] == undefined
                                    || terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] < 0)) {
                                market.buy(roomName, RESOURCE_LEMERGIUM_ALKALIDE, 500, 3.0);

                            }
                        }
*/


            // } else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_UTRIUM] == undefined
            //         || terminal.store[RESOURCE_UTRIUM] < 1000)) {
            //     market.buy(roomName, RESOURCE_UTRIUM, 100, .6);
            // } else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_HYDROGEN] == undefined
            //         || terminal.store[RESOURCE_HYDROGEN] < 2000)) {
            //     market.buy(roomName, RESOURCE_HYDROGEN, 100, 1);
            // }

            if (terminal && Game.market.credits < 5000) {
                if (terminal.store[RESOURCE_OXYGEN] >= 500 && terminal.store[RESOURCE_ENERGY] > 500) {
                    market.sell(roomName, RESOURCE_OXYGEN, 500, 0.9);
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
                var rampartAreas = new Array();
                var rampartArea1 = {x1: 1, y1: 29, x2: 5, y2: 30};
                var rampartArea2 = {x1: 4, y1: 31, x2: 5, y2: 32};
                var rampartArea3 = {x1: 14, y1: 3, x2: 18, y2: 4};
                // var rampartArea4 = {x1: 3, y1: 33, x2: 7, y2: 38};
                // var rampartArea5 = {x1: 3, y1: 32, x2: 3, y2: 32};
                rampartAreas.push(rampartArea1);
                rampartAreas.push(rampartArea2);
                rampartAreas.push(rampartArea3);
                // rampartAreas.push(rampartArea4);
                // rampartAreas.push(rampartArea5);
                this.placeRampartFromArea(roomName, rampartAreas);
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

            var roomToWorkName1 = "E57N14";
            var roomToWorkX1 = 25;
            var roomToWorkY1 = 1;

            var roomToWorkName2 = "E57N13";
            var roomToWorkX2 = 16;
            var roomToWorkY2 = 5;


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

            var controllerAttacker = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'controllerAttacker');

            var dismantalist = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'dismantalist');

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


                        var localMadeCouriersNeeded = 2;

                        var localMadeUpgradersNeeded = 2;

                        var containersHarvester = Game.rooms[roomName].find(FIND_STRUCTURES, {
                            filter: (s) => s.pos.findInRange(FIND_SOURCES, 3).length > 0 &&
                                s.structureType == STRUCTURE_CONTAINER
                        });

                        if (containersHarvester.length == 2 && (containersHarvester[0].store[RESOURCE_ENERGY]
                                + containersHarvester[1].store[RESOURCE_ENERGY]) > 2000) {
                            localMadeCouriersNeeded += 2;
                        }

                        var containerController = Game.rooms[roomName].controller.pos.findInRange(FIND_STRUCTURES, 4, {filter: (s) => s.structureType == STRUCTURE_CONTAINER})[0];

                        if (containerController && containerController.store[RESOURCE_ENERGY] > 1500) {
                            localMadeUpgradersNeeded += 1;
                        }

                        if (creepPotential < 500 && localMadeCreeps < 2) {
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
                            } else if (controllerLevel > 1 && localMadeCouriers < 0) {
                                var memory = "{role: 'courier', working: false, origination: '" + roomName + "'}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"courier\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeAttackerLogic < 1) {
                                var memory = "{role: 'attackerLogic', working: false, origination: '" + roomName + "'," +
                                    "roomToInvestigateName0 : \"E57N15\", roomToInvestigateX0: 13, roomToInvestigateY0: 19" +
                                    // "roomToInvestigateName1 : \"E57N13\", roomToInvestigateX1: 16, roomToInvestigateY1: 3" +
                                    // "roomToInvestigateName2 : \"E52N18\", roomToInvestigateX2: 10, roomToInvestigateY2: 2" +
                                    "}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"attackerLogic\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeUpgraders < localMadeUpgradersNeeded) {
                                var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"upgrader\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeBasicCreepsOuter1 < 0) {
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
                                var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: " + 7 + ", " +
                                    "roomToBackY: " + 37 + "," +
                                    "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerCourierLogic\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeBasicCreepsOuter2 < 0) {
                                var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreepOuter\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeOuterHarvesterLogic2 < 0) {
                                var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                                var createString = eval(constructorString);
                                eval(createString);
                            } else if (localMadeOuterCourierLogic2 < 0) {
                                var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: " + 10 + ", " +
                                    "roomToBackY: " + 48 + "," +
                                    "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                                    "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                                var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerCourierLogic\"), memory)";
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

                    var pureMinerLevel = 6;
                    var pureMinerBoost = false;
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
                        controllerLevel = 5;
                        pureMinerLevel = 5;
                        pureMinerXUH02 = 420;
                    }

                    //Pure miner upgrade resources calc
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
                        var memory = "{role: 'pureMiner', working: false, origination: '" + roomName + "'" +
                            ", needBoost: " + pureMinerBoost +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + pureMinerLevel + "(\"pureMiner\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeCourierMine < localMadePureMiners) {
                        var memory = "{role: 'courierMine', working: false, origination: '" + roomName + "'" +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 5 + "(\"courier\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeCouriers < 3) {
                        var memory = "{role: 'courier', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"courier\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeBankirLogic < 1 && 6 <= controllerLevel) {
                        var memory = "{role: 'bankirLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 4 + "(\"courier\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeUpgraders < 1) {
                        var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"upgrader\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeAttackerLogic < 0) {
                        var memory = "{role: 'attackerLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"," +
                            "roomToInvestigateName0 : \"E51N18\", roomToInvestigateX0: 15, roomToInvestigateY0: 2," +
                            "roomToInvestigateName1 : \"E52N19\", roomToInvestigateX1: 10, roomToInvestigateY1: 39," +
                            "roomToInvestigateName2 : \"E52N18\", roomToInvestigateX2: 10, roomToInvestigateY2: 2" +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 2 && controllerAttacker < 0) {
                        var memory = "{role: 'controllerAttacker', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                            "needBoost: true," +
                            "roomToWorkX1: " + 5 + "," +
                            "roomToWorkY1: " + 2 + "," +
                            "roomToWorkName1: \"" + "E51N18" + "\"" +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"controllerAttacker\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeMedicLogic < 0) {
                        var memory = "{role: 'medicLogic', claim: true, working: false, origination: '" + roomName + "', arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
                            ", needBoost: true" +
                            ", arrived2: false, roomToWorkX1: 5, roomToWorkY1: 2,  roomToWorkName1: \"E51N18\"" +
                            // ", arrived3: false, roomToWorkX1: 5, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\"" +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"medicLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (dismantalist < 0) {
                        var memory = "{role: 'dismantalist', claim: true, working: false, origination: '" + roomName + "', arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
                            ", needBoost: false" +
                            ", arrived2: false, roomToWorkX1: 15, roomToWorkY1: 5,  roomToWorkName1: \"E51N18\"" +
                            // ", arrived3: false, roomToWorkX1: 5, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\"" +
                            "}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreep\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 1 && localMadeAttackerLogic < 1) {
                        var memory = "{role: 'attackerLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"," +
                            "roomToInvestigateName0 : \"E57N14\", roomToInvestigateX0: 16, roomToInvestigateY0: 46," +
                            "roomToInvestigateName1 : \"E57N13\", roomToInvestigateX1: 16, roomToInvestigateY1: 3" +
                            // "roomToInvestigateName2 : \"E52N18\", roomToInvestigateX2: 10, roomToInvestigateY2: 2" +
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
                    } else if (controllerLevel > 1 && localMadeOuterCourierLogic < 1) {
                        var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 24, roomToBackY: 42," +
                            "roomToWorkX: " + (roomToWorkX1 + 2) + ", roomToWorkY: " + (roomToWorkY1 + 1) + ",  " +
                            "linkRoomName: \"" + roomName + "\", linkRoomX: 2" + ", linkRoomY: 36," +
                            "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"outerCourierLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 2 && localMadeOuterReserverLogic < 1) {
                        var memory = "{role: 'outerClaimerLogic', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                            "roomToWorkX1: " + (roomToWorkX1 - 1) + "," +
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
                    } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic2 < 2) {
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
                        var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 28, roomToBackY: 47," +
                            "roomToWorkX: " + (roomToWorkX2 + 2) + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                            "linkRoomName: \"" + roomName + "\", linkRoomX: 27" + ", linkRoomY: 47," +
                            "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"outerCourierLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (controllerLevel > 2 && localMadeOuterReserverLogic2 < 1) {
                        var memory = "{role: 'outerClaimerLogic', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                            "roomToWorkX1: " + (roomToWorkX2 - 1) + "," +
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

    E52N19: function (allCreepsCount, gameTime, allReservesCount) {

        var betterRoomName = "W33N23";

        var roomName = "E52N19";

        var controllerLevel = Game.rooms[roomName].controller.level;

        var wallsLevel = 100000;

        var basicCreepsNeeded = 5;

        var localMadeUpgradersNeeded = 1;

        if (allReservesCount[roomName + ";" + RESOURCE_ENERGY] > 200000) {
            localMadeUpgradersNeeded += 2;
        } else if (allReservesCount[roomName + ";" + RESOURCE_ENERGY] > 100000) {
            localMadeUpgradersNeeded += 1;
        }


        var terminals = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TERMINAL});
        var terminal;
        if (terminals.length > 0) {
            terminal = terminals[0];
        }


        var lemergiumAlkalideReserve = allReservesCount[roomName + ";" + RESOURCE_LEMERGIUM_ALKALIDE];

        var lemergiumAlkalideReserveNeeded = 3000;
        if (lemergiumAlkalideReserve >= 3000 && lemergiumAlkalideReserve < 6000) {
            lemergiumAlkalideReserveNeeded = 6000;
        } else if (lemergiumAlkalideReserve >= 6000 && lemergiumAlkalideReserve < 9000) {
            lemergiumAlkalideReserveNeeded = 9000;
        } else if (lemergiumAlkalideReserve >= 9000 && lemergiumAlkalideReserve < 12000) {
            lemergiumAlkalideReserveNeeded = 12000;
        } else if (lemergiumAlkalideReserve >= 15000 && lemergiumAlkalideReserve < 15000) {
            lemergiumAlkalideReserveNeeded = 21000;
        } else if (lemergiumAlkalideReserve >= 15000) {
            lemergiumAlkalideReserveNeeded = 21000;
        }

        if (terminal && Game.market.credits >= 5000) {
            if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_GHODIUM_ALKALIDE] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_GHODIUM_ALKALIDE] < lemergiumAlkalideReserve * 2))) {
                market.buy(roomName, RESOURCE_GHODIUM_ALKALIDE, 500, 5.0);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_UTRIUM_ACID] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_UTRIUM_ACID] < lemergiumAlkalideReserve))) {
                market.buy(roomName, RESOURCE_UTRIUM_ACID, 500, 3.0);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_UTRIUM_ALKALIDE] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_UTRIUM_ALKALIDE] < lemergiumAlkalideReserve))) {
                market.buy(roomName, RESOURCE_UTRIUM_ALKALIDE, 500, 3.0);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_UTRIUM_ALKALIDE] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_UTRIUM_ALKALIDE] < lemergiumAlkalideReserve))) {
                market.buy(roomName, RESOURCE_UTRIUM_ALKALIDE, 500, 3.0);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_LEMERGIUM_ACID] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_LEMERGIUM_ACID] < lemergiumAlkalideReserve))) {
                market.buy(roomName, RESOURCE_LEMERGIUM_ACID, 500, 3.0);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_KEANIUM_ALKALIDE] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_KEANIUM_ALKALIDE] < lemergiumAlkalideReserve))) {
                market.buy(roomName, RESOURCE_KEANIUM_ALKALIDE, 500, 3.0);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_ZYNTHIUM_ACID] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_ZYNTHIUM_ACID] < lemergiumAlkalideReserve))) {
                market.buy(roomName, RESOURCE_ZYNTHIUM_ACID, 500, 3.0);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_ZYNTHIUM_ALKALIDE] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_ZYNTHIUM_ALKALIDE] < lemergiumAlkalideReserve / 2))) {
                market.buy(roomName, RESOURCE_ZYNTHIUM_ALKALIDE, 500, 3.0);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_CATALYST] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_CATALYST] < lemergiumAlkalideReserve * 5))) {
                market.buy(roomName, RESOURCE_CATALYST, 500, 1.5);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] == undefined
                    || lemergiumAlkalideReserve < lemergiumAlkalideReserveNeeded)) {
                market.buy(roomName, RESOURCE_LEMERGIUM_ALKALIDE, 500, 3.0);

            }
        }
        // } else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_UTRIUM] == undefined
        //         || terminal.store[RESOURCE_UTRIUM] < 1000)) {
        //     market.buy(roomName, RESOURCE_UTRIUM, 100, .6);
        // } else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_HYDROGEN] == undefined
        //         || terminal.store[RESOURCE_HYDROGEN] < 2000)) {
        //     market.buy(roomName, RESOURCE_HYDROGEN, 100, 1);
        // }

        if (terminal && Game.market.credits < 5000) {
            if (terminal.store[RESOURCE_OXYGEN] >= 500 && terminal.store[RESOURCE_ENERGY] > 500) {
                market.sell(roomName, RESOURCE_OXYGEN, 500, 0.72);
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
            // basicCreepsNeeded = 5;
        } else if (controllerLevel == 8) {
            wallsLevel = 10015000;
        }

        this.defendRoom(roomName, wallsLevel);

        var gameTime = Game.time.toString();


        if (controllerLevel >= 4 && gameTime.substring(gameTime.length - 2, gameTime.length) == '00') {
            this.placeRampart(roomName);
            var rampartAreas = new Array();
            var rampartArea1 = {x1: 16, y1: 22, x2: 31, y2: 22};
            var rampartArea2 = {x1: 13, y1: 22, x2: 13, y2: 26};
            var rampartArea3 = {x1: 4, y1: 32, x2: 4, y2: 38};
            var rampartArea4 = {x1: 3, y1: 33, x2: 7, y2: 33};
            var rampartArea5 = {x1: 3, y1: 32, x2: 3, y2: 32};
            var rampartArea6 = {x1: 19, y1: 24, x2: 32, y2: 37};
            rampartAreas.push(rampartArea1);
            rampartAreas.push(rampartArea2);
            rampartAreas.push(rampartArea3);
            rampartAreas.push(rampartArea4);
            rampartAreas.push(rampartArea5);
            rampartAreas.push(rampartArea6);
            this.placeRampartFromArea(roomName, rampartAreas);
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


        var roomToWorkName3 = "E51N18";
        var roomToWorkX3 = 19;
        var roomToWorkY3 = 3;

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
            c.memory.roomToWorkName == roomToWorkName3);

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

        var controllerAttacker = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'controllerAttacker');

        var dismantalist = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'dismantalist');

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
                        } else if (localMadeAttackerLogic < 0) {
                            var memory = "{role: 'attackerLogic', working: false, origination: '" + roomName + "'" +
                                "roomToInvestigateName0 : \"E57N15\", roomToInvestigateX0: 26, roomToInvestigateY0: 47," +
                                "roomToInvestigateName1 : \"E57N13\", roomToInvestigateX1: 16, roomToInvestigateY1: 3" +
                                "}";
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

                var pureMinerLevel = 6;
                var pureMinerBoost = false;
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
                    upgraderLevel = 5;
                    pureMinerXUH02 = 420;
                }

                //Pure miner upgrade resources calc
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
                    var memory = "{role: 'pureMiner', working: false, origination: '" + roomName + "'" +
                        ", needBoost: " + pureMinerBoost +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + pureMinerLevel + "(\"pureMiner\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeCourierMine < localMadePureMiners) {
                    var memory = "{role: 'courierMine', working: false, origination: '" + roomName + "'" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 5 + "(\"courier\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeCouriers < 3) {
                    var memory = "{role: 'courier', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"courier\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeBankirLogic < 1) {
                    var memory = "{role: 'bankirLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 4 + "(\"courier\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeUpgraders < localMadeUpgradersNeeded) {
                    var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + upgraderLevel + "(\"upgrader\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeAttackerLogic < 1) {
                    var memory = "{role: 'attackerLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"," +
                        "roomToInvestigateName0 : \"E51N18\", roomToInvestigateX0: 15, roomToInvestigateY0: 2," +
                        "roomToInvestigateName1 : \"E52N19\", roomToInvestigateX1: 10, roomToInvestigateY1: 39," +
                        "roomToInvestigateName2 : \"E52N18\", roomToInvestigateX2: 10, roomToInvestigateY2: 2" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 2 && controllerAttacker < 0) {
                    var memory = "{role: 'controllerAttacker', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                        "needBoost: true," +
                        "roomToWorkX1: " + 5 + "," +
                        "roomToWorkY1: " + 2 + "," +
                        "roomToWorkName1: \"" + "E51N18" + "\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"controllerAttacker\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeMedicLogic < 0) {
                    var memory = "{role: 'medicLogic', claim: true, working: false, origination: '" + roomName + "', arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
                        ", needBoost: true" +
                        ", arrived2: false, roomToWorkX1: 5, roomToWorkY1: 2,  roomToWorkName1: \"E51N18\"" +
                        // ", arrived3: false, roomToWorkX1: 5, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"medicLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (dismantalist < 0) {
                    var memory = "{role: 'dismantalist', claim: true, working: false, origination: '" + roomName + "', arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
                        ", needBoost: false" +
                        ", arrived2: false, roomToWorkX1: 15, roomToWorkY1: 5,  roomToWorkName1: \"E51N18\"" +
                        // ", arrived3: false, roomToWorkX1: 5, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreep\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeAttackerLogic < 1) {
                    var memory = "{role: 'attackerLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"," +
                        "roomToInvestigateName0 : \"E51N18\", roomToInvestigateX0: 15, roomToInvestigateY0: 2," +
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
                        "roomToWorkX: " + (roomToWorkX1 + 2) + ", roomToWorkY: " + (roomToWorkY1 + 1) + ",  " +
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
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreepOuter\"), memory)";
                    var createString = eval(constructorString);
                    var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic3 < 2) {
                    var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX3 + ", roomToWorkY: " + roomToWorkY3 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName3 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterCourierLogic3 < 3) {
                    var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 1, roomToBackY: 36," +
                        "roomToWorkX: " + (roomToWorkX3 + 1) + ", roomToWorkY: " + (roomToWorkY3 + 1) + ",  " +
                        "linkRoomName: \"" + roomName + "\", linkRoomX: 2" + ", linkRoomY: 36," +
                        "roomToWorkName: \"" + roomToWorkName3 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerCourierLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 2 && localMadeOuterReserverLogic3 < 1) {
                    var memory = "{role: 'outerClaimerLogic', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX3 + "," +
                        "roomToWorkY1: " + roomToWorkY3 + "," +
                        "roomToWorkName1: \"" + roomToWorkName3 + "\"," +
                        "}";
                    // "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                    // "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerClaimerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeBasicCreepsOuter3 < 1) {
                    var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + (roomToWorkX3 - 1) + "," +
                        "roomToWorkY1: " + roomToWorkY3 + "," +
                        "roomToWorkName1: \"" + roomToWorkName3 + "\"," +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreepOuter\"), memory)";
                    var createString = eval(constructorString);
                    var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
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

    }

    ,

    defendRoom: function (roomName, wallsLevel) {
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
    }
    ,

    placeRampart: function (roomName) {
        var rampartSites = Game.rooms[roomName].find(FIND_CONSTRUCTION_SITES, {filter: (cs) => cs.structureType == STRUCTURE_RAMPART});
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
                Game.rooms[roomName].createConstructionSite(structuresForRampart[0].pos, STRUCTURE_RAMPART);
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
                        Game.rooms[roomName].createConstructionSite(x, y, STRUCTURE_RAMPART);
                        break;
                    }
                }
            }
        }
    },

    placeRampartFromArea: function (roomName, rampartAreas) {
        var rampartSites = Game.rooms[roomName].find(FIND_CONSTRUCTION_SITES, {filter: (cs) => cs.structureType == STRUCTURE_RAMPART});
        if (rampartSites.length == 0) {
            outerLoop:
                for (i in rampartAreas) {
                    var rampartArea = rampartAreas[i];
                    for (let x = rampartArea['x1']; x <= rampartArea['x2']; x++) {
                        for (let y = rampartArea['y1']; y <= rampartArea['y2']; y++) {
                            var structuresForRampart = Game.rooms[roomName].find(FIND_STRUCTURES, {
                                filter: (s) => (s.structureType == STRUCTURE_RAMPART || s.structureType == STRUCTURE_CONTROLLER
                                    || s.structureType == STRUCTURE_EXTRACTOR || s.structureType == STRUCTURE_WALL) &&
                                    s.pos.x == x && s.pos.y == y
                            });
                            if (structuresForRampart.length == 0) {
                                var terrain = Game.map.getTerrainAt(x, y, roomName);
                                if (terrain != 'wall') {
                                    Game.rooms[roomName].createConstructionSite(x, y, STRUCTURE_RAMPART);
                                    break outerLoop;
                                }
                            }
                        }
                    }
                }
        }
    },

    createCreeps: function (roomName, allCreepsCount, gameTime, creepsData, creepsNeeded) {

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
        var localMadeKeeperKiller1 = allCreepsCount[roomName + ";keeperKiller1"];
        var localMadeKeeperKiller2 = allCreepsCount[roomName + ";keeperKiller2"];
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
        var localMadeKeeperKiller1Needed = creepsNeeded.get("keeperKiller1");
        var localMadeKeeperKiller2Needed = creepsNeeded.get("keeperKiller2");
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
        var localMadeBankirNeeded = creepsNeeded.get("bankir");
        var localMadeCourierMinerNeeded = creepsNeeded.get("courierMiner");
        var localMadeExaustersNeeded = creepsNeeded.get("exauster");

        var mines = Game.rooms[roomName].find(FIND_MINERALS);
        var mine = mines[0];

        var controllerLevel = Game.rooms[roomName].controller.level;

        var roomMemory = Game.rooms[roomName].memory;

        if (controllerLevel < 3) {
            roomMemory.haveExtractor = false;
        }

        var localMadePureMinersNeeded = 0;
        if (mine.mineralAmount > 0 && roomMemory.haveExtractor == true) {
            localMadePureMinersNeeded = 1;
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
        } else if (roomMemory.roomToWorkName2) {
            roomToWorkName2 = roomMemory.roomToWorkName2;
            roomToWorkX2 = roomMemory.roomToWorkX2;
            roomToWorkY2 = roomMemory.roomToWorkY2;
        } else if (roomMemory.roomToWorkName3) {
            roomToWorkName3 = roomMemory.roomToWorkName3;
            roomToWorkX3 = roomMemory.roomToWorkX3;
            roomToWorkY3 = roomMemory.roomToWorkY3;
        } else if (roomMemory.roomToWorkName4) {
            roomToWorkName4 = roomMemory.roomToWorkName4;
            roomToWorkX4 = roomMemory.roomToWorkX4;
            roomToWorkY4 = roomMemory.roomToWorkY4;
        } else if (roomMemory.roomToWorkName2) {
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

        if(!roomMemory.creepPotential){
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
                var pureMinerBoost = false;
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
                    upgraderLevel = 5;
                    pureMinerXUH02 = 420;
                }

                //Pure miner upgrade resources calc
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
                    controllerLevel1to6 = 6;
                }

                if (localMadeCreeps < 2) {
                    var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, CARRY, CARRY, MOVE, MOVE], " +
                        "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                    eval(createString);
                } else if (localMadeBasicCreeps < localMadeBasicCreepsNeeded) {
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
                } else if (controllerLevel >= 6 && localMadePureMiners < localMadePureMinersNeeded) {
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
                } else if (localMadeBankir < 1) {
                    var memory = "{role: 'bankir', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"}";
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
                } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic1 < localMadeOuterHarvesterLogic1Needed) {
                    var memory = "{role: 'outerHarvesterLogic1', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterCourierLogic1 < localMadeOuterCourierLogic1Needed) {
                    var memory = "{role: 'outerCourierLogic1', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 2, roomToBackY: 19," +
                        "roomToWorkX: " + (roomToWorkX1 - 2) + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                        "linkRoomName: \"" + roomName + "\", linkRoomX: 2" + ", linkRoomY: 18," +
                        "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 7 + "(\"outerCourierLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 2 && localMadeOuterReserver1 < localMadeOuterReserver1Needed) {
                    var memory = "{role: 'outerReserver1', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX1 + "," +
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
                } else if (localMadeBasicCreepsOuter1 < 1) {
                    var memory = "{role: 'basicCreepOuter1', working: false, origination: '" + roomName + "', arrived: false, " +
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
                    // var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic2 < 2) {
                    var memory = "{role: 'outerHarvesterLogic2', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterCourierLogic2 < 1) {
                    var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 4, roomToBackY: 1," +
                        "roomToWorkX: " + (roomToWorkX2 - 2) + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        "linkRoomName: \"" + roomName + "\", linkRoomX: 5" + ", linkRoomY: 2," +
                        "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 7 + "(\"outerCourierLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 2 && localMadeOuterReserver2 < 1) {
                    var memory = "{role: 'outerReserver2', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
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
                    var memory = "{role: 'basicCreepOuter2', working: false, origination: '" + roomName + "', arrived: false, " +
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
                    // var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic3 < 2) {
                    var memory = "{role: 'outerHarvesterLogic3', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX3 + ", roomToWorkY: " + roomToWorkY3 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName3 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to3 + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterCourierLogic3 < 1) {
                    var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 20, roomToBackY: 47," +
                        "roomToWorkX: " + (roomToWorkX3 - 2) + ", roomToWorkY: " + roomToWorkY3 + ",  " +
                        "linkRoomName: \"" + roomName + "\", linkRoomX: 21" + ", linkRoomY: 47," +
                        "roomToWorkName: \"" + roomToWorkName3 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 7 + "(\"outerCourierLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 2 && localMadeOuterReserver3 < 1) {
                    var memory = "{role: 'outerReserver3', working: false, origination: '" + roomName + "', arrived: false, " +
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
                } else if (localMadeBasicCreepsOuter3 < 1) {
                    var memory = "{role: 'basicCreepOuter2', working: false, origination: '" + roomName + "', arrived: false, " +
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
                    // var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                    eval(createString);
                } else if (controllerLevel > 2 && localMadeOuterReserver4 < 0) {
                    var memory = "{role: 'outerReserver4', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX4 + "," +
                        "roomToWorkY1: " + roomToWorkY4 + "," +
                        "roomToWorkName1: \"" + roomToWorkName4 + "\"," +
                        // "roomToWorkX2: 8," +
                        // "roomToWorkY2: 2," +
                        // "roomToWorkName2: \"E54N18\"" +
                        "}";
                    // "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                    // "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"outerClaimerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 2 && controllerAttacker1 < 1 && roomMemory.controllerAttacker1Needed == true) {
                    var memory = "{role: 'controllerAttacker1', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                        "needBoost: false," +
                        "roomToWorkX1: " + 2 + "," +
                        "roomToWorkY1: " + 30 + "," +
                        "roomToWorkName1: \"" + "E56N17" + "\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 5 + "(\"controllerAttacker\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                    roomMemory.controllerAttacker1Needed = false;
                } else if (controllerLevel > 2 && controllerAttacker2 < 1 && roomMemory.controllerAttacker2Needed == true) {
                    var memory = "{role: 'controllerAttacker2', claim: false, working: false, origination: '" + roomName + "', arrived: false, " +
                        "needBoost: true," +
                        "roomToWorkX1: " + 21 + "," +
                        "roomToWorkY1: " + 21 + "," +
                        "roomToWorkName1: \"" + "E55N13" + "\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 7 + "(\"controllerAttacker\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                    roomMemory.controllerAttacker2Needed = false;
                } else if (localMadeMedic1 < localMadeMedic1Needed) {
                    var memory = "{role: 'medic1', claim: true, working: false, origination: '" + roomName + "', arrived1: false " +
                        ", needBoost: true" +
                        ", roomToWorkX1: 3, roomToWorkY1: 30,  roomToWorkName1: \"E57N17\"" +
                        // ", roomToWorkX2: 34, roomToWorkY2: 10,  roomToWorkName2: \"E52N11\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"medicLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeMedic2 < 0) {
                    var memory = "{role: 'medic2', claim: true, working: false, origination: '" + roomName + "', arrived1: false " +
                        ", needBoost: true" +
                        ", arrived2: false, roomToWorkX1: 2, roomToWorkY1: 13,  roomToWorkName1: \"E57N14\"" +
                        // ", arrived3: false, roomToWorkX1: 5, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"medicLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeDismantilist1 < 0) {
                    var memory = "{role: 'dismantalist1', claim: true, working: false, origination: '" + roomName + "', arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
                        ", needBoost: true" +
                        ", arrived2: false, roomToWorkX1: 48, roomToWorkY1: 34,  roomToWorkName1: \"E52N15\"" +
                        // ", arrived3: false, roomToWorkX1: 5, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"dismantilist\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeBasicCreepsOuter6 < 0) {
                    var memory = "{role: 'basicCreepOuter6', working: false, origination: '" + roomName + "', arrived: false," +
                        "roomToWorkX1: 1," +
                        "roomToWorkY1: 32," +
                        "roomToWorkName1: \"E57N15\"," +
                        // "roomToWorkX2: 8," +
                        // "roomToWorkY2: 2," +
                        // "roomToWorkName2: \"E54N18\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 5 + "(\"basicCreepOuter\"), memory)";
                    var createString = eval(constructorString);
                    // var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeAttackerLogic1 < 1) {
                    var memory = "{role: 'attackerLogic1', claim: true, working: false, origination: '" + roomName + "', " +
                        "needBoost: false," +
                        "roomToInvestigateName0 : \"E53N17\", roomToInvestigateX0: 12, roomToInvestigateY0: 28" +
                        // "roomToInvestigateName0 : \"E57N11\", roomToInvestigateX0: 28, roomToInvestigateY0: 2" +
                        // ",roomToInvestigateName1 : \"E58N11\", roomToInvestigateX1: 2, roomToInvestigateY1: 8" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeAttackerLogic2 < 1) {
                    var memory = "{role: 'attackerLogic2', claim: true, working: false, origination: '" + roomName + "', " +
                        "needBoost: false," +
                        "roomToInvestigateName0 : \"E53N15\", roomToInvestigateX0: 16, roomToInvestigateY0: 6" +
                        // ",roomToInvestigateName0 : \"E52N15\", roomToInvestigateX0: 48, roomToInvestigateY0: 36" +
                        // ",roomToInvestigateName1 : \"E58N11\", roomToInvestigateX1: 2, roomToInvestigateY1: 8" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeAttackerLogic3 < 0) {
                    var memory = "{role: 'attackerLogic3', claim: true, working: false, origination: '" + roomName + "', " +
                        "needBoost: true," +
                        "roomToInvestigateName0 : \"E57N17\", roomToInvestigateX0: 5, roomToInvestigateY0: 30" +
                        // ",roomToInvestigateName0 : \"E52N15\", roomToInvestigateX0: 48, roomToInvestigateY0: 36" +
                        // ",roomToInvestigateName1 : \"E58N11\", roomToInvestigateX1: 2, roomToInvestigateY1: 8" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 4 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeDismantilist2 < 0) {
                    var memory = "{role: 'dismantalist2', claim: true, working: false, origination: '" + roomName + "', arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
                        ", needBoost: true" +
                        ", arrived2: false, roomToWorkX1: 7, roomToWorkY1: 30,  roomToWorkName1: \"E57N17\"" +
                        // ", arrived3: false, roomToWorkX1: 5, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"dismantilist\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeKeeperKiller1 < 0) {
                    var memory = "{role: 'keeperKiller1', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + (roomToWorkX5 + 3) + "," +
                        "roomToWorkY1: " + roomToWorkY5 + "," +
                        "roomToWorkName1: \"" + roomToWorkName5 + "\"," +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 7 + "(\"keeperKiller\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (controllerLevel > 1 && localMadeOuterHarvesterLogic5 < 3) {
                    var memory = "{role: 'outerHarvesterLogic5', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX5 + ", roomToWorkY: " + (roomToWorkY5 + 3) + ",  " +
                        "roomToWorkName: \"" + roomToWorkName5 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 4 + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeOuterCourierLogic5 < 2) {
                    var memory = "{role: 'outerCourierLogic3', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 46, roomToBackY: 30," +
                        "roomToWorkX: " + roomToWorkX5 + ", roomToWorkY: " + roomToWorkY5 + ",  " +
                        "linkRoomName: \"" + roomName + "\", linkRoomX: 47" + ", linkRoomY: 30," +
                        "roomToWorkName: \"" + roomToWorkName5 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"outerCourierLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeBasicCreepsOuter5 < 2) {
                    var memory = "{role: 'basicCreepOuter3', working: false, origination: '" + roomName + "', arrived: false, " +
                        "roomToWorkX1: " + roomToWorkX5 + "," +
                        "roomToWorkY1: " + (roomToWorkY5 - 2) + "," +
                        "roomToWorkName1: \"" + roomToWorkName5 + "\"," +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel1to4 + "(\"basicCreepOuter\"), memory)";
                    var createString = eval(constructorString);
                    var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
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
                    // var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                    eval(createString);
                } else if (localMadeSieger < 0) {
                    var memory = "{role: 'siegerLogic', claim: true, working: false, origination: '" + roomName + "', arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
                        ", arrived2: false, roomToWorkX1: 39, roomToWorkY1: 3,  roomToWorkName1: \"W30S50\"" +
                        ", arrived3: false, roomToWorkX1: 3, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 6 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                }
            } else {

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
                            var memory = "{role: 'pureHarvester', working: false, origination: '" + roomName + "'}";
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
                            var memory = "{role: 'outerCourier1', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: " + 2 + ", " +
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
                            var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: " + 6 + ", " +
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
                        if (localMadeBasicCreeps < localMadeBasicCreepsNeeded) {
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
                        } else if (localMadeOuterCourierLogic < 2) {
                            var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: " + 2 + ", " +
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
            }
        }
    }
}
;

