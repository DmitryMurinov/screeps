var creepTemplates = require('creep.templates');
var roomLogicCivilian = require('logic.civilian');


module.exports = {

    runMyRooms: function () {

        // this.roomW32N24();

        // this.W27S47();
        // this.W28S46();


    },

    W27S47: function () {

        var wallsLevel = 200000;

        var betterRoomName = "W33N23";

        var roomName = "W27S47";

        this.defendRoom(roomName);


        var basicCreepsNeeded = 3;

        /*
                var currentRoom;

                for (let name in Game.rooms) {
                    if (Game.rooms[name].name == roomName) {
                        currentRoom = Game.rooms[name];
                    }
                }

                console.log(currentRoom.controller.owner.username);
        */

        var roomToWorkName1 = "W26S47";
        var roomToWorkX1 = 3;
        var roomToWorkY1 = 15;

        var roomToWorkName2 = "W27S48";
        var roomToWorkX2 = 20;
        var roomToWorkY2 = 3;


        var roomToWorkName3 = "W28S49";
        var roomToWorkX3 = 35;
        var roomToWorkY3 = 5;

        // console.log("creeps with roomname W32N24: " + _.sum(Game.creeps, (c) => c.memory.roomName == roomName));

        // console.log("creeps in room W32N24: " + _.sum(Game.creeps, (c) => c.room.name == roomName));

        var localMadeCreeps = _.sum(Game.creeps, (c) => c.memory.origination == roomName);

        var localMadeBasicCreeps = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreep');

        var localMadePureHarvesters = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'pureHarvester');

        var localMadeCouriers = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'courier');

        var localMadeUpgraders = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'upgrader');

        var localMadeRefillersWar = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'refillerWar');



        // var harvestersFromBetterRoom = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'roleOuterHarvesterLogic');

        var localMadeBasicCreepsOuter = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' &&
            c.memory.roomToWorkName == roomToWorkName1);

        var localMadeBasicCreepsOuter2 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' &&
            c.memory.roomToWorkName == roomToWorkName2);

        var localMadeBasicCreepsOuter3 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' &&
            c.memory.roomToWorkName == "W27S46");

        var localMadeBasicCreepsOuter5 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' && c.memory.tribe == 5);

        var localMadeOuterHarvesterLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerHarvesterLogic' &&
            c.memory.roomToWorkName == roomToWorkName1);

        var localMadeOuterHarvesterLogic2 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerHarvesterLogic' &&
            c.memory.roomToWorkName == roomToWorkName2);

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

        var localMadeOuterClaimerLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerClaimerLogic' && c.memory.claim == true &&
            c.memory.roomToWorkName == roomToWorkName1);


        var localMadeAttackerLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'attackerLogic');

        var localMadeSiegerLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'siegerLogic');

        var localMadeMedicLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'medicLogic');

        var localMadePatrolLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'patrolLogic');

        // console.log("medics " + localMadeMedicLogic);


        var controllerLevel = Game.rooms[roomName].controller.level;

        // console.log(localMadeBasicCreepsOuter);
        // console.log("total localMadeOuterReserverLogic: " + localMadeOuterReserverLogic);

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

        if (localSpawns != undefined) {
            freeSpawn = localSpawns[0].pos.findClosestByRange(localSpawns.filter((s) => s.isActive() == true && s.spawning == null));
        }


        ////////////////////////////////////////
        if (controllerLevel >= 5) {
            controllerLevel = 5;
        }
        ////////////////////////////////////////


        var creepPotential = 0;

        creepPotential = 300 * _.sum(Game.spawns, (s) => s.room.name == roomName && s.owner.username == 'Dehar')
            + 50 * _.sum(Game.structures, (s) => s.room.name == roomName && s.owner.username == 'Dehar' &&
                s.structureType == STRUCTURE_EXTENSION);

        // console.log(creepPotential);
        // console.log("")


        if (freeSpawn != undefined) {
            /* if (localMadeCreeps <10) {


                if (localMadeCreeps <10) {

                    Game.spawns.W27S47Spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, {
                        role: 'basicCreep',
                        working: false,
                        origination: roomName
                    });

                } else {

                    if (controllerLevel == 1) {
                        Game.spawns.W27S47Spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, {
                            role: 'basicCreep',
                            working: false,
                            origination: roomName
                        });
                    }

                    if (controllerLevel == 2) {

                        if (creepPotential >= 500) {
                            Game.spawns.W27S47Spawn1.createCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {
                                role: 'basicCreep',
                                working: false,
                                origination: roomName
                            });
                        } else if (creepPotential >= 400) {
                            Game.spawns.W27S47Spawn1.createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], undefined, {
                                role: 'basicCreep',
                                working: false,
                                origination: roomName
                            });
                        } else {
                            Game.spawns.W27S47Spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, {
                                role: 'basicCreep',
                                working: false,
                                origination: roomName
                            });
                        }
                    }

                    if (controllerLevel >= 3) {

                        if (creepPotential >= 750) {
                            Game.spawns.W27S47Spawn1.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], undefined, {
                                role: 'basicCreep',
                                working: false,
                                origination: roomName
                            });
                        } else if (creepPotential >= 700) {
                            Game.spawns.W27S47Spawn1.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], undefined, {
                                role: 'basicCreep',
                                working: false,
                                origination: roomName
                            });
                        } else if (creepPotential >= 600) {
                            Game.spawns.W27S47Spawn1.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {
                                role: 'basicCreep',
                                working: false,
                                origination: roomName
                            });
                        } else if (creepPotential >= 500) {
                            Game.spawns.W27S47Spawn1.createCreep([WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {
                                role: 'basicCreep',
                                working: false,
                                origination: roomName
                            });
                        } else if (creepPotential >= 400) {
                            Game.spawns.W27S47Spawn1.createCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE], undefined, {
                                role: 'basicCreep',
                                working: false,
                                origination: roomName
                            });
                        } else {
                            Game.spawns.W27S47Spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, {
                                role: 'basicCreep',
                                working: false,
                                origination: roomName
                            });
                        }
                    }
                }*/
            // } else
            if (controllerLevel >= 3 && creepPotential >= 800) {


                // console.log(localMadePatrolLogic);

                // controllerLevel = 4;

                var localMedicNeeded = 0;

                if(localMadeMedicLogic < localMadeSiegerLogic){
                    localMedicNeeded = localMadeSiegerLogic;
                }

                if (localMadeRefillersWar < 3) {
                    var memory = "{role: 'refillerWar', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 4 + "(\"courier\"), memory)";
                    var createString = eval(constructorString);
                    // var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                    eval(createString);
                }  else if (localMadeMedicLogic < 1) {
                    var memory = "{role: 'medicLogic', claim: true, working: false, origination: '" + roomName + "', arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
                        "arrived2: false, roomToWorkX1: 39, roomToWorkY1: 3,  roomToWorkName1: \"W30S50\"" +
                        "arrived3: false, roomToWorkX1: 5, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"medicLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeSiegerLogic < 1) {
                    var memory = "{role: 'siegerLogic', claim: true, working: false, origination: '" + roomName + "', arrived1: false, roomToWorkX1: 12, roomToWorkY1: 45,  roomToWorkName1: \"W30S47\"" +
                        "arrived2: false, roomToWorkX1: 39, roomToWorkY1: 3,  roomToWorkName1: \"W30S50\"" +
                        "arrived3: false, roomToWorkX1: 3, roomToWorkY1: 35,  roomToWorkName1: \"W27S49\"" +
                        "}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                }

/*
                if (localMadeBasicCreeps < basicCreepsNeeded + 3) {
                    var memory = "{role: 'basicCreep', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreep\"), memory)";
                    var createString = eval(constructorString);
                    // var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                    eval(createString);
                } else if (localMadePureHarvesters < 2) {
                    var memory = "{role: 'pureHarvester', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeCouriers < 2) {
                    var memory = "{role: 'courier', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 3 + "(\"courier\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeUpgraders < 0) {
                    var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"upgrader\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeAttackerLogic < 1) {
                    var memory = "{role: 'attackerLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                }  else if (localMadeBasicCreepsOuter < 1) {
                    var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreep\"), memory)";
                    var createString = eval(constructorString);
                    var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                    eval(createString);
                } else if (localMadeBasicCreepsOuter2 < 1) {
                    var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreep\"), memory)";
                    var createString = eval(constructorString);
                    var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                    eval(createString);
                    // }else if (localMadeBasicCreepsOuter3 < 1) {
                    //     var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 15, roomToWorkY: 16,  roomToWorkName: \"W27S46\"}";
                    //     var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreep\"), memory)";
                    //     var createString = eval(constructorString);
                    //     var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                    //     eval(createString);
                } else if (localMadeBasicCreepsOuter5 < 0) {
                    var memory = "{role: 'basicCreepOuter', tribe: 5, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 28, roomToWorkY: 42,  roomToWorkName: \"W28S46\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreep\"), memory)";
                    var createString = eval(constructorString);
                    var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                    eval(createString);
                } else if (localMadeOuterHarvesterLogic < 2) {
                    var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeOuterHarvesterLogic2 < 2) {
                    var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeOuterCourierLogic < 2) {
                    var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 46, roomToBackY: 12," +
                        "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                        "linkRoomName: \"" + roomName + "\", linkRoomNameX: 17" + ", linkRoomNameY: 47," +
                        "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 4 + "(\"outerCourierLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeOuterCourierLogic2 < 2) {
                    var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 46, roomToBackY: 12," +
                        "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 4 + "(\"outerCourierLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeOuterCourierLogic3 < 0) {
                    var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: 46, roomToBackY: 12," +
                        "roomToWorkX: " + roomToWorkX3 + ", roomToWorkY: " + roomToWorkY3 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName3 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 5 + "(\"outerCourierLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                }else if (localMadeOuterReserverLogic < 2) {
                    var memory = "{role: 'outerClaimerLogic', claim: false, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerClaimerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeOuterReserverLogic2 < 2) {
                    var memory = "{role: 'outerClaimerLogic', claim: false, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                        "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerClaimerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadeOuterClaimerLogic < 0) {
                    var memory = "{role: 'outerClaimerLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerClaimerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                } else if (localMadePatrolLogic < 0) {
                    var memory = "{role: 'patrolLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"}";
                    var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 5 + "(\"attackerLogic\"), memory)";
                    var createString = eval(constructorString);
                    eval(createString);
                }*/





            }

        }
    },

    W28S46:

        function () {

            var wallsLevel = 200000;

            var betterRoomName = "W33N23";

            var roomName = "W28S46";

            this.defendRoom(roomName);

            var basicCreepsNeeded = 3;


            var roomToBackX = 24;
            var roomToBackY = 25;


            var roomToWorkName1 = "W27S46";
            var roomToWorkX1 = 6;
            var roomToWorkY1 = 16;

            var roomToWorkName2 = "W29S47";
            var roomToWorkX2 = 37;
            var roomToWorkY2 = 17;

            var roomToWorkName3 = "W28S47";
            var roomToWorkX3 = 20;
            var roomToWorkY3 = 3;

            /*
                    var currentRoom;

                    for (let name in Game.rooms) {
                        if (Game.rooms[name].name == roomName) {
                            currentRoom = Game.rooms[name];
                        }
                    }

                    console.log(currentRoom.controller.owner.username);
            */


            // console.log("creeps with roomname W32N24: " + _.sum(Game.creeps, (c) => c.memory.roomName == roomName));

            // console.log("creeps in room W32N24: " + _.sum(Game.creeps, (c) => c.room.name == roomName));

            var localMadeCreeps = _.sum(Game.creeps, (c) => c.memory.origination == roomName);

            var localMadeBasicCreeps = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreep');

            var localMadePureHarvesters = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'pureHarvester');

            var localMadeCouriers = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'courier');

            var localMadeUpgraders = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'upgrader');

            // var harvestersFromBetterRoom = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'roleOuterHarvesterLogic');

            var localMadeBasicCreepsOuter = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' &&
                c.memory.roomToWorkName == roomToWorkName1);

            // console.log(localMadeBasicCreepsOuter);


            var localMadeBasicCreepsOuter2 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' &&
                c.memory.roomToWorkName == roomToWorkName2);

            var localMadeBasicCreepsOuter3 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' &&
                c.memory.roomToWorkName == roomToWorkName3);

            var localMadeBasicCreepsOuter5 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'basicCreepOuter' && c.memory.tribe == 5);

            var localMadeOuterHarvesterLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerHarvesterLogic' &&
                c.memory.roomToWorkName == roomToWorkName1);

            var localMadeOuterHarvesterLogic2 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerHarvesterLogic' &&
                c.memory.roomToWorkName == roomToWorkName2);

            var localMadeOuterCourierLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerCourierLogic' &&
                c.memory.roomToWorkName == roomToWorkName1);

            var localMadeOuterCourierLogic2 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerCourierLogic' &&
                c.memory.roomToWorkName == roomToWorkName2);

            var localMadeOuterReserverLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerClaimerLogic' && c.memory.claim == false &&
                c.memory.roomToWorkName == roomToWorkName1);

            var localMadeOuterReserverLogic2 = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerClaimerLogic' && c.memory.claim == false &&
                c.memory.roomToWorkName == roomToWorkName2);

            var localMadeOuterClaimerLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'outerClaimerLogic' && c.memory.claim == true &&
                c.memory.roomToWorkName == roomToWorkName1);

            var localMadeAttackerLogic = _.sum(Game.creeps, (c) => c.memory.origination == roomName && c.memory.role == 'attackerLogic');


            // for (var name in Game.creeps) {
            //
            //     var c = Game.creeps[name];
            //
            //     if (c.memory.origination == roomName && c.memory.role == 'outerCourierLogic') {
            // !!!!!c.suicide();
            // }
            // }


            let mapCreateCreeps = new Map();

            mapCreateCreeps.set('1', 'str1');
            mapCreateCreeps.set(1, 'num1');
            mapCreateCreeps.set(true, 'bool1');

            // console.log(localMadeBasicCreepsOuter);
            // console.log(localMadeCreeps);
            // console.log("claimers" + localMadeOuterClaimerLogic);

            var controllerLevel = Game.rooms[roomName].controller.level;

            if (controllerLevel == 4) {
                var result = Game.rooms[roomName].createConstructionSite(29, 27, STRUCTURE_STORAGE);
            }


            // console.log("total localMadeOuterReserverLogic: " + localMadeOuterReserverLogic);

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

            if (localSpawns != undefined) {
                freeSpawn = localSpawns[0].pos.findClosestByRange(localSpawns.filter((s) => s.isActive() == true && s.spawning == null));
            }

            var creepPotential = 0;

            creepPotential = 300 * _.sum(Game.spawns, (s) => s.room.name == roomName && s.owner.username == 'Dehar')
                + 50 * _.sum(Game.structures, (s) => s.room.name == roomName && s.owner.username == 'Dehar' &&
                    s.structureType == STRUCTURE_EXTENSION);


            // console.log(localMadeCreeps);
            // console.log(freeSpawn.name);
            // console.log(creepPotential);
            // console.log(localMadePureHarvesters);
            // console.log(freeSpawn.name);
            // console.log(localMadeBasicCreepsOuter < 1);

            if (freeSpawn != undefined) {
                if (localMadeCreeps < 6) {

                    if (controllerLevel == 1) {
                        var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, CARRY, CARRY, MOVE, MOVE], " +
                            "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                        eval(createString);
                    }

                    if (controllerLevel == 2) {

                        if (creepPotential >= 500) {
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

                    if (controllerLevel >= 3) {

                        if (creepPotential >= 750) {
                            var createString = " Game.spawns." + freeSpawn.name + ".createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE], " +
                                "undefined, {role: 'basicCreep', working: false, origination: '" + roomName + "'});";
                            eval(createString);
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
                } else if (controllerLevel >= 3 && creepPotential >= 800) {


                    // console.log(localMadeUpgraders);
                    controllerLevel = 3;

                    if (localMadeBasicCreeps < basicCreepsNeeded) {
                        var memory = "{role: 'basicCreep', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreep\"), memory)";
                        var createString = eval(constructorString);
                        // var createString = creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev3("basicCreep"), memory);
                        eval(createString);
                    } else if (localMadePureHarvesters < 2) {
                        var memory = "{role: 'pureHarvester', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeCouriers < 3) {
                        var memory = "{role: 'courier', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"courier\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeUpgraders < 4) {
                        var memory = "{role: 'upgrader', working: false, origination: '" + roomName + "'}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + 4 + "(\"upgrader\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeBasicCreepsOuter < 1) {
                        var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                            "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreep\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeBasicCreepsOuter2 < 0) {
                        var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                            "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreep\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeBasicCreepsOuter3 < 1) {
                        var memory = "{role: 'basicCreepOuter', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX3 + ", roomToWorkY: " + roomToWorkY3 + ",  " +
                            "roomToWorkName: \"" + roomToWorkName3 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreep\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeBasicCreepsOuter5 < 0) {
                        var memory = "{role: 'basicCreepOuter', tribe: 5, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 28, roomToWorkY: 42,  roomToWorkName: \"W28S46\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"basicCreep\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeOuterHarvesterLogic < 2) {
                        var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                            "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeOuterHarvesterLogic2 < 2) {
                        var memory = "{role: 'outerHarvesterLogic', working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                            "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"pureHarvester\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeOuterCourierLogic < 3) {
                        var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: " + roomToBackX + ", " +
                            "roomToBackY: " + roomToBackY + "," +
                            "roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                            "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerCourierLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeOuterCourierLogic2 < 2) {
                        var memory = "{role: 'outerCourierLogic', working: false, origination: '" + roomName + "', arrived: false, roomToBackX: " + roomToBackX + ", " +
                            "roomToBackY: " + roomToBackY + "," +
                            "roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                            "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerCourierLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeOuterReserverLogic < 2) {
                        var memory = "{role: 'outerClaimerLogic', claim: false, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX1 + ", roomToWorkY: " + roomToWorkY1 + ",  " +
                            "roomToWorkName: \"" + roomToWorkName1 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerClaimerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeOuterReserverLogic2 < 1) {
                        var memory = "{role: 'outerClaimerLogic', claim: false, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: " + roomToWorkX2 + ", roomToWorkY: " + roomToWorkY2 + ",  " +
                            "roomToWorkName: \"" + roomToWorkName2 + "\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerClaimerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    } else if (localMadeOuterClaimerLogic < 0) {
                        var memory = "{role: 'outerClaimerLogic', claim: true, working: false, origination: '" + roomName + "', arrived: false, roomToWorkX: 16, roomToWorkY: 27,  roomToWorkName: \"W28S46\"}";
                        var constructorString = "creepTemplates.creepConstructor(roomName, freeSpawn.name, creepTemplates.lev" + controllerLevel + "(\"outerClaimerLogic\"), memory)";
                        var createString = eval(constructorString);
                        eval(createString);
                    }
                }
            }
        },

    createCreeps: function () {

    },


    towersDefendAndRepairRoom: function (roomName) {
        var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
        if (hostiles.length > 0) {
            var username = hostiles[0].owner.username;
            Game.notify(`User ${username} spotted in room ${roomName}`);
            var towers = Game.rooms[roomName].find(
                FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
            towers.forEach(tower => tower.attack(hostiles[0]));
        }
    }


}
;

