module.exports = {

    run: function (creep, allCreepsCount, gameTime) {

        //TransferLogic:

        if (creep.memory.arrived == false && creep.memory.roomToWorkName1) {



            if (creep.hits < creep.hitsMax) {
                creep.heal(creep);
            }

            if (creep.memory.reachedRoom1 == undefined || creep.memory.reachedRoom1 == null) {
                creep.memory.reachedRoom1 = false;
            }

            if (creep.memory.roomToWorkName2) {
                if (!creep.memory.reachedRoom2) {
                    creep.memory.reachedRoom2 = false;
                }
            } else {
                creep.memory.reachedRoom2 = true;
            }

            if (creep.memory.arrived == false) {
                if (creep.memory.reachedRoom1 == false) {
                    creep.memory.roomToWorkX = creep.memory.roomToWorkX1;
                    creep.memory.roomToWorkY = creep.memory.roomToWorkY1;
                    creep.memory.roomToWorkName = creep.memory.roomToWorkName1;
                    if (creep.pos.x == creep.memory.roomToWorkX && creep.pos.y == creep.memory.roomToWorkY && creep.room.name == creep.memory.roomToWorkName) {
                        creep.memory.reachedRoom1 = true;
                    }
                } else if (creep.memory.reachedRoom2 == false) {
                    creep.memory.roomToWorkX = creep.memory.roomToWorkX2;
                    creep.memory.roomToWorkY = creep.memory.roomToWorkY2;
                    creep.memory.roomToWorkName = creep.memory.roomToWorkName2;
                    if (creep.pos.x == creep.memory.roomToWorkX && creep.pos.y == creep.memory.roomToWorkY && creep.room.name == creep.memory.roomToWorkName) {
                        creep.memory.reachedRoom2 = true;
                    }
                } else {
                    creep.memory.arrived = true;
                }
            }


            if (creep.memory.arrived == false) {
                if (creep.pos.x == creep.memory.roomToWorkX && creep.pos.y == creep.memory.roomToWorkY && creep.room.name == creep.memory.roomToWorkName) {
                    creep.memory.storedPath = undefined;
                } else {
                    if (!creep.memory.storedPath) {
                        creep.memory.storedPath = creep.pos.findPathTo(new RoomPosition(creep.memory.roomToWorkX, creep.memory.roomToWorkY, creep.memory.roomToWorkName));
                    }
                    if (creep.memory.storedPath) {
                        moveResult = creep.moveByPath(creep.memory.storedPath);
                    }
                    if (moveResult == OK) {
                    } else {
                        creep.memory.storedPath = creep.pos.findPathTo(new RoomPosition(creep.memory.roomToWorkX, creep.memory.roomToWorkY, creep.memory.roomToWorkName));
                        moveResult = creep.moveByPath(creep.memory.storedPath);
                    }
                }

            }
        }
        else if (creep.memory.arrived == false) {
            if (creep.pos.x == creep.memory.roomToWorkX && creep.pos.y == creep.memory.roomToWorkY && creep.room.name == creep.memory.roomToWorkName) {
                creep.memory.arrived = true;
                creep.memory.storedPath = undefined;
            }

            // else
            if (!creep.memory.storedPath) {
                creep.memory.storedPath = creep.pos.findPathTo(new RoomPosition(creep.memory.roomToWorkX, creep.memory.roomToWorkY, creep.memory.roomToWorkName));
            }
            if (creep.memory.storedPath) {
                moveResult = creep.moveByPath(creep.memory.storedPath);
            }
            if (moveResult == OK) {
            } else {
                creep.memory.storedPath = creep.pos.findPathTo(new RoomPosition(creep.memory.roomToWorkX, creep.memory.roomToWorkY, creep.memory.roomToWorkName));
                moveResult = creep.moveByPath(creep.memory.storedPath);
            }

        } else

        //Main logic

        if (creep.memory.arrived == true) {

            if (!creep.memory.doNothingTicks) {
                creep.memory.doNothingTicks = 0;
            }

            if (!creep.memory.previousPositionX) {
                creep.memory.previousPositionX = creep.pos.x;
            }

            if (!creep.memory.previousPositionY) {
                creep.memory.previousPositionY = creep.pos.y;
            }

            if (creep.pos.x == creep.memory.previousPositionX && creep.pos.y == creep.memory.previousPositionY) {
                creep.memory.doNothingTicks++;
            }

            creep.memory.previousPositionX = creep.pos.x;

            creep.memory.previousPositionY = creep.pos.y;

            if (creep.memory.doNothingTicks >= 3) {
                creep.memory.doNothingTicks = 0;
                creep.memory.storedPath = null;
                creep.memory.previousPositionX = null;
                creep.memory.previousPositionY = null;
            }

            // var startCpu = Game.cpu.getUsed();

            var totalKeeperKillers = allCreepsCount[creep.memory.origination + ";" + creep.memory.role];

            if (totalKeeperKillers >= 2) {
                if ((gameTime.substring(gameTime.length - 1, gameTime.length) === '0') || (!creep.memory.primary)) {
                    var keeperKillers = creep.room.find(FIND_MY_CREEPS, {
                        filter: (c) => c.memory.origination == creep.memory.origination
                            && c.memory.role == creep.memory.role && c.room.name == creep.room.name
                    });
                    if (keeperKillers.length < 2) {
                        totalKeeperKillers = 1;
                    } else {
                        creep.memory.primary = true;
                        for (var i in keeperKillers) {
                            var keeperKiller = keeperKillers[i];
                            if (keeperKiller.ticksToLive > creep.ticksToLive) {
                                creep.memory.primary = false;
                            }
                        }
                    }
                }
            }

            if (totalKeeperKillers < 2) {

                var enemy;

                if (!creep.memory.enemyId) {
                    if (creep.hits < creep.hitsMax) {
                        creep.heal(creep);
                    } else {
                        enemy = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
                        if (enemy) {
                            creep.memory.enemyId = enemy.id;
                        }
                    }
                    creep.memory.storedPath = null;
                } else {
                    enemy = Game.getObjectById(creep.memory.enemyId);
                }

                if (enemy) {
                    if (creep.attack(enemy) == ERR_NOT_IN_RANGE) {
                        if(!creep.memory.enemyPreviousX){
                            creep.memory.enemyPreviousX = enemy.pos.x;
                            creep.memory.enemyPreviousY = enemy.pos.y;
                        }
                        if(!creep.memory.storedPath){
                            creep.memory.storedPath = creep.pos.findPathTo(enemy);
                        }
                        if(creep.memory.enemyPreviousX != enemy.pos.x || creep.memory.enemyPreviousY != enemy.pos.y){
                            creep.memory.storedPath = creep.pos.findPathTo(enemy);
                        }
                        creep.moveByPath(creep.memory.storedPath);
                        if (creep.hits < creep.hitsMax) {
                            creep.heal(creep);
                        }
                    }
                } else {
                    creep.memory.enemyId = null;
                    var keeperLairs = creep.room.find(FIND_STRUCTURES, {
                        filter: (s) => s.structureType == STRUCTURE_KEEPER_LAIR &&
                            s.ticksToSpawn && s.ticksToSpawn > 0
                    });

                    if (keeperLairs.length > 0) {
                        var lair = keeperLairs[0];

                        for (var i in keeperLairs) {
                            var nextLair = keeperLairs[i];
                            if (nextLair.ticksToSpawn < lair.ticksToSpawn) {
                                lair = nextLair;
                            }
                        }

                        creep.moveTo(lair);
                    }
                }
            } else {

                if (!creep.memory.lair1Id) {
                    var leftUpperCorner = new RoomPosition(1, 1, creep.room.name);

                    var lair1 = leftUpperCorner.findClosestByRange(FIND_STRUCTURES, {
                        filter: (s) => s.structureType == STRUCTURE_KEEPER_LAIR
                    });
                    var lair2 = lair1.pos.findClosestByRange(FIND_STRUCTURES, {
                        filter: (s) => s.structureType == STRUCTURE_KEEPER_LAIR
                            && s.pos != lair1.pos
                    });
                    var lair3 = lair2.pos.findClosestByRange(FIND_STRUCTURES, {
                        filter: (s) => s.structureType == STRUCTURE_KEEPER_LAIR
                            && s.pos != lair1.pos && s.pos != lair2.pos
                    });
                    var lair4 = lair3.pos.findClosestByRange(FIND_STRUCTURES, {
                        filter: (s) => s.structureType == STRUCTURE_KEEPER_LAIR
                            && s.pos != lair1.pos && s.pos != lair2.pos && s.pos != lair3.pos
                    });
                    creep.memory.lair1Id = lair1.id;
                    creep.memory.lair2Id = lair2.id;
                    creep.memory.lair3Id = lair3.id;
                    creep.memory.lair4Id = lair4.id;
                }

                if (creep.memory.primary == true) {

                    var lair1 = Game.getObjectById(creep.memory.lair1Id);
                    var lair2 = Game.getObjectById(creep.memory.lair2Id);

                    var enemy;

                    if (!creep.memory.enemyId) {
                        if (creep.hits < creep.hitsMax) {
                            creep.heal(creep);
                        } else {
                            enemy = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {
                                filter: (c) =>
                                    c.pos.inRangeTo(lair1, 5) ||
                                    c.pos.inRangeTo(lair2, 5)
                            });
                            if (enemy) {
                                creep.memory.enemyId = enemy.id;
                                creep.memory.storedPath = null;
                            }
                        }
                    } else {
                        enemy = Game.getObjectById(creep.memory.enemyId);
                    }

                    if (enemy) {
                        var attackResult = creep.attack(enemy);
                        if (attackResult == ERR_NOT_IN_RANGE) {
                            if(!creep.memory.enemyPreviousX){
                                creep.memory.enemyPreviousX = enemy.pos.x;
                                creep.memory.enemyPreviousY = enemy.pos.y;
                            }
                            if(!creep.memory.storedPath){
                                creep.memory.storedPath = creep.pos.findPathTo(enemy);
                            }
                            if(creep.memory.enemyPreviousX != enemy.pos.x || creep.memory.enemyPreviousY != enemy.pos.y){
                                creep.memory.storedPath = creep.pos.findPathTo(enemy);
                            }
                            creep.moveByPath(creep.memory.storedPath);
                            if (creep.hits < creep.hitsMax) {
                                creep.heal(creep);
                            }
                        }
                    } else {
                        creep.memory.enemyId = null;
                        var lair = lair1;
                        if (lair1.ticksToSpawn > lair2.ticksToSpawn) {
                            lair = lair2;
                        }
                        if (!creep.memory.storedPath) {
                            creep.memory.storedPath = creep.pos.findPathTo(lair);
                        } else {
                            creep.moveByPath(creep.memory.storedPath);
                        }
                    }
                } else {

                    var lair3 = Game.getObjectById(creep.memory.lair3Id);
                    var lair4 = Game.getObjectById(creep.memory.lair4Id);

                    var enemy;

                    if (!creep.memory.enemyId) {
                        if (creep.hits < creep.hitsMax) {
                            creep.heal(creep);
                        } else {
                            enemy = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {
                                filter: (c) =>
                                    c.pos.inRangeTo(lair3, 5) ||
                                    c.pos.inRangeTo(lair4, 5)
                            });
                            if (enemy) {
                                creep.memory.enemyId = enemy.id;
                            }
                        }
                    } else {
                        enemy = Game.getObjectById(creep.memory.enemyId);
                    }

                    if (enemy) {
                        var attackResult = creep.attack(enemy);
                        if (attackResult == ERR_NOT_IN_RANGE) {
                            if(!creep.memory.enemyPreviousX){
                                creep.memory.enemyPreviousX = enemy.pos.x;
                                creep.memory.enemyPreviousY = enemy.pos.y;
                            }
                            if(!creep.memory.storedPath){
                                creep.memory.storedPath = creep.pos.findPathTo(enemy);
                            }
                            if(creep.memory.enemyPreviousX != enemy.pos.x || creep.memory.enemyPreviousY != enemy.pos.y){
                                creep.memory.storedPath = creep.pos.findPathTo(enemy);
                            }
                            creep.moveByPath(creep.memory.storedPath);
                            if (creep.hits < creep.hitsMax) {
                                creep.heal(creep);
                            }
                        }
                    } else {
                        creep.memory.enemyId = null;
                        var lair = lair3;
                        if (lair3.ticksToSpawn > lair4.ticksToSpawn) {
                            lair = lair4;
                        }
                        if (!creep.memory.storedPath) {
                            creep.memory.storedPath = creep.pos.findPathTo(lair);
                        } else {
                            creep.moveByPath(creep.memory.storedPath);
                        }
                    }

                }
            }
        }
    }
};