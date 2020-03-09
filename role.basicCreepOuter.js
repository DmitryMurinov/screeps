var structExtenstionsNeedEnergy = require('struct.structuresNeedEnergy');

module.exports = {

    run: function (creep) {

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

        if (creep.memory.doNothingTicks >= 5) {
            creep.memory.doNothingTicks = 0;
            creep.memory.storedPath = null;
        }

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
                    if (creep.pos.x > 0 && creep.pos.x < 49 && creep.pos.y > 0 && creep.pos.y < 49 &&
                        creep.room.name == creep.memory.roomToWorkName) {
                        creep.memory.reachedRoom1 = true;
                    }
                } else if (creep.memory.reachedRoom2 == false) {
                    creep.memory.roomToWorkX = creep.memory.roomToWorkX2;
                    creep.memory.roomToWorkY = creep.memory.roomToWorkY2;
                    creep.memory.roomToWorkName = creep.memory.roomToWorkName2;
                    if (creep.pos.x > 0 && creep.pos.x < 49 && creep.pos.y > 0 && creep.pos.y < 49 &&
                        creep.room.name == creep.memory.roomToWorkName) {
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
                        console.log(creep.name);
                        console.log(creep.room.name);
                        creep.memory.storedPath = creep.pos.findPathTo(new RoomPosition(creep.memory.roomToWorkX, creep.memory.roomToWorkY, creep.memory.roomToWorkName));
                    }
                    if (creep.memory.storedPath) {
                        var moveResult = creep.moveByPath(creep.memory.storedPath);
                    }
                    if (moveResult != OK) {
                        creep.memory.storedPath = creep.pos.findPathTo(new RoomPosition(creep.memory.roomToWorkX, creep.memory.roomToWorkY, creep.memory.roomToWorkName));
                        creep.moveByPath(creep.memory.storedPath);
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


            if (creep.memory.working == true && creep.carry.energy == 0) {
                creep.memory.working = false;
            }

            else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
                creep.memory.working = true;
                creep.memory.sourceId = null;
                creep.memory.storedPath = null;
            }

            if (creep.memory.working == true) {

                var extensionsPopup = structExtenstionsNeedEnergy.extensionsNeedEnergy(creep);

                var spawn = creep.pos.findClosestByPath(FIND_MY_SPAWNS, {filter: (s) => s.room.name == creep.room.name});

                var wallMaxRepair = 250000;

                if (creep.memory.wallMaxRepair != null && creep.memory.wallMaxRepair != undefined) {
                    wallMaxRepair = creep.memory.wallMaxRepair;
                }

                var structure;

                if (creep.memory.structureId != undefined && creep.memory.structureId != null) {
                    structure = Game.getObjectById(creep.memory.structureId);
                }

                if (structure) {
                    if (structure.hits > (structure.hitsMax / 5 * 4.8) || structure.hits > wallMaxRepair) {
                        creep.memory.structureId = undefined;
                        structure = undefined;
                    }
                }

                if (creep.memory.structureId == undefined || creep.memory.structureId == null) {

                    if (structure == undefined || structure == null) {
                        structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                            filter: (s) =>
                                s.structureType != STRUCTURE_CONTROLLER && s.structureType != STRUCTURE_WALL && s.hits <= (s.hitsMax / 5 * 4) && s.hits <= (wallMaxRepair - 5000)
                        });
                    }

                    if (structure != undefined && structure != null) {
                        creep.memory.structureId = structure.id;
                    }
                }

                var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES, {
                    filter: (s) => s.room.name == creep.room.name
                        && s.structureType != STRUCTURE_ROAD
                });

                if (!constructionSite) {
                    constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES, {filter: (s) => s.room.name == creep.room.name});
                }

                if (creep.memory.working == true && structure != null && structure != undefined) {
                    if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(structure);
                    }
                } else if (creep.memory.working == true && constructionSite != null) {
                    if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(constructionSite);
                    }
                } else {
                    if (creep.memory.working == true && creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller);
                    }
                }
            }

            if (creep.carry.energy < creep.carryCapacity && creep.memory.working == false) {

                var droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
                    filter: (r) => r.amount > 50 && r.resourceType == RESOURCE_ENERGY
                });

                if (droppedEnergy != null && droppedEnergy != undefined) {
                    if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(droppedEnergy);
                    }
                } else {

                    var source;

                    source = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: (s) => s.structureType == STRUCTURE_CONTAINER
                            && _.sum(s.store) >= creep.carryCapacity
                    });

                    if (source && !creep.memory.sourceId) {
                        creep.memory.sourceId = source.id;
                    }

                    if (source && source.id == creep.memory.sourceId) {
                        if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            if (!creep.memory.storedPath) {
                                creep.memory.storedPath = creep.pos.findPathTo(source);
                            }
                            creep.moveByPath(creep.memory.storedPath);
                        }
                    } else if (source) {
                        creep.memory.sourceId = source.id;
                        if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.memory.storedPath = creep.pos.findPathTo(source);
                        }
                        creep.moveByPath(creep.memory.storedPath);
                    }

                    if (!source) {

                        source = creep.pos.findClosestByPath(FIND_MY_CREEPS,
                            {
                                filter: (harv) => harv.memory.role == 'outerHarvesterLogic' &&
                                    harv.pos.findInRange(FIND_MY_CREEPS, 1, {
                                        filter: (c) => c.memory.role == 'basicCreepOuter' &&
                                            c.id != creep.id
                                    }) == 0

                            });

                        if (source && !creep.memory.sourceId) {
                            creep.memory.sourceId = source.id;
                        }

                        if (source && source.id == creep.memory.sourceId && creep.pos.getRangeTo(source.pos > 1)) {
                            if (!creep.memory.storedPath) {
                                creep.memory.storedPath = creep.pos.findPathTo(source);
                            }
                            creep.moveByPath(creep.memory.storedPath);
                        } else if (source && source.id != creep.memory.sourceId) {
                            creep.memory.storedPath = creep.pos.findPathTo(source);
                            creep.moveByPath(creep.memory.storedPath);
                        }

                        if (!source) {

                            if (source && !creep.memory.sourceId) {
                                creep.memory.sourceId = source.id;
                            }

                            source = creep.pos.findClosestByPath(FIND_SOURCES, {filter: (s) => s.energy > 0});
                            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                                if (source && source.id == creep.memory.sourceId) {
                                    if (!creep.memory.storedPath) {
                                        creep.memory.storedPath = creep.pos.findPathTo(source);
                                    }
                                } else if (source) {
                                    creep.memory.storedPath = creep.pos.findPathTo(source);
                                }
                                creep.moveByPath(creep.memory.storedPath);
                            }
                        }
                    }
                }
            }
        }
    }
}
;