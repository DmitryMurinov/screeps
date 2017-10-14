module.exports = {

    //Constants

    roomsList: function () {

        var roomsList = new Array();

        roomsList.push('E53N16');
        roomsList.push('E57N15');
        roomsList.push('E52N19');
        roomsList.push('E56N17');
        roomsList.push('E55N13');

        return roomsList;
    },

    rolesList: function () {

        var rolesList = new Array();

        rolesList.push('total');
        rolesList.push('basicCreep');
        rolesList.push('pureHarvester');
        rolesList.push('pureMiner');
        rolesList.push('courier');
        rolesList.push('courierMiner');
        rolesList.push('upgrader');
        rolesList.push('exauster');
        // rolesList.push('basicCreepOuter');
        rolesList.push('outerHarvesterLogic');
        rolesList.push('outerHarvesterLogic1');
        rolesList.push('outerHarvesterLogic2');
        rolesList.push('outerHarvesterLogic3');
        rolesList.push('outerHarvesterLogic4');
        rolesList.push('outerHarvesterLogic5');
        // rolesList.push('outerHarvesterLogic6');
        // rolesList.push('outerHarvesterLogic7');
        // rolesList.push('outerHarvesterLogic8');
        rolesList.push('outerCourierLogic');
        rolesList.push('outerCourierLogic1');
        rolesList.push('outerCourierLogic2');
        rolesList.push('outerCourierLogic3');
        rolesList.push('outerCourierLogic4');
        rolesList.push('outerCourierLogic5');
        // rolesList.push('outerCourierLogic6');
        // rolesList.push('outerCourierLogic7');
        // rolesList.push('outerCourierLogic8');
        // rolesList.push('outerClaimerLogic');
        rolesList.push('attackerLogic');
        rolesList.push('sieger');
        rolesList.push('bankir');
        rolesList.push('exauster');
        rolesList.push('basicCreepOuter1');
        rolesList.push('basicCreepOuter2');
        rolesList.push('basicCreepOuter3');
        rolesList.push('basicCreepOuter4');
        rolesList.push('basicCreepOuter5');
        rolesList.push('basicCreepOuter6');
        rolesList.push('basicCreepOuter7');
        rolesList.push('basicCreepOuter8');
        rolesList.push('outerReserver1');
        rolesList.push('outerReserver2');
        rolesList.push('outerReserver3');
        rolesList.push('outerReserver4');
        rolesList.push('outerReserver5');
        rolesList.push('keeperKiller1');
        rolesList.push('keeperKiller2');
        rolesList.push('keeperKiller3');
        rolesList.push('keeperKiller4');
        rolesList.push('keeperKiller5');
        rolesList.push('attackerLogic1');
        rolesList.push('attackerLogic2');
        rolesList.push('attackerLogic3');
        rolesList.push('attackerLogic4');
        rolesList.push('attackerLogic5');
        rolesList.push('attackerLogic6');
        rolesList.push('attackerLogic7');
        rolesList.push('attackerLogic8');
        rolesList.push('rangedAttacker1');
        rolesList.push('controllerAttacker1');
        rolesList.push('controllerAttacker2');
        rolesList.push('dismantilist1');
        rolesList.push('dismantilist2');
        rolesList.push('medic1');
        rolesList.push('medic2');

        return rolesList;
    },

    resourcesListCatalized: function () {

        var resourcesListCatalized = new Array();

        resourcesListCatalized.push(RESOURCE_CATALYZED_UTRIUM_ALKALIDE);
        resourcesListCatalized.push(RESOURCE_CATALYZED_KEANIUM_ACID);
        resourcesListCatalized.push(RESOURCE_CATALYZED_KEANIUM_ALKALIDE);
        resourcesListCatalized.push(RESOURCE_CATALYZED_LEMERGIUM_ACID);
        resourcesListCatalized.push(RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE);
        resourcesListCatalized.push(RESOURCE_CATALYZED_ZYNTHIUM_ACID);
        resourcesListCatalized.push(RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE);
        resourcesListCatalized.push(RESOURCE_CATALYZED_GHODIUM_ACID);
        resourcesListCatalized.push(RESOURCE_CATALYZED_GHODIUM_ALKALIDE);

        return resourcesListCatalized;

    },

    resourcesList: function () {

        var resourcesList = new Array();

        resourcesList.push(RESOURCE_ENERGY);
        resourcesList.push(RESOURCE_OXYGEN);
        resourcesList.push(RESOURCE_HYDROGEN);
        resourcesList.push(RESOURCE_UTRIUM);
        resourcesList.push(RESOURCE_KEANIUM);
        resourcesList.push(RESOURCE_LEMERGIUM);
        resourcesList.push(RESOURCE_ZYNTHIUM);
        resourcesList.push(RESOURCE_HYDROXIDE);
        resourcesList.push(RESOURCE_ZYNTHIUM_KEANITE);
        resourcesList.push(RESOURCE_UTRIUM_LEMERGITE);
        resourcesList.push(RESOURCE_GHODIUM);
        resourcesList.push(RESOURCE_UTRIUM_HYDRIDE);
        resourcesList.push(RESOURCE_UTRIUM_OXIDE);
        resourcesList.push(RESOURCE_KEANIUM_HYDRIDE);
        resourcesList.push(RESOURCE_KEANIUM_OXIDE);
        resourcesList.push(RESOURCE_LEMERGIUM_HYDRIDE);
        resourcesList.push(RESOURCE_LEMERGIUM_OXIDE);
        resourcesList.push(RESOURCE_ZYNTHIUM_HYDRIDE);
        resourcesList.push(RESOURCE_ZYNTHIUM_OXIDE);
        resourcesList.push(RESOURCE_GHODIUM_HYDRIDE);
        resourcesList.push(RESOURCE_GHODIUM_OXIDE);
        resourcesList.push(RESOURCE_UTRIUM_ACID);
        resourcesList.push(RESOURCE_UTRIUM_ALKALIDE);
        resourcesList.push(RESOURCE_KEANIUM_ACID);
        resourcesList.push(RESOURCE_KEANIUM_ALKALIDE);
        resourcesList.push(RESOURCE_LEMERGIUM_ACID);
        resourcesList.push(RESOURCE_LEMERGIUM_ALKALIDE);
        resourcesList.push(RESOURCE_ZYNTHIUM_ACID);
        resourcesList.push(RESOURCE_ZYNTHIUM_ALKALIDE);
        resourcesList.push(RESOURCE_GHODIUM_OXIDE);
        resourcesList.push(RESOURCE_GHODIUM_ALKALIDE);
        resourcesList.push(RESOURCE_CATALYST);
        resourcesList.push(RESOURCE_CATALYZED_UTRIUM_ACID);
        resourcesList.push(RESOURCE_CATALYZED_UTRIUM_ALKALIDE);
        resourcesList.push(RESOURCE_CATALYZED_KEANIUM_ACID);
        resourcesList.push(RESOURCE_CATALYZED_KEANIUM_ALKALIDE);
        resourcesList.push(RESOURCE_CATALYZED_LEMERGIUM_ACID);
        resourcesList.push(RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE);
        resourcesList.push(RESOURCE_CATALYZED_ZYNTHIUM_ACID);
        resourcesList.push(RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE);
        resourcesList.push(RESOURCE_CATALYZED_GHODIUM_ACID);
        resourcesList.push(RESOURCE_CATALYZED_GHODIUM_ALKALIDE);

        return resourcesList;

    },
    //Calculations

    pureHarvsSameRoom: function (creep, energy) {
        var allPureHarvs = creep.room.find(FIND_MY_CREEPS, {filter: (c) => c.memory.role == 'pureHarvester' && _.sum(c.carry) >= energy});
        return allPureHarvs;
    },

    outerHarvsSameRoom: function (creep, energy) {
        var allOuterHarvs = creep.room.find(FIND_MY_CREEPS, {filter: (c) => c.memory.role == 'outerHarvester' && _.sum(c.carry) >= energy});
        return allOuterHarvs;
    },

    towersNeedPopupSameRoom: function (creep) {
        var towers = creep.room.find(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_TOWER && s.energy < s.energyCapacity - 100});
        return towers;
    },

    containersNeedPopupSameRoom: function (creep) {
        var containers = creep.room.find(FIND_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_CONTAINER && s.energy < s.energyCapacity});
        return containers;
    },

    countAllCreeps: function () {

        // var cpuStart = Game.cpu.getUsed();

        roomsList = this.roomsList();

        rolesList = this.rolesList();

        var rolesByRooms = new Object();

        for (var i in roomsList) {
            var room = roomsList[i];
            for (var j in rolesList) {
                var role = rolesList[j];
                rolesByRooms[room + ";" + role] = 0;
            }
        }

        for (var name in Game.creeps) {
            var c = Game.creeps[name];
            if (c.my && c.hits > 0) {

                var totalCount = 0;
                if(rolesByRooms[c.memory.origination + ";total"] != null &&
                    rolesByRooms[c.memory.origination + ";total"] != undefined) {
                    totalCount = rolesByRooms[c.memory.origination + ";total"];
                }
                totalCount = totalCount + 1;

                rolesByRooms[c.memory.origination + ";total"] = totalCount;

                var count = 0;
                if(rolesByRooms[c.memory.origination + ";" + c.memory.role] != null &&
                    rolesByRooms[c.memory.origination + ";" + c.memory.role] != undefined) {
                    count = rolesByRooms[c.memory.origination + ";" + c.memory.role];
                }

                count = count + 1;
                rolesByRooms[c.memory.origination + ";" + c.memory.role] = count;
            }
        }

        return rolesByRooms;

    },

    totalLabs: function (roomName) {
        totalLabsActual = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_LAB});
        if (totalLabsActual.length == 10) {
            return 10;
        } else if (totalLabsActual.length >= 7 && totalLabsActual.length < 10) {
            return 6;
        } else if (totalLabsActual.length >= 3 && totalLabsActual.length < 7) {
            return 3;
        } else {
            return 0;
        }
    },

    countAllReserves: function () {

        // var cpuStart = Game.cpu.getUsed();

        roomsList = this.roomsList();

        resourcesList = this.resourcesList();

        var reservesByRooms = new Object();

        for (var i in roomsList) {
            var roomName = roomsList[i];
            for (var j in resourcesList) {
                var resource = resourcesList[j];

                var x = 0;
                if(Game.rooms[roomName].storage && Game.rooms[roomName].storage.store[resource] != undefined){
                    x = Game.rooms[roomName].storage.store[resource];
                }
                if(Game.rooms[roomName].terminal && Game.rooms[roomName].terminal.store[resource] != undefined){
                    x += Game.rooms[roomName].terminal.store[resource];
                }

                var labs = Game.rooms[roomName].find(FIND_MY_STRUCTURES, {filter: (s) => s.structureType == STRUCTURE_LAB});
                if(labs.length > 0){
                    for(var k in labs){
                        var lab = labs[k];
                        if(lab.mineralAmount > 0 && lab.mineralType == resource){
                            x += lab.mineralAmount;
                        }
                    }
                }

                var total = 0;
                if(reservesByRooms["total;" + resource]){
                    total = reservesByRooms["total;" + resource];
                }
                total += x;

                reservesByRooms["total;" + resource] = total;

                reservesByRooms[roomName + ";" + resource] = x;
            }
        }

        return reservesByRooms;
    }

};