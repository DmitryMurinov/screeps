var creepTemplates = require('creep.templates');
var creepCreate = require('creep.create');
var market = require('market');

module.exports = {

    towers: function (roomsList, gameTime) {

        for (let i in roomsList) {
            var roomName = roomsList[i];
            var controllerLevel = Game.rooms[roomName].controller.level;

            var wallsLevel = 0;
            if (controllerLevel == 2) {
                wallsLevel = 25000;
            } else if (controllerLevel == 3) {
                wallsLevel = 55000;
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

            this.towersDefendAndRepairRoom(roomName, wallsLevel);

            if (controllerLevel >= 4 && gameTime.substring(gameTime.length - 2, gameTime.length) == '00') {
                // this.placeRampartForStructure(roomName);
                this.placeRampartForController(roomName);
            }

        }
    },

    towersDefendAndRepairRoom: function (roomName, wallsLevel) {
        var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);

        var towers = Game.rooms[roomName].find(
            FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});

        if (towers.length > 0) {

            if (hostiles.length > 0) {
                var username = hostiles[0].owner.username;
                Game.notify(`User ${username} spotted in room ${roomName}`);
                towers.forEach(tower => tower.attack(hostiles[0]));
            } else {

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
    },

    placeRampartForStructure: function (roomName) {
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
        }
    },

    placeRampartForController: function (roomName) {
        var rampartSites = Game.rooms[roomName].find(FIND_CONSTRUCTION_SITES, {filter: (cs) => cs.structureType == STRUCTURE_RAMPART});
        if (rampartSites.length == 0) {
            var x;
            var y;
            var terrain;
            var terrainOk = false;
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

