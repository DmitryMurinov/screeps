module.exports = {

    run: function (creep) {

        //TransferLogic:

        if (creep.memory.arrived == false && creep.memory.roomToWorkName1 != undefined && creep.memory.roomToWorkName1 != null) {

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


            if (creep.room.controller !=null && creep.room.controller != undefined) {
                if (creep.memory.claim == true) {
                    var errorCode = creep.claimController(creep.room.controller);

                    // console.log(errorCode);


                    if (errorCode == ERR_GCL_NOT_ENOUGH) {
                        if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                            if (!creep.memory.storedPath) {
                                creep.memory.storedPath = creep.pos.findPathTo(creep.room.controller);
                            }
                            if (creep.memory.storedPath) {
                                moveResult = creep.moveByPath(creep.memory.storedPath);
                            }
                            if (moveResult == OK) {
                            } else {
                                creep.memory.storedPath = creep.pos.findPathTo(creep.room.controller);
                                moveResult = creep.moveByPath(creep.memory.storedPath);
                            }
                        }
                    }
                    else {
                        if (errorCode == ERR_NOT_IN_RANGE) {

                            if (creep.memory.storedPath == undefined || creep.memory.storedPath == null) {
                                creep.memory.storedPath = creep.pos.findPathTo(creep.room.controller);
                            }
                            if (creep.memory.storedPath) {
                                moveResult = creep.moveByPath(creep.memory.storedPath);
                            }
                            if (moveResult == OK) {
                            } else {
                                creep.memory.storedPath = creep.pos.findPathTo(creep.room.controller);
                                moveResult = creep.moveByPath(creep.memory.storedPath);
                            }
                        }
                    }
                } else {

                    if (creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        if (!creep.memory.storedPath) {
                            creep.memory.storedPath = creep.pos.findPathTo(creep.room.controller);
                        }
                        if (creep.memory.storedPath) {
                            moveResult = creep.moveByPath(creep.memory.storedPath);
                        }
                        if (moveResult == OK) {
                        } else {
                            creep.memory.storedPath = creep.pos.findPathTo(creep.room.controller);
                            moveResult = creep.moveByPath(creep.memory.storedPath);
                        }
                    }
                }
            }
        }
    }
};