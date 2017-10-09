module.exports = {

    run: function (creep) {

        if (creep.memory.needBoost == true) {
            creep.room.memory.labsBoost = true;
            var upgradePosition = new RoomPosition(creep.room.terminal.pos.x + 1, creep.room.terminal.pos.y + 2, creep.room.name);
            if (creep.pos.x != upgradePosition.x || creep.pos.y != upgradePosition.y) {
                creep.moveTo(upgradePosition);
            } else {
                creep.memory.needBoost = false;
                var body = creep.body;
                for (i in body) {
                    var bodyPart = body[i];
                    if ((bodyPart.type == HEAL || bodyPart.type == TOUGH) && bodyPart.boost == undefined) {
                        creep.memory.needBoost = true;
                    }
                }
                if (creep.memory.needBoost == false) {
                    creep.room.memory.labsBoost = false;
                }
            }
        } else {

            if (creep.memory.healAvailable == undefined || creep.memory.healAvailable == null) {
                var body = creep.body;
                for (i in body) {
                    var bodyPart = body[i];
                    if (bodyPart.type == HEAL) {
                        creep.memory.healAvailable = true;
                        break;
                    }
                }
            }

            //TransferLogic:

            if (creep.memory.arrived == false && creep.memory.roomToWorkName1 != undefined && creep.memory.roomToWorkName1 != null) {


                if (creep.memory.healAvailable == true && creep.hits < creep.hitsMax) {
                    creep.heal(creep);
                }

                if (creep.memory.reachedRoom1 == undefined || creep.memory.reachedRoom1 == null) {
                    creep.memory.reachedRoom1 = false;
                }

                if (creep.memory.roomToWorkName2 != undefined && creep.memory.roomToWorkName2 != null) {
                    if (creep.memory.reachedRoom2 == undefined || creep.memory.reachedRoom2 == null) {
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

                if (creep.room.controller != null && creep.room.controller != undefined) {

                    var controller = creep.room.controller;

                    if (controller.owner) {
                        if (creep.attackController(controller) == ERR_NOT_IN_RANGE) {
                            if (creep.memory.healAvailable && creep.hits < creep.hitsMax) {
                                creep.heal(creep);
                            }
                            creep.moveTo(controller);
                        }
                    } else {
                        var claimResult = creep.claimController(controller);
                        if (claimResult == ERR_NOT_IN_RANGE) {
                            if (creep.memory.healAvailable && creep.hits < creep.hitsMax) {
                                creep.heal(creep);
                            }
                            creep.moveTo(controller);
                        }
                        if (claimResult == (ERR_FULL || ERR_GCL_NOT_ENOUGH)){
                            var reserveResult = creep.reserveController(controller);
                            if (reserveResult == ERR_NOT_IN_RANGE) {
                                if (creep.memory.healAvailable && creep.hits < creep.hitsMax) {
                                    creep.heal(creep);
                                }
                                creep.moveTo(controller);
                            }
                        }
                    }
                }
            }
        }
    }
};