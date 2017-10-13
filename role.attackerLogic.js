module.exports = {

    run: function (creep) {

        var enemies = undefined;

        var enemiesToExclude;

        if(!creep.memory.healAvailable) {
            var body = creep.body;
            creep.memory.healAvailable = false;
            bodyLoop:
            for (i in body) {
                var bodyPart = body[i];
                if (bodyPart.type == HEAL) {
                    creep.memory.healAvailable = true;
                    break bodyLoop;
                }
            }
        }

        if (!creep.memory.needBoost) {
            creep.memory.needBoost == false;
        }


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
                    if ((bodyPart.type == TOUGH) && bodyPart.boost == undefined) {
                        creep.memory.needBoost = true;
                    }
                }
                if (creep.memory.needBoost == false) {
                    creep.room.memory.labsBoost = false;
                }
            }
        } else {

            var enemies;

            if (enemies == undefined) {
                enemies = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {filter:
                    (c) => c.owner.username != 'Source Keeper'});
            }

            if (enemies == undefined) {
                enemies = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                    filter: (s) => s.structureType != STRUCTURE_CONTROLLER &&
                        s.room.controller && s.room.controller.safeMode == undefined &&
                        s.structureType != STRUCTURE_RAMPART
                        && s.structureType != STRUCTURE_STORAGE
                        && s.structureType != STRUCTURE_TOWER

                });
            }

            // if (enemies == undefined) {
            //     enemies = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
            //         filter: (s) => s.structureType != STRUCTURE_CONTROLLER &&
            //             s.room.controller && s.room.controller.safeMode == undefined &&
            //             s.structureType == STRUCTURE_TOWER
            //     });
            // }

            // if(!enemies) {
            //     var enemies = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
            //         filter: (s) => s.structureType != STRUCTURE_CONTROLLER &&
            //             s.room.controller.safeMode == undefined
            //     });
            // }

            if(creep.room.name == 'E56N19' && enemies == undefined){
                enemies = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (s) => s.structureType != STRUCTURE_CONTROLLER
                    && s.structureType != STRUCTURE_KEEPER_LAIR && s.pos.x == 20 && s.pos.y == 45});
            }

            if (enemies != undefined) {

                if (creep.attack(enemies) == ERR_NOT_IN_RANGE) {
                    if(creep.memory.healAvailable && creep.hits < creep.hitsMax){
                        creep.heal(creep);
                    }
                    creep.moveTo(enemies);
                }

            } else {

                if(creep.memory.healAvailable && creep.hits < creep.hitsMax){
                    creep.heal(creep);
                }

                var roomsToInvestigate = new Array();

                if (creep.memory.roomToInvestigateName0) {
                    let roomToInvestigate0 = new Map;
                    roomToInvestigate0.set('roomToInvestigateName', creep.memory.roomToInvestigateName0);
                    roomToInvestigate0.set('roomToInvestigateX', creep.memory.roomToInvestigateX0);
                    roomToInvestigate0.set('roomToInvestigateY', creep.memory.roomToInvestigateY0);
                    roomsToInvestigate.push(roomToInvestigate0);
                }

                if (creep.memory.roomToInvestigateName1) {
                    let roomToInvestigate1 = new Map;
                    roomToInvestigate1.set('roomToInvestigateName', creep.memory.roomToInvestigateName1);
                    roomToInvestigate1.set('roomToInvestigateX', creep.memory.roomToInvestigateX1);
                    roomToInvestigate1.set('roomToInvestigateY', creep.memory.roomToInvestigateY1);
                    roomsToInvestigate.push(roomToInvestigate1);
                }

                if (creep.memory.roomToInvestigateName2) {
                    let roomToInvestigate2 = new Map;
                    roomToInvestigate2.set('roomToInvestigateName', creep.memory.roomToInvestigateName2);
                    roomToInvestigate2.set('roomToInvestigateX', creep.memory.roomToInvestigateX2);
                    roomToInvestigate2.set('roomToInvestigateY', creep.memory.roomToInvestigateY2);
                    roomsToInvestigate.push(roomToInvestigate2);
                }

                if (creep.memory.roomToInvestigateName3) {
                    let roomToInvestigate3 = new Map;
                    roomToInvestigate3.set('roomToInvestigateName', creep.memory.roomToInvestigateName3);
                    roomToInvestigate3.set('roomToInvestigateX', creep.memory.roomToInvestigateX3);
                    roomToInvestigate3.set('roomToInvestigateY', creep.memory.roomToInvestigateY3);
                    roomsToInvestigate.push(roomToInvestigate3);
                }

                if (creep.memory.roomToInvestigateName4) {
                    let roomToInvestigate4 = new Map;
                    roomToInvestigate4.set('roomToInvestigateName', creep.memory.roomToInvestigateName4);
                    roomToInvestigate4.set('roomToInvestigateX', creep.memory.roomToInvestigateX4);
                    roomToInvestigate4.set('roomToInvestigateY', creep.memory.roomToInvestigateY4);
                    roomsToInvestigate.push(roomToInvestigate4);
                }

                if (creep.memory.roomToInvestigateName5) {
                    let roomToInvestigate5 = new Map;
                    roomToInvestigate5.set('roomToInvestigateName', creep.memory.roomToInvestigateName5);
                    roomToInvestigate5.set('roomToInvestigateX', creep.memory.roomToInvestigateX5);
                    roomToInvestigate5.set('roomToInvestigateY', creep.memory.roomToInvestigateY5);
                    roomsToInvestigate.push(roomToInvestigate5);
                }

                if (creep.memory.roomToInvestigateName6) {
                    let roomToInvestigate6 = new Map;
                    roomToInvestigate6.set('roomToInvestigateName', creep.memory.roomToInvestigateName6);
                    roomToInvestigate6.set('roomToInvestigateX', creep.memory.roomToInvestigateX6);
                    roomToInvestigate6.set('roomToInvestigateY', creep.memory.roomToInvestigateY6);
                    roomsToInvestigate.push(roomToInvestigate6);
                }

                if (creep.memory.roomToInvestigateName7) {
                    let roomToInvestigate7 = new Map;
                    roomToInvestigate7.set('roomToInvestigateName', creep.memory.roomToInvestigateName7);
                    roomToInvestigate7.set('roomToInvestigateX', creep.memory.roomToInvestigateX7);
                    roomToInvestigate7.set('roomToInvestigateY', creep.memory.roomToInvestigateY7);
                    roomsToInvestigate.push(roomToInvestigate7);
                }

                if (creep.memory.roomToInvestigateName8) {
                    let roomToInvestigate8 = new Map;
                    roomToInvestigate8.set('roomToInvestigateName', creep.memory.roomToInvestigateName8);
                    roomToInvestigate8.set('roomToInvestigateX', creep.memory.roomToInvestigateX8);
                    roomToInvestigate8.set('roomToInvestigateY', creep.memory.roomToInvestigateY8);
                    roomsToInvestigate.push(roomToInvestigate8);
                }

                if (creep.memory.roomToInvestigateName9) {
                    let roomToInvestigate9 = new Map;
                    roomToInvestigate9.set('roomToInvestigateName', creep.memory.roomToInvestigateName9);
                    roomToInvestigate9.set('roomToInvestigateX', creep.memory.roomToInvestigateX9);
                    roomToInvestigate9.set('roomToInvestigateY', creep.memory.roomToInvestigateY9);
                    roomsToInvestigate.push(roomToInvestigate9);
                }

                if (creep.memory.roomToInvestigateName == undefined || creep.memory.roomToInvestigateName == null) {
                    creep.memory.roomToInvestigateName = roomsToInvestigate[0].get("roomToInvestigateName");
                    creep.memory.roomToInvestigateX = roomsToInvestigate[0].get("roomToInvestigateX");
                    creep.memory.roomToInvestigateY = roomsToInvestigate[0].get("roomToInvestigateY");
                    creep.memory.patrolRoom = 0;
                }

                for (i = 0; i < roomsToInvestigate.length; i++) {
                    if (creep.memory.patrolRoom == i) {
                        if (
                            creep.pos.roomName == creep.memory.roomToInvestigateName &&
                            creep.pos.x == creep.memory.roomToInvestigateX &&
                            creep.pos.y == creep.memory.roomToInvestigateY
                        ) {
                            creep.memory.pathNeedUpdate = true;
                            if (i + 1 < roomsToInvestigate.length) {
                                creep.memory.roomToInvestigateName = roomsToInvestigate[i + 1].get("roomToInvestigateName");
                                creep.memory.roomToInvestigateX = roomsToInvestigate[i + 1].get("roomToInvestigateX");
                                creep.memory.roomToInvestigateY = roomsToInvestigate[i + 1].get("roomToInvestigateY");
                                creep.memory.patrolRoom = i + 1;
                            } else {
                                creep.memory.roomToInvestigateName = roomsToInvestigate[0].get("roomToInvestigateName");
                                creep.memory.roomToInvestigateX = roomsToInvestigate[0].get("roomToInvestigateX");
                                creep.memory.roomToInvestigateY = roomsToInvestigate[0].get("roomToInvestigateY");
                                creep.memory.patrolRoom = 0;
                            }
                        }
                    }
                }

                if (!creep.memory.storedPath) {
                    creep.memory.pathNeedUpdate = true;
                }

                if (creep.memory.pathNeedUpdate == true) {
                    creep.memory.storedPath = creep.pos.findPathTo(new RoomPosition(
                        creep.memory.roomToInvestigateX, creep.memory.roomToInvestigateY, creep.memory.roomToInvestigateName));
                }
                var moveResult;
                if (creep.memory.storedPath) {
                    moveResult = creep.moveByPath(creep.memory.storedPath);
                }
                if (moveResult == OK) {
                    creep.memory.pathNeedUpdate = false;
                } else {
                    creep.memory.storedPath = creep.pos.findPathTo(new RoomPosition(
                        creep.memory.roomToInvestigateX, creep.memory.roomToInvestigateY, creep.memory.roomToInvestigateName));
                    moveResult = creep.moveByPath(creep.memory.storedPath);
                    creep.memory.pathNeedUpdate = false;
                }
            }
        }
    }

};