var sNeedEnergy = require('struct.structuresNeedEnergy');

module.exports = {

    run: function (creep) {


        if (!creep.memory.priority) {
            creep.memory.priority = 0;
        }

        if (creep.memory.working == true && _.sum(creep.carry) == 0) {
            creep.memory.working = false;
            creep.memory.energySourceId = undefined;
            creep.memory.sourceDo = undefined;
        }
        else if (creep.memory.working == false && _.sum(creep.carry) == creep.carryCapacity) {
            creep.memory.working = true;
            creep.memory.workId = undefined;
            creep.memory.workDo = undefined;
            creep.memory.priority = creep.memory.priority + 1;
            if (creep.memory.priority > 3) {
                creep.memory.priority = 0;
            }
        }

        var closestExtOrSpawnNeedEnergy;
        var tower;
        var structure;
        var constructionSite;

        if (creep.memory.working == true) {

            // if(creep.room.controller.level <= 4) {
            closestExtOrSpawnNeedEnergy = sNeedEnergy.closestExtensionOrSpawn(creep);
            // }

            tower = sNeedEnergy.closestTowerNeedPopupSameRoom(creep);

            var wallMaxRepair = 200000;

            structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (s) => s.structureType != STRUCTURE_RAMPART &&
                    s.structureType != STRUCTURE_CONTROLLER && s.hits <= (s.hitsMax / 5 * 4) && s.hits <= (wallMaxRepair - 10000)
            });

            constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES, {filter: (s) => s.room.name == creep.room.name});

            if (creep.memory.priority == 0) {
                if (closestExtOrSpawnNeedEnergy) {
                    tower = null;
                    constructionSite = null;
                    structure = null;
                } else {
                    creep.memory.priority = creep.memory.priority + 1;
                }
            }

            if (creep.memory.priority == 1) {
                if (tower) {
                    closestExtOrSpawnNeedEnergy = null;
                    constructionSite = null;
                    structure = null;
                } else {
                    creep.memory.priority = creep.memory.priority + 1;
                }
            }

            if (creep.memory.priority == 2) {
                if (constructionSite) {
                    closestExtOrSpawnNeedEnergy = null;
                    tower = null;
                    structure = null;
                } else {
                    creep.memory.priority = creep.memory.priority + 1;
                }
            }

            if (creep.memory.priority == 3) {
                // if (structure) {
                //     closestExtOrSpawnNeedEnergy = null;
                //     tower = null;
                //     constructionSite = null;
                // }
                // else {
                creep.memory.priority = 0;
                // }
            }
        }

        if (creep.room.controller.ticksToDowngrade < 1000) {
            closestExtOrSpawnNeedEnergy = null;
            tower = null;
            constructionSite = null;
            structure = null;
        }


        if (creep.memory.working == true && creep.carry.energy > 0) {
            if (creep.memory.working == true && closestExtOrSpawnNeedEnergy) {
                if (creep.transfer(closestExtOrSpawnNeedEnergy, RESOURCE_ENERGY)) {
                    creep.moveTo(closestExtOrSpawnNeedEnergy)
                }
            } else if (creep.memory.working == true && tower) {

                result = creep.transfer(tower, RESOURCE_ENERGY);

                if (result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(tower);
                }
            } else if (creep.memory.working == true && constructionSite) {
                if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(constructionSite);
                }
            } else {

                if (creep.memory.structureId != undefined && creep.memory.structureId != null) {
                    structure = Game.getObjectById(creep.memory.structureId);
                }

                if (structure != undefined && structure != null) {
                    if (structure.hits > (structure.hitsMax / 5 * 4.8) || structure.hits > wallMaxRepair) {
                        creep.memory.structureId = undefined;
                        structure = undefined;
                    }
                }

                if (creep.memory.structureId == undefined || creep.memory.structureId == null) {

                    structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: (s) =>
                            s.structureType == STRUCTURE_CONTAINER && s.hits <= (s.hitsMax / 5 * 4) && s.hits <= (wallMaxRepair - 5000)
                    });

                    if (structure != undefined && structure != null) {
                        structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                            filter: (s) =>
                                s.structureType != STRUCTURE_CONTROLLER && s.hits <= (s.hitsMax / 5 * 4) && s.hits <= (wallMaxRepair - 5000)
                        });
                    }
                    if (structure != undefined && structure != null) {
                        creep.memory.structureId = structure.id;
                    }
                }


                if (creep.room.controller.ticksToDowngrade < 1000) {
                    constructionSite = null;
                    structure = null;
                }

                if (creep.memory.working == true && structure != null) {
                    if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(structure);
                    }
                } else if (creep.memory.working == true) {
                    if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller);
                    }
                }
            }
        }

        if (creep.memory.working == true && creep.carry.energy == 0 && _.sum(creep.carry) > 0) {
            var storage;
            if (creep.memory.storageId) {
                storage = Game.getObjectById(creep.memory.storageId);
            } else {
                storage = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_STORAGE});
                if (storage) {
                    creep.memory.storageId = storage.id;
                }
            }

            var moveResult;
            if (creep.memory.working == true) {

                var resourcesList = Object.keys(creep.carry);

                for (let i in resourcesList) {

                    var resource = resourcesList[i];

                    if (resource != 'energy') {
                        if (creep.carry[resource] > 0) {
                            var transferResult = creep.transfer(storage, resource);
                            if (transferResult == ERR_NOT_IN_RANGE) {
                                creep.moveTo(storage);
                            }
                        }
                    }
                }
            }
        }

        if (creep.carry.energy < creep.carryCapacity && creep.memory.working == false) {

            if (creep.memory.energySourceId != undefined) {
                if (creep.memory.sourceDo != undefined && creep.memory.sourceDo == 'harvest') {
                    var source = Game.getObjectById(creep.memory.energySourceId);
                    var result = creep.harvest(source);
                    if (result == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source);
                    } else if (result != OK) {
                        creep.memory.energySourceId = undefined;
                        creep.memory.sourceDo = undefined;
                    }
                }
            } else if (creep.memory.sourceDo != undefined && creep.memory.sourceDo == 'pickup') {
                var source = Game.getObjectById(creep.memory.energySourceId);
                var result = creep.pickup(source);
                if (result == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
                } else {
                    creep.memory.energySourceId = undefined;
                    creep.memory.sourceDo = undefined;
                }
            }


            var droppedEnergy = creep.pos.findClosestByPath(FIND_DROPPED_RESOURCES, {
                filter: (r) => r.amount > 2000 && r.resourceType == RESOURCE_ENERGY
            });

            if (droppedEnergy) {
                creep.memory.energySourceId = droppedEnergy.id;
                creep.memory.sourceDo = 'pickup';
                if (creep.pickup(droppedEnergy) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(droppedEnergy);
                }
            } else {

                var source = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: (s) => s.structureType == STRUCTURE_STORAGE &&
                        s.store[RESOURCE_ENERGY] > 1000
                });

                if(!source){
                    source = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: (s) => s.structureType == STRUCTURE_TERMINAL &&
                            s.store[RESOURCE_ENERGY] > 1000
                    });
                }

                if (source != undefined && source != null) {
                    if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(source);
                    }
                } else {
                    source = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                        filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 0
                    });

                    if (source != undefined && source != null) {
                        if (creep.withdraw(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(source);
                        }
                    } else {

                        source = creep.pos.findClosestByPath(FIND_SOURCES, {filter: (s) => s.energy > 0});

                        if (source) {
                            creep.memory.energySourceId = source.id;
                            creep.memory.sourceDo = 'harvest';
                        }

                        if (creep.harvest(source, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(source);
                        }
                    }
                }
            }
        }
    }
}
;