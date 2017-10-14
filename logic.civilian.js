var creepTemplates = require('creep.templates');
var creepCreate = require('creep.create');
var market = require('market');
var defendRoom = require('defend.rooms');

module.exports = {

    runMyRooms: function (allCreepsCount, gameTime, allReservesCount) {

        this.E53N16(allCreepsCount, gameTime, allReservesCount);
        this.E57N15(allCreepsCount, gameTime, allReservesCount);
        this.E52N19(allCreepsCount, gameTime, allReservesCount);
        this.E56N17(allCreepsCount, gameTime, allReservesCount);
        this.E55N13(allCreepsCount, gameTime, allReservesCount);

    },

    E53N16: function (allCreepsCount, gameTime, allReservesCount) {


        var roomName = "E53N16";

        var roomMemory = Game.rooms[roomName].memory;

        var controllerLevel = Game.rooms[roomName].controller.level;

        if (controllerLevel >= 4 && gameTime.substring(gameTime.length - 2, gameTime.length) == '00') {
            defendRoom.placeRampartForStructure(roomName);
            defendRoom.placeRampartForController(roomName);
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
            if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_CATALYST] == undefined
                    || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_CATALYST] < lemergiumAlkalideReserve))) {
                market.buy(roomName, RESOURCE_CATALYST, 500, 1.5);
            }
            else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_GHODIUM_ALKALIDE] == undefined
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

            defendRoom.placeRampartFromArea(roomName, rampartAreas);
        }


        let creepsNeeded = new Map();

        creepsNeeded.set("basicCreep", 2);
        creepsNeeded.set("pureHarvester", 1);
        creepsNeeded.set("pureMiner", 0);
        creepsNeeded.set("courier", 1);
        creepsNeeded.set("upgrader", 1);
        creepsNeeded.set("basicCreepOuter1", 1);
        creepsNeeded.set("basicCreepOuter2", 1);
        creepsNeeded.set("basicCreepOuter3", 1);
        creepsNeeded.set("basicCreepOuter4", 0);
        creepsNeeded.set("basicCreepOuter5", 0);
        creepsNeeded.set("basicCreepOuter6", 0);
        creepsNeeded.set("outerHarvesterLogic", 0);
        creepsNeeded.set("outerHarvesterLogic1", 2);
        creepsNeeded.set("outerHarvesterLogic2", 2);
        creepsNeeded.set("outerHarvesterLogic3", 0);
        creepsNeeded.set("outerHarvesterLogic4", 0);
        creepsNeeded.set("outerHarvesterLogic5", 0);
        creepsNeeded.set("outerCourierLogic1", 1);
        creepsNeeded.set("outerCourierLogic2", 1);
        creepsNeeded.set("outerCourierLogic3", 1);
        creepsNeeded.set("outerCourierLogic4", 0);
        creepsNeeded.set("outerCourierLogic5", 0);
        creepsNeeded.set("attackerLogic1", 1);
        creepsNeeded.set("attackerLogic2", 1);
        creepsNeeded.set("attackerLogic3", 0);
        creepsNeeded.set("attackerLogic4", 0);
        creepsNeeded.set("attackerLogic5", 0);
        creepsNeeded.set("rangedAttacker1", 0);
        creepsNeeded.set("keeperKiller1", 0);
        creepsNeeded.set("keeperKiller2", 0);
        creepsNeeded.set("keeperKiller3", 0);
        creepsNeeded.set("keeperKiller4", 0);
        creepsNeeded.set("keeperKiller5", 0);
        creepsNeeded.set("controllerAttacker1", 0);
        creepsNeeded.set("controllerAttacker2", 0);
        creepsNeeded.set("outerReserver1", 1);
        creepsNeeded.set("outerReserver2", 1);
        creepsNeeded.set("outerReserver3", 1);
        creepsNeeded.set("outerReserver4", 0);
        creepsNeeded.set("outerReserver5", 0);
        creepsNeeded.set("dismantilist1", 0);
        creepsNeeded.set("dismantilist2", 0);
        creepsNeeded.set("medic1", 0);
        creepsNeeded.set("medic2", 0);
        creepsNeeded.set("sieger", 0);
        creepsNeeded.set("bankir", 1);
        creepsNeeded.set("courierMiner", 0);
        creepsNeeded.set("exauster", 0);

        let creepsData = new Map();

        creepsData.set("attacker1", "needBoost: false," +
            "roomToInvestigateName0 : \"E53N17\", roomToInvestigateX0: 12, roomToInvestigateY0: 28" // ",roomToInvestigateName0 : \"E57N11\", roomToInvestigateX0: 28, roomToInvestigateY0: 2" +
        );

        creepsData.set("attacker2", "needBoost: false," +
            "roomToInvestigateName0 : \"E53N15\", roomToInvestigateX0: 16, roomToInvestigateY0: 9" +
            ",roomToInvestigateName1 : \"E52N15\", roomToInvestigateX1: 47, roomToInvestigateY1: 27"
        );

        creepsData.set("attacker3", "needBoost: false," +
            "roomToInvestigateName0 : \"E56N19\", roomToInvestigateX0: 30, roomToInvestigateY0: 45" // ",roomToInvestigateName1 : \"E53N14\", roomToInvestigateX1: 14, roomToInvestigateY1: 23" +
        );

        creepsData.set("outerCourier1",
            "roomToBackX: 2, roomToBackY: 19, linkRoomX: 2, linkRoomY: 18, "
        );

        creepsData.set("outerCourier2",
            "roomToBackX: 4, roomToBackY: 1, linkRoomX: 5, linkRoomY: 2, "
        );

        creepsData.set("outerCourier3",
            "roomToBackX: 20, roomToBackY: 47, linkRoomX: 21, linkRoomY: 47, "
        );

        creepsData.set("controllerAttacker1", "needBoost: false," +
            "roomToWorkX1: " + 14 + ", roomToWorkY1: " + 45 + ", roomToWorkName1: \"" + "E56N18" + "\""
        );

        creepsData.set("controllerAttacker2", "needBoost: false," +
            "roomToWorkX1: " + 30 + ", roomToWorkY1: " + 45 + ", roomToWorkName1: \"" + "E56N19" + "\""
        );

        creepsData.set("medic1", "needBoost: true," +
            "roomToWorkX1: " + 30 + ", roomToWorkY1: " + 46 + ", roomToWorkName1: \"" + "E56N19" + "\""
        );

        creepsData.set("medic2", "needBoost: false," +
            "roomToWorkX1: " + 35 + ", roomToWorkY1: " + 4 + ", roomToWorkName1: \"" + "E55N13" + "\""
        );

        creepsData.set("dismantalist1", "needBoost: true," +
            "roomToWorkX1: " + 48 + ", roomToWorkY1: " + 34 + ", roomToWorkName1: \"" + "E52N15" + "\""
        );

        creepsData.set("dismantalist2", "needBoost: true," +
            "roomToWorkX1: " + 48 + ", roomToWorkY1: " + 34 + ", roomToWorkName1: \"" + "E52N15" + "\""
        );

        creepsData.set("basicCreepOuter6",
            "roomToWorkX1: 35, roomToWorkY1: 2, roomToWorkName1: \"E55N13\"," // "roomToWorkX1: 35, roomToWorkY1: 2, roomToWorkName1: \"E55N13\""
        );

        creepsData.set("siegerLogic",
            " arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
            ", arrived2: false, roomToWorkX1: 39, roomToWorkY1: 3,  roomToWorkName1: \"W30S50\"" +
            ", arrived3: false, roomToWorkX1: 3, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\""
        );

        creepCreate.create(roomName, allCreepsCount, gameTime, creepsData, creepsNeeded, allReservesCount);

    },

    E57N15:

        function (allCreepsCount, gameTime, allReservesCount) {


            var roomName = "E57N15";

            var controllerLevel = Game.rooms[roomName].controller.level;

            var roomMemory = Game.rooms[roomName].memory;

            var terminal = Game.rooms[roomName].terminal;

            var lemergiumAlkalideReserve = allReservesCount[roomName + ";" + RESOURCE_LEMERGIUM_ALKALIDE];

            var lemergiumAlkalideReserveNeeded = 2000;

            if (terminal && Game.market.credits >= 5000) {
                if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_CATALYST] == undefined
                        || (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] != undefined && terminal.store[RESOURCE_CATALYST] < lemergiumAlkalideReserve))) {
                    market.buy(roomName, RESOURCE_CATALYST, 500, 1.5);
                }
                else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_GHODIUM_ALKALIDE] == undefined
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

                else if (terminal.store[RESOURCE_ENERGY] >= 100 && (terminal.store[RESOURCE_LEMERGIUM_ALKALIDE] == undefined
                        || lemergiumAlkalideReserve < lemergiumAlkalideReserveNeeded)) {
                    market.buy(roomName, RESOURCE_LEMERGIUM_ALKALIDE, 500, 3.0);
                }
            }

            if (terminal && Game.market.credits < 5000) {
                if (terminal.store[RESOURCE_KEANIUM] >= 500 && terminal.store[RESOURCE_ENERGY] > 500) {
                    market.sell(roomName, RESOURCE_KEANIUM, 500, 0.85);
                }
            }

            var gameTime = Game.time.toString();

            if (controllerLevel >= 4 && gameTime.substring(gameTime.length - 1, gameTime.length) == '0') {
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
                defendRoom.placeRampartFromArea(roomName, rampartAreas);
            }

            if (gameTime.substring(gameTime.length - 2, gameTime.length) == '00') {
                roomMemory.roomToWorkName1 = "E57N14";
                roomMemory.roomToWorkX1 = 25;
                roomMemory.roomToWorkY1 = 1;

                roomMemory.roomToWorkName2 = "E57N13";
                roomMemory.roomToWorkX2 = 16;
                roomMemory.roomToWorkY2 = 5;

                roomMemory.roomToWorkName3 = "E54N17";
                roomMemory.roomToWorkX3 = 28;
                roomMemory.roomToWorkY3 = 2;
            }

            var localMadeUpgradersNeeded = 1;
            if (controllerLevel < 8) {
                if (allReservesCount[roomName + ";" + RESOURCE_ENERGY] > 200000) {
                    localMadeUpgradersNeeded += 2;
                } else if (allReservesCount[roomName + ";" + RESOURCE_ENERGY] > 100000) {
                    localMadeUpgradersNeeded += 1;
                }
            }

            var localMadePureMinersNeeded = 0;
            if (controllerLevel >= 6) {
                localMadePureMinersNeeded = 1;
            }

            let creepsNeeded = new Map();

            creepsNeeded.set("basicCreep", 2);
            creepsNeeded.set("pureHarvester", 2);
            creepsNeeded.set("pureMiner", localMadePureMinersNeeded);
            creepsNeeded.set("courier", 3);
            creepsNeeded.set("upgrader", localMadeUpgradersNeeded);
            creepsNeeded.set("basicCreepOuter1", 2);
            creepsNeeded.set("basicCreepOuter2", 1);
            creepsNeeded.set("basicCreepOuter3", 0);
            creepsNeeded.set("basicCreepOuter4", 0);
            creepsNeeded.set("basicCreepOuter5", 0);
            creepsNeeded.set("basicCreepOuter6", 0);
            creepsNeeded.set("outerHarvesterLogic", 0);
            creepsNeeded.set("outerHarvesterLogic1", 2);
            creepsNeeded.set("outerHarvesterLogic2", 2);
            creepsNeeded.set("outerHarvesterLogic3", 0);
            creepsNeeded.set("outerHarvesterLogic4", 0);
            creepsNeeded.set("outerHarvesterLogic5", 0);
            creepsNeeded.set("outerCourierLogic1", 1);
            creepsNeeded.set("outerCourierLogic2", 2);
            creepsNeeded.set("outerCourierLogic3", 0);
            creepsNeeded.set("outerCourierLogic4", 0);
            creepsNeeded.set("outerCourierLogic5", 0);
            creepsNeeded.set("attackerLogic1", 0);
            creepsNeeded.set("attackerLogic2", 0);
            creepsNeeded.set("attackerLogic3", 0);
            creepsNeeded.set("attackerLogic4", 0);
            creepsNeeded.set("attackerLogic5", 0);
            creepsNeeded.set("keeperKiller1", 0);
            creepsNeeded.set("keeperKiller2", 0);
            creepsNeeded.set("keeperKiller3", 0);
            creepsNeeded.set("keeperKiller4", 0);
            creepsNeeded.set("keeperKiller5", 0);
            creepsNeeded.set("controllerAttacker1", 0);
            creepsNeeded.set("controllerAttacker2", 0);
            creepsNeeded.set("outerReserver1", 1);
            creepsNeeded.set("outerReserver2", 1);
            creepsNeeded.set("outerReserver3", 0);
            creepsNeeded.set("outerReserver4", 0);
            creepsNeeded.set("outerReserver5", 0);
            creepsNeeded.set("dismantilist1", 0);
            creepsNeeded.set("dismantilist2", 0);
            creepsNeeded.set("medic1", 0);
            creepsNeeded.set("medic2", 0);
            creepsNeeded.set("sieger", 0);
            creepsNeeded.set("bankir", 1);
            creepsNeeded.set("courierMiner", 0);
            creepsNeeded.set("exauster", 0);

            let creepsData = new Map();

            creepsData.set("attacker1", "needBoost: false," +
                "roomToInvestigateName0 : \"E57N14\", roomToInvestigateX0: 16, roomToInvestigateY0: 46," +
                "roomToInvestigateName1 : \"E57N13\", roomToInvestigateX1: 16, roomToInvestigateY1: 3"
            );

            creepsData.set("outerCourier1",
                "roomToBackX: 26, roomToBackY: 47, linkRoomX: 27, linkRoomY: 47, "
            );

            creepsData.set("outerCourier2",
                "roomToBackX: 28, roomToBackY: 47, linkRoomX: 27, linkRoomY: 47, "
            );

            creepsData.set("outerCourier3",
                "roomToBackX: 20, roomToBackY: 47, linkRoomX: 21, linkRoomY: 47, "
            );

            creepsData.set("controllerAttacker1", "needBoost: false," +
                "roomToWorkX1: " + 27 + ", roomToWorkY1: " + 45 + ", roomToWorkName1: \"" + "E56N19" + "\""
            );

            creepsData.set("controllerAttacker2", "needBoost: false," +
                "roomToWorkX1: " + 27 + ", roomToWorkY1: " + 45 + ", roomToWorkName1: \"" + "E56N19" + "\""
            );

            creepCreate.create(roomName, allCreepsCount, gameTime, creepsData, creepsNeeded, allReservesCount);

        },

    E52N19: function (allCreepsCount, gameTime, allReservesCount) {

        var betterRoomName = "W33N23";

        var roomName = "E52N19";

        var controllerLevel = Game.rooms[roomName].controller.level;

        var roomMemory = Game.rooms[roomName].memory;

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

        if (terminal && Game.market.credits < 5000) {
            if (terminal.store[RESOURCE_OXYGEN] >= 500 && terminal.store[RESOURCE_ENERGY] > 500) {
                market.sell(roomName, RESOURCE_OXYGEN, 500, 0.6);
            }
        }

        var gameTime = Game.time.toString();

        if (controllerLevel >= 4 && gameTime.substring(gameTime.length - 1, gameTime.length) == '0') {
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
            defendRoom.placeRampartFromArea(roomName, rampartAreas);
        }

        if (gameTime.substring(gameTime.length - 2, gameTime.length) == '00') {
            roomMemory.roomToWorkName1 = "E51N19";
            roomMemory.roomToWorkX1 = 45;
            roomMemory.roomToWorkY1 = 41;

            roomMemory.roomToWorkName2 = "E52N18";
            roomMemory.roomToWorkX2 = 12;
            roomMemory.roomToWorkY2 = 2;

            roomMemory.roomToWorkName3 = "E51N18";
            roomMemory.roomToWorkX3 = 19;
            roomMemory.roomToWorkY3 = 3;
        }

        var localMadeUpgradersNeeded = 1;
        if (controllerLevel < 8) {
            if (allReservesCount[roomName + ";" + RESOURCE_ENERGY] > 200000) {
                localMadeUpgradersNeeded += 2;
            } else if (allReservesCount[roomName + ";" + RESOURCE_ENERGY] > 100000) {
                localMadeUpgradersNeeded += 1;
            }
        }

        var localMadePureMinersNeeded = 0;
        if (controllerLevel >= 6) {
            localMadePureMinersNeeded = 1;
        }

        let creepsNeeded = new Map();

        creepsNeeded.set("basicCreep", 2);
        creepsNeeded.set("pureHarvester", 2);
        creepsNeeded.set("pureMiner", localMadePureMinersNeeded);
        creepsNeeded.set("courier", 3);
        creepsNeeded.set("upgrader", localMadeUpgradersNeeded);
        creepsNeeded.set("basicCreepOuter1", 2);
        creepsNeeded.set("basicCreepOuter2", 1);
        creepsNeeded.set("basicCreepOuter3", 0);
        creepsNeeded.set("basicCreepOuter4", 0);
        creepsNeeded.set("basicCreepOuter5", 0);
        creepsNeeded.set("basicCreepOuter6", 0);
        creepsNeeded.set("outerHarvesterLogic", 0);
        creepsNeeded.set("outerHarvesterLogic1", 2);
        creepsNeeded.set("outerHarvesterLogic2", 1);
        creepsNeeded.set("outerHarvesterLogic3", 2);
        creepsNeeded.set("outerHarvesterLogic4", 0);
        creepsNeeded.set("outerHarvesterLogic5", 0);
        creepsNeeded.set("outerCourierLogic1", 1);
        creepsNeeded.set("outerCourierLogic2", 1);
        creepsNeeded.set("outerCourierLogic3", 2);
        creepsNeeded.set("outerCourierLogic4", 0);
        creepsNeeded.set("outerCourierLogic5", 0);
        creepsNeeded.set("attackerLogic1", 1);
        creepsNeeded.set("attackerLogic2", 0);
        creepsNeeded.set("attackerLogic3", 0);
        creepsNeeded.set("attackerLogic4", 0);
        creepsNeeded.set("attackerLogic5", 0);
        creepsNeeded.set("rangedAttacker1", 0);
        creepsNeeded.set("keeperKiller1", 0);
        creepsNeeded.set("keeperKiller2", 0);
        creepsNeeded.set("keeperKiller3", 0);
        creepsNeeded.set("keeperKiller4", 0);
        creepsNeeded.set("keeperKiller5", 0);
        creepsNeeded.set("controllerAttacker1", 0);
        creepsNeeded.set("controllerAttacker2", 0);
        creepsNeeded.set("outerReserver1", 1);
        creepsNeeded.set("outerReserver2", 1);
        creepsNeeded.set("outerReserver3", 1);
        creepsNeeded.set("outerReserver4", 0);
        creepsNeeded.set("outerReserver5", 0);
        creepsNeeded.set("dismantilist1", 0);
        creepsNeeded.set("dismantilist2", 0);
        creepsNeeded.set("medic1", 0);
        creepsNeeded.set("medic2", 0);
        creepsNeeded.set("sieger", 0);
        creepsNeeded.set("bankir", 1);
        creepsNeeded.set("courierMiner", 0);
        creepsNeeded.set("exauster", 0);

        let creepsData = new Map();

        creepsData.set("attacker1", "needBoost: false," +
            "roomToInvestigateName0 : \"E51N18\", roomToInvestigateX0: 15, roomToInvestigateY0: 2," +
            "roomToInvestigateName1 : \"E52N19\", roomToInvestigateX1: 10, roomToInvestigateY1: 39," +
            "roomToInvestigateName2 : \"E52N18\", roomToInvestigateX2: 10, roomToInvestigateY2: 2"
        );

        creepsData.set("attacker2", "needBoost: false," +
            "roomToInvestigateName0 : \"E52N20\", roomToInvestigateX0: 18, roomToInvestigateY0: 36,"
        );

        creepsData.set("rangedAttacker1", "needBoost: false," +
            "roomToInvestigateName0 : \"E52N20\", roomToInvestigateX0: 13, roomToInvestigateY0: 36,"
        );

        creepsData.set("outerCourier1",
            "roomToBackX: 2, roomToBackY: 35, linkRoomX: 2, linkRoomY: 36, "
        );

        creepsData.set("outerCourier2",
            "roomToBackX: 10, roomToBackY: 48, linkRoomX: 13, linkRoomY: 47, "
        );

        creepsData.set("outerCourier3",
            "roomToBackX: 2, roomToBackY: 39, linkRoomX: 2, linkRoomY: 38, "
        );

        creepsData.set("controllerAttacker1", "needBoost: false," +
            "roomToWorkX1: " + 27 + ", roomToWorkY1: " + 45 + ", roomToWorkName1: \"" + "E56N19" + "\""
        );

        creepsData.set("controllerAttacker2", "needBoost: false," +
            "roomToWorkX1: " + 21 + ", roomToWorkY1: " + 21 + ", roomToWorkName1: \"" + "E55N13" + "\""
        );

        creepCreate.create(roomName, allCreepsCount, gameTime, creepsData, creepsNeeded, allReservesCount);

    },

    E56N17:

        function (allCreepsCount, gameTime, allReservesCount) {

            // var startCpu = Game.cpu.getUsed();

            var betterRoomName = "W33N23";

            var roomName = "E56N17";

            var controllerLevel = Game.rooms[roomName].controller.level;

            var roomMemory = Game.rooms[roomName].memory;

            var terminals = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TERMINAL});
            var terminal;
            if (terminals.length > 0) {
                terminal = terminals[0];
            }

            if (terminal && Game.market.credits < 5000) {
                if (terminal.store[RESOURCE_HYDROGEN] >= 500 && terminal.store[RESOURCE_ENERGY] > 500) {
                    market.sell(roomName, RESOURCE_HYDROGEN, 500, 0.9);
                }
            }

            var gameTime = Game.time.toString();

            if (controllerLevel >= 4 && gameTime.substring(gameTime.length - 1, gameTime.length) == '0') {
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
                // defendRoom.placeRampartFromArea(roomName, rampartAreas);
            }

            var gameTime = Game.time.toString();

            if (controllerLevel >= 4 && gameTime.substring(gameTime.length - 1, gameTime.length) == '0') {
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
                // defendRoom.placeRampartFromArea(roomName, rampartAreas);
            }

            if (gameTime.substring(gameTime.length - 2, gameTime.length) == '00') {
                roomMemory.roomToWorkName1 = "E56N18";
                roomMemory.roomToWorkX1 = 15;
                roomMemory.roomToWorkY1 = 47;

                roomMemory.roomToWorkName2 = "E55N17";
                roomMemory.roomToWorkX2 = 47;
                roomMemory.roomToWorkY2 = 30;

                roomMemory.roomToWorkName3 = "E57N17";
                roomMemory.roomToWorkX3 = 2;
                roomMemory.roomToWorkY3 = 31;

                roomMemory.roomToWorkName4 = "E56N19";
                roomMemory.roomToWorkX4 = 30;
                roomMemory.roomToWorkY4 = 47;

                roomMemory.roomToWorkName5 = "E55N14";
                roomMemory.roomToWorkX5 = 2;
                roomMemory.roomToWorkY5 = 43;

            }

            let creepsNeeded = new Map();

            creepsNeeded.set("basicCreep", 2);
            creepsNeeded.set("pureHarvester", 2);
            creepsNeeded.set("pureMiner", 1);
            creepsNeeded.set("courier", 3);
            creepsNeeded.set("upgrader", 1);
            creepsNeeded.set("basicCreepOuter1", 1);
            creepsNeeded.set("basicCreepOuter2", 1);
            creepsNeeded.set("basicCreepOuter3", 1);
            creepsNeeded.set("basicCreepOuter4", 0);
            creepsNeeded.set("basicCreepOuter5", 0);
            creepsNeeded.set("basicCreepOuter6", 0);
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
            creepsNeeded.set("attackerLogic4", 0);
            creepsNeeded.set("attackerLogic5", 0);
            creepsNeeded.set("keeperKiller1", 0);
            creepsNeeded.set("keeperKiller2", 0);
            creepsNeeded.set("keeperKiller3", 0);
            creepsNeeded.set("keeperKiller4", 0);
            creepsNeeded.set("keeperKiller5", 0);
            creepsNeeded.set("controllerAttacker1", 0);
            creepsNeeded.set("controllerAttacker2", 0);
            creepsNeeded.set("outerReserver1", 1);
            creepsNeeded.set("outerReserver2", 1);
            creepsNeeded.set("outerReserver3", 1);
            creepsNeeded.set("outerReserver4", 0);
            creepsNeeded.set("outerReserver5", 0);
            creepsNeeded.set("dismantilist1", 0);
            creepsNeeded.set("dismantilist2", 0);
            creepsNeeded.set("medic1", 0);
            creepsNeeded.set("medic2", 0);
            creepsNeeded.set("sieger", 0);
            creepsNeeded.set("bankir", 1);
            creepsNeeded.set("courierMiner", 0);
            creepsNeeded.set("exauster", 0);

            let creepsData = new Map();

            creepsData.set("attacker1", "needBoost: false," +
                "roomToInvestigateName0 : \"E56N13\", roomToInvestigateX0: 5, roomToInvestigateY0: 15," +
                "roomToInvestigateName1 : \"E55N12\", roomToInvestigateX1: 35, roomToInvestigateY1: 2" +
                "roomToInvestigateName2 : \"E55N12\", roomToInvestigateX2: 48, roomToInvestigateY2: 13"
            );

            creepsData.set("outerCourier1",
                "roomToBackX: 47, roomToBackY: 15, linkRoomX: 27, linkRoomY: 47, "
            );

            creepsData.set("outerCourier2",
                "roomToBackX: 36, roomToBackY: 47, linkRoomX: 27, linkRoomY: 47, "
            );

            creepsData.set("outerCourier3",
                "roomToBackX: 2, roomToBackY: 11, linkRoomX: 21, linkRoomY: 47, "
            );

            creepsData.set("controllerAttacker1", "needBoost: false," +
                "roomToWorkX1: " + 27 + ", roomToWorkY1: " + 45 + ", roomToWorkName1: \"" + "E56N19" + "\""
            );

            creepsData.set("controllerAttacker2", "needBoost: false," +
                "roomToWorkX1: " + 21 + ", roomToWorkY1: " + 21 + ", roomToWorkName1: \"" + "E55N13" + "\""
            );

            creepCreate.create(roomName, allCreepsCount, gameTime, creepsData, creepsNeeded, allReservesCount);
        },

    E55N13:

        function (allCreepsCount, gameTime, allReservesCount) {

            var roomName = "E55N13";

            var controllerLevel = Game.rooms[roomName].controller.level;

            var roomMemory = Game.rooms[roomName].memory;

            var terminal = Game.rooms[roomName].terminal;

            if (terminal && Game.market.credits < 5000) {
                if (terminal.store[RESOURCE_KEANIUM] >= 500 && terminal.store[RESOURCE_ENERGY] > 500) {
                    market.sell(roomName, RESOURCE_KEANIUM, 500, 0.85);
                }
            }

            var gameTime = Game.time.toString();

            if (controllerLevel >= 4 && gameTime.substring(gameTime.length - 1, gameTime.length) == '0') {
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
                // defendRoom.placeRampartFromArea(roomName, rampartAreas);
            }

            if (gameTime.substring(gameTime.length - 2, gameTime.length) == '00') {
                roomMemory.roomToWorkName1 = "E56N13";
                roomMemory.roomToWorkX1 = 3;
                roomMemory.roomToWorkY1 = 14;

                roomMemory.roomToWorkName2 = "E55N12";
                roomMemory.roomToWorkX2 = 36;
                roomMemory.roomToWorkY2 = 2;

                roomMemory.roomToWorkName3 = "E54N13";
                roomMemory.roomToWorkX3 = 47;
                roomMemory.roomToWorkY3 = 11;

                roomMemory.roomToWorkName4 = "E54N14";
                roomMemory.roomToWorkX4 = 40;
                roomMemory.roomToWorkY4 = 47;

                roomMemory.roomToWorkName5 = "E55N14";
                roomMemory.roomToWorkX5 = 2;
                roomMemory.roomToWorkY5 = 43;

            }

            let creepsNeeded = new Map();

            creepsNeeded.set("basicCreep", 2);
            creepsNeeded.set("pureHarvester", 2);
            creepsNeeded.set("pureMiner", 1);
            creepsNeeded.set("courier", 3);
            creepsNeeded.set("upgrader", 1);
            creepsNeeded.set("basicCreepOuter1", 1);
            creepsNeeded.set("basicCreepOuter2", 1);
            creepsNeeded.set("basicCreepOuter3", 1);
            creepsNeeded.set("basicCreepOuter4", 0);
            creepsNeeded.set("basicCreepOuter5", 0);
            creepsNeeded.set("basicCreepOuter6", 0);
            creepsNeeded.set("outerHarvesterLogic1", 2);
            creepsNeeded.set("outerHarvesterLogic2", 1);
            creepsNeeded.set("outerHarvesterLogic3", 1);
            creepsNeeded.set("outerHarvesterLogic4", 0);
            creepsNeeded.set("outerHarvesterLogic5", 0);
            creepsNeeded.set("outerCourierLogic1", 2);
            creepsNeeded.set("outerCourierLogic2", 1);
            creepsNeeded.set("outerCourierLogic3", 1);
            creepsNeeded.set("outerCourierLogic4", 0);
            creepsNeeded.set("outerCourierLogic5", 0);
            creepsNeeded.set("attackerLogic1", 1);
            creepsNeeded.set("attackerLogic2", 0);
            creepsNeeded.set("attackerLogic3", 0);
            creepsNeeded.set("attackerLogic4", 0);
            creepsNeeded.set("attackerLogic5", 0);
            creepsNeeded.set("keeperKiller1", 0);
            creepsNeeded.set("keeperKiller2", 0);
            creepsNeeded.set("keeperKiller3", 0);
            creepsNeeded.set("keeperKiller4", 0);
            creepsNeeded.set("keeperKiller5", 0);
            creepsNeeded.set("controllerAttacker1", 0);
            creepsNeeded.set("controllerAttacker2", 0);
            creepsNeeded.set("outerReserver1", 1);
            creepsNeeded.set("outerReserver2", 1);
            creepsNeeded.set("outerReserver3", 1);
            creepsNeeded.set("outerReserver4", 0);
            creepsNeeded.set("outerReserver5", 0);
            creepsNeeded.set("dismantilist1", 0);
            creepsNeeded.set("dismantilist2", 0);
            creepsNeeded.set("medic1", 0);
            creepsNeeded.set("medic2", 0);
            creepsNeeded.set("sieger", 0);
            creepsNeeded.set("bankir", 1);
            creepsNeeded.set("courierMiner", 0);
            creepsNeeded.set("exauster", 0);

            let creepsData = new Map();

            creepsData.set("attacker1", "needBoost: false," +
                "roomToInvestigateName0 : \"E56N13\", roomToInvestigateX0: 5, roomToInvestigateY0: 15"
                + ", roomToInvestigateName1 : \"E55N12\", roomToInvestigateX1: 35, roomToInvestigateY1: 2"
                + ", roomToInvestigateName2 : \"E55N12\", roomToInvestigateX2: 48, roomToInvestigateY2: 13"
            );

            creepsData.set("outerCourier1",
                "roomToBackX: 47, roomToBackY: 15, linkRoomX: 27, linkRoomY: 47, "
            );

            creepsData.set("outerCourier2",
                "roomToBackX: 36, roomToBackY: 47, linkRoomX: 27, linkRoomY: 47, "
            );

            creepsData.set("outerCourier3",
                "roomToBackX: 2, roomToBackY: 11, linkRoomX: 21, linkRoomY: 47, "
            );

            creepsData.set("controllerAttacker1", "needBoost: false," +
                "roomToWorkX1: " + 27 + ", roomToWorkY1: " + 45 + ", roomToWorkName1: \"" + "E56N19" + "\""
            );

            creepsData.set("controllerAttacker2", "needBoost: false," +
                "roomToWorkX1: " + 21 + ", roomToWorkY1: " + 21 + ", roomToWorkName1: \"" + "E55N13" + "\""
            );

            creepCreate.create(roomName, allCreepsCount, gameTime, creepsData, creepsNeeded, allReservesCount);

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
    }
}
;

