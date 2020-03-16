module.exports = {

    extensionsNeedEnergy: function (creep) {

        var extenstionsNeedEnergy = new Array();

        extenstionsNeedEnergy = creep.room.find(FIND_MY_STRUCTURES, {
            filter: (s) => s.structureType == STRUCTURE_EXTENSION && s.energy < s.energyCapacity
        });

        return extenstionsNeedEnergy;
    },

    containersNeedEnergy: function (creep) {

        var containerNeedEnergy = new Array();

        containerNeedEnergy = creep.room.find(FIND_STRUCTURES, {
            filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.getUsedCapacity() < 2000
        });

        return containerNeedEnergy;
    },

    closestExtensionOrSpawn: function (creep) {
        var structureToRefill = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
            filter: (s) =>
                (s.structureType == STRUCTURE_EXTENSION || s.structureType == STRUCTURE_SPAWN) && s.energy < s.energyCapacity
        });
        return structureToRefill;
    },

    /* BACKUP
    closestTowerNeedPopupSameRoom: function (creep) {
        var tower = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TOWER && s.energy < s.energyCapacity - 250});
        return tower;
    },
*/
    closestTowerNeedPopupSameRoom: function (creep) {
        var tower = creep.pos.findClosestByPath(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TOWER && s.energy < s.energyCapacity - 250});
        return tower;
    },

    closestStorageOrContainerNeedPopupSameRoom: function (creep) {
        var storage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: (s) => (s.structureType == STRUCTURE_STORAGE && s.store[RESOURCE_ENERGY] < 500000)
                || (s.structureType == STRUCTURE_CONTAINER && s.getUsedCapacity() < 2000)
        });
        return storage;
    },

    closestLabNeedEnergy: function (creep) {
        var lab = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
            filter: (s) => s.structureType == STRUCTURE_LAB &&
                s && s.energy <= 1500
        });
        return lab;
    }
};