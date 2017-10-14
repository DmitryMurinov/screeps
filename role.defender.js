module.exports = {

    run: function (creep) {

        var enemies = undefined;

        var enemiesToExclude;

        if (!creep.memory.healAvailable) {
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
                    if ((bodyPart.type == (TOUGH || RANGED_ATTACK)) && bodyPart.boost == undefined) {
                        creep.memory.needBoost = true;
                    }
                }
                if (creep.memory.needBoost == false) {
                    creep.room.memory.labsBoost = false;
                }
            }
        } else {

            var enemy;

            if (enemy == undefined) {
                enemy = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {
                    filter:
                        (c) => c.owner.username != 'Source Keeper'
                });
            }

            if (enemy != undefined) {

                var rampart = enemy.pos.findClosestByRange(FIND_MY_STRUCTURES, {filter: (s) =>
                s.structureType == STRUCTURE_RAMPART /*&&
                Game.rooms[s.room.name].find(FIND_STRUCTURES, { filter : (si) => si.pos == s.pos &&
                    si.structureType != STRUCTURE_RAMPART && si.structureType != STRUCTURE_CONTAINER &&
                    si.structureType != STRUCTURE_ROAD
                }).length == 0 &&
                    Game.rooms[s.room.name].find(FIND_CREEPS, { filter : (c) => c.pos == c.pos
                }).length == 0*/
                });

                if (creep.rangedAttack(enemy) == ERR_NOT_IN_RANGE) {
                    if (creep.memory.healAvailable && creep.hits < creep.hitsMax) {
                        creep.heal(creep);
                    }
                    creep.moveTo(rampart.pos);
                }

            } else {
                if (creep.memory.healAvailable && creep.hits < creep.hitsMax) {
                    creep.heal(creep);
                }
            }

        }
    }

};