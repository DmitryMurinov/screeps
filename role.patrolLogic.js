module.exports = {

    run: function (creep, count) {

        var enemies = undefined;

        var enemiesToExclude;


        //have name if have owner; have owner if have owner, no owner = undefined

        // console.log(creep.room.controller.safeMode);


        if (creep.room.controller != undefined && creep.room.controller.owner != undefined && creep.room.controller.safeMode > true && creep.room.controller.owner.username != 'Dehar') {

            var usernameToExclude = creep.room.controller.owner.username;

            var enemies = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_TOWER && s.owner.username != usernameToExclude
            });

            if (enemies == undefined) {
                enemies = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                    filter: (s) => s.structureType != STRUCTURE_CONTROLLER &&
                        s.structureType != STRUCTURE_SPAWN &&
                    s.owner.username != usernameToExclude
                });
            }

            if (enemies == undefined) {
                enemies = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {filter: (c) => c.owner.username != usernameToExclude});
            }


            // if (enemies == undefined) {
            //     enemies = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
            //         filter: (s) => s.structureType != STRUCTURE_CONTROLLER &&
            //             s.owner.username != usernameToExclude
            //     });
            // }
        } else if (creep.room.controller == undefined || creep.room.controller.owner == undefined ||
            (creep.room.controller.safeMode == true && creep.room.controller.owner.username == 'Dehar')) {

            var enemies = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_TOWER
            });

            if (enemies == undefined) {
                enemies = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                    filter: (s) => s.structureType != STRUCTURE_CONTROLLER &&
                        s.structureType != STRUCTURE_SPAWN
                });
            }

            // if (enemies == undefined) {
            //     enemies = creep.pos.findClosestByPath(FIND_HOSTILE_SPAWNS);
            // }

            if (enemies == undefined) {
                enemies = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
            }
        } else if (creep.room.controller != undefined || creep.room.controller.owner != undefined ||
            creep.room.controller.safeMode == false) {


            // var enemies = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter : (s) => s.structureType == })

            var enemies = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_TOWER
            });

            if (enemies == undefined) {
                enemies = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
                    filter: (s) => s.structureType != STRUCTURE_CONTROLLER &&
                        s.structureType != STRUCTURE_SPAWN
                });
            }

            if (enemies == undefined) {
                enemies = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
            }

            // if (enemies == undefined) {
            //     enemies = creep.pos.findClosestByPath(FIND_HOSTILE_SPAWNS);
            // }
        }

        // console.log(enemies);


        if (enemies != undefined) {
            if (creep.attack(enemies) == ERR_NOT_IN_RANGE) {
                creep.moveTo(enemies);
            }
        } else {


            if (count >= 5) {
                Game.spawns.W27S47Spawn1.memory.patrolAttack = true;
            }

            if (count <= 1) {
                Game.spawns.W27S47Spawn1.memory.patrolAttack = false;
            }

            if (Game.spawns.W27S47Spawn1.memory.patrolAttack == true){
                creep.moveTo(new RoomPosition(36, 5, 'W28S49'));
            }



            if (Game.spawns.W27S47Spawn1.memory.patrolAttack == false) {
                var roomsToInvestigate = new Array();

                let roomToInvestigate0 = new Map;

                roomToInvestigate0.set('roomToInvestigateName', 'W29S49');
                roomToInvestigate0.set('roomToInvestigateX', 42);
                roomToInvestigate0.set('roomToInvestigateY', 13);


                let roomToInvestigate1 = new Map;
                roomToInvestigate1.set('roomToInvestigateName', 'W27S49');
                roomToInvestigate1.set('roomToInvestigateX', 5);
                roomToInvestigate1.set('roomToInvestigateY', 35);

                // roomToInvestigate0.set('roomToInvestigateName', 'W29S47');
                // roomToInvestigate0.set('roomToInvestigateX', 40);
                // roomToInvestigate0.set('roomToInvestigateY', 38);
                //

                // let roomToInvestigate1 = new Map;
                // roomToInvestigate1.set('roomToInvestigateName', 'W28S49');
                // roomToInvestigate1.set('roomToInvestigateX', 35);
                // roomToInvestigate1.set('roomToInvestigateY', 10);

                roomsToInvestigate.push(roomToInvestigate0);
                roomsToInvestigate.push(roomToInvestigate1);


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
                            if (i < roomsToInvestigate.length - 1) {
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

                creep.moveTo(new RoomPosition(creep.memory.roomToInvestigateX, creep.memory.roomToInvestigateY, creep.memory.roomToInvestigateName));
            }
        }
    }

};