module.exports = {

    run: function (creep) {

        // var startCpu = Game.cpu.getUsed();
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
                    if ((bodyPart.type == WORK || bodyPart.type == TOUGH) && bodyPart.boost == undefined) {
                        creep.memory.needBoost = true;
                    }
                }
                if (creep.memory.needBoost == false) {
                    creep.room.memory.labsBoost = false;
                }
            }
        } else {

            //TransferLogic:
            if (creep.pos.x == creep.memory.roomToWorkX1 && creep.pos.y == creep.memory.roomToWorkY1 && creep.room.name == creep.memory.roomToWorkName1) {
                creep.memory.arrived1 = true;
            } else if (creep.pos.x == creep.memory.roomToWorkX2 && creep.pos.y == creep.memory.roomToWorkY2 && creep.room.name == creep.memory.roomToWorkName2) {
                creep.memory.arrived2 = true;
            } else if (creep.pos.x == creep.memory.roomToWorkX3 && creep.pos.y == creep.memory.roomToWorkY3 && creep.room.name == creep.memory.roomToWorkName3) {
                creep.memory.arrived3 = true;
            }

            if (!creep.memory.roomToWorkName2) {
                creep.memory.arrived2 = true;
            }
            if (!creep.memory.roomToWorkName3) {
                creep.memory.arrived3 = true;
            }


            if (creep.memory.arrived1 == false) {
                creep.moveTo(new RoomPosition(creep.memory.roomToWorkX1, creep.memory.roomToWorkY1, creep.memory.roomToWorkName1));
            } else if (creep.memory.arrived2 == false) {
                creep.moveTo(new RoomPosition(creep.memory.roomToWorkX2, creep.memory.roomToWorkY2, creep.memory.roomToWorkName2));
            } else if (creep.memory.arrived3 == false) {
                creep.moveTo(new RoomPosition(creep.memory.roomToWorkX3, creep.memory.roomToWorkY3, creep.memory.roomToWorkName3));
            }


            //Main logic

            if (creep.room.name == creep.memory.roomToWorkName3) {
                creep.memory.arrived3 = false;
            }

            var arrived = creep.memory.arrived3;

            if (creep.memory.arrived1 && creep.memory.arrived2 && creep.memory.arrived3) {

                var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (s) => s.structureType != STRUCTURE_CONTROLLER
                        && s.structureType != STRUCTURE_KEEPER_LAIR
                        && s.structureType != STRUCTURE_STORAGE
                        // && s.pos.x == 38 && s.pos.y == 34
                });

                if (structure) {
                    if (creep.dismantle(structure) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(structure);
                    }
                } else {
                    var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);

                    if (constructionSite) {
                        creep.moveTo(constructionSite);
                    }
                }
            }
        }
    }

}
;