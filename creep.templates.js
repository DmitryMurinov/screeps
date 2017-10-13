module.exports = {

    creepConstructor: function (room, spawnName, template, memory) {

        var createString = "Game.spawns." + spawnName + ".createCreep(" + template + ", undefined," +
            memory + ");";

        return createString;
    },


    lev1: function (creepType) {

        var basicCreep = "[WORK, WORK, CARRY, MOVE]";

        if (creepType == 'basicCreep') {
            return basicCreep;
        } else {
            return "check creepTypes lev 1";
        }

    },

    lev2: function (creepType) {

        var basicCreep = "[WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE]";

        var basicCreepOuter = "[WORK, WORK, WORK, CARRY, MOVE, MOVE]";

        var pureHarvester = "[WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE]";

        var courier = "[CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, MOVE]";

        var upgrader = "[WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE]";

        var outerClaimerLogic = "[CLAIM, MOVE, MOVE, MOVE, MOVE]";

        var outerCourierLogic = "[CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, MOVE]";

        var attackerLogic = "[ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE]";


        if (creepType == 'basicCreep') {
            return basicCreep;
        } else if (creepType == 'pureHarvester') {
            return pureHarvester;
        } else if (creepType == 'courier') {
            return courier;
        } else if (creepType == 'upgrader') {
            return upgrader;
        } else if (creepType == 'outerClaimerLogic') {
            return outerClaimerLogic;
        } else if (creepType == 'outerCourierLogic') {
            return outerCourierLogic;
        } else if (creepType == 'attackerLogic') {
            return attackerLogic;
        } else if (creepType == 'basicCreepOuter') {
            return basicCreepOuter;
        } else {
            return "check creepTypes lev 2";
        }

    },

    lev3: function (creepType) {

        //max 800

        var basicCreep = "[WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]";

        var pureHarvester = "[WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE]";

        var courier = "[CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE]";

        var upgrader = "[WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE]";

        var outerClaimerLogic = "[CLAIM, MOVE, MOVE, MOVE, MOVE]";

        var controllerAttacker = "[CLAIM, MOVE, MOVE, MOVE, MOVE]";

        var outerCourierLogic = "[CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE]";

        var attackerLogic = "[ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE]";

        // var exauster = "[TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, " +
        //     "TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH," +
        //     "MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]";

        var exauster = "[TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, " +
            "MOVE, MOVE, MOVE, MOVE, " +
            "HEAL, HEAL]";

        if (creepType == 'basicCreep') {
            return basicCreep;
        } else if (creepType == 'pureHarvester') {
            return pureHarvester;
        } else if (creepType == 'courier') {
            return courier;
        } else if (creepType == 'upgrader') {
            return upgrader;
        } else if (creepType == 'outerClaimerLogic') {
            return outerClaimerLogic;
        } else if (creepType == 'outerCourierLogic') {
            return outerCourierLogic;
        } else if (creepType == 'attackerLogic') {
            return attackerLogic;
        } else if (creepType == 'exauster') {
            return exauster;
        } else if (creepType == 'controllerAttacker') {
            return controllerAttacker;
        } else {
            return "check creepTypes lev 3";
        }
    },

    lev4: function (creepType) {

        //max 1300

        var outerHarvesterLogic = "[WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY," +
            "CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]";

        var attackerLogic = "[TOUGH, TOUGH, TOUGH, TOUGH, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, " +
            "MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]";

        var basicCreep = "[WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]";

        var dismantilist = "[WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE]";

        var basicCreepOuter = "[WORK, WORK, WORK, CARRY, MOVE, MOVE]";

        var pureHarvester = "[WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE]";

        var courier = "[CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, " +
            "CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE]";

        var upgrader = "[WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY" +
            ", MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]";

        var outerClaimerLogic = "[CLAIM, CLAIM, MOVE, MOVE]";

        var outerCourierLogic = "[CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, " +
            "CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE]";

        if (creepType == 'basicCreep') {
            return basicCreep;
        } else if (creepType == 'outerHarvesterLogic') {
            return outerHarvesterLogic;
        } else if (creepType == 'outerCourierLogic') {
            return outerCourierLogic;
        } else if (creepType == 'pureHarvester') {
            return pureHarvester;
        } else if (creepType == 'courier') {
            return courier;
        } else if (creepType == 'basicCreepOuter') {
            return basicCreepOuter;
        } else if (creepType == 'upgrader') {
            return upgrader;
        } else if (creepType == 'outerClaimerLogic') {
            return outerClaimerLogic;
        } else if (creepType == 'attackerLogic') {
            return attackerLogic;
        } else if (creepType == 'dismantilist') {
            return dismantilist;
        } else {
            return "check creepTypes lev 4";
        }

    },

    lev5: function (creepType) {

        //max 1800

        var outerHarvesterLogic = "[WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY," +
            "CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]";

        var attackerLogic = "[TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, ATTACK, MOVE" +
            ", ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE" +
            ", MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE]";

        var basicCreep = "[WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, " +
            "CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]";

        var pureHarvester = "[WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]";

        var pureMiner = "[WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK," +
            "WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]";

        var courier = "[CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, " +
            "CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE" +
            ", CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE]";

        var upgrader = "[WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY" +
            ", MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]";

        var outerClaimerLogic = "[CLAIM, CLAIM, MOVE, MOVE, MOVE, MOVE]";

        var outerCourierLogic = "[CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, " +
            "CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE" +
            ", CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE]";

        var basicCreepOuter = "[WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, " +
            "MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]";

        var controllerAttacker = "[TOUGH, TOUGH, TOUGH, CLAIM, CLAIM, " +
            "MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, HEAL]";

        if (creepType == 'basicCreep') {
            return basicCreep;
        } else if (creepType == 'outerHarvesterLogic') {
            return outerHarvesterLogic;
        } else if (creepType == 'pureHarvester') {
            return pureHarvester;
        } else if (creepType == 'courier') {
            return courier;
        } else if (creepType == 'upgrader') {
            return upgrader;
        } else if (creepType == 'outerClaimerLogic') {
            return outerClaimerLogic;
        } else if (creepType == 'outerCourierLogic') {
            return outerCourierLogic;
        } else if (creepType == 'pureMiner') {
            return pureMiner;
        } else if (creepType == 'attackerLogic') {
            return attackerLogic;
        } else if (creepType == 'basicCreepOuter') {
            return basicCreepOuter;
        } else if (creepType == 'controllerAttacker') {
            return controllerAttacker;
        } else {
            return "check creepTypes lev 5";
        }

    },

    lev6: function (creepType) {

        //max 2300
        //Updated:
        var attackerLogic = "[TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, " +
            "MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, ATTACK, MOVE" +
            ", ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE" +
            ",  ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, HEAL, MOVE]";

        var medicLogic = "[TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE," +
            "HEAL, HEAL, HEAL, HEAL, HEAL, HEAL]";

        var pureMiner = "[WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK," +
            "WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE]";

        var basicCreep = "[WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK," +
            "CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]";

        var upgrader = "[WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK" +
            ", WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK" +
            ", CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]";

        var controllerAttacker = "[TOUGH, TOUGH, TOUGH, TOUGH, HEAL, HEAL, HEAL, HEAL, CLAIM, " +
            "MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]";

        var dismantilist = "[TOUGH, TOUGH, TOUGH, TOUGH, WORK, WORK, " +
            "WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,  WORK, WORK," +
            "MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE," +
            "MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]";

        //Need to update:
        var outerHarvesterLogic = "[WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY," +
            "CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]";

        var pureHarvester = "[WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]";

        var courier = "[CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, " +
            "CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, " +
            "CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE]";

        var outerClaimerLogic = "[CLAIM, CLAIM, MOVE, MOVE, MOVE, MOVE]";

        var outerCourierLogic = "[CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, " +
            "CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE" +
            ", CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE" +
            ", CARRY, CARRY, MOVE]";

        if (creepType == 'basicCreep') {
            return basicCreep;
        } else if (creepType == 'outerHarvesterLogic') {
            return outerHarvesterLogic;
        } else if (creepType == 'pureHarvester') {
            return pureHarvester;
        } else if (creepType == 'courier') {
            return courier;
        } else if (creepType == 'pureMiner') {
            return pureMiner;
        } else if (creepType == 'upgrader') {
            return upgrader;
        } else if (creepType == 'outerClaimerLogic') {
            return outerClaimerLogic;
        } else if (creepType == 'outerCourierLogic') {
            return outerCourierLogic;
        } else if (creepType == 'attackerLogic') {
            return attackerLogic;
        } else if (creepType == 'medicLogic') {
            return medicLogic;
        } else if (creepType == 'controllerAttacker') {
            return controllerAttacker;
        } else if (creepType == 'dismantilist') {
            return dismantilist;
        } else {
            return "check creepTypes lev 6";
        }

    },

    lev7: function (creepType) {

        //max 5600

        //Updated:
        var attackerLogic = "[ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, " +
            "ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, " +
            "ATTACK, MOVE, ATTACK, MOVE]";

        var medicLogic = "[HEAL, MOVE, HEAL, MOVE, HEAL, MOVE, HEAL, MOVE, HEAL, MOVE, HEAL, MOVE, HEAL, MOVE]";

        var pureMiner = "[WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK," +
            "WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]";

        var controllerAttacker = "[TOUGH, TOUGH, TOUGH, TOUGH, HEAL, HEAL, HEAL, HEAL, CLAIM, " +
            "MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, " +
            "CLAIM, MOVE, CLAIM, MOVE, CLAIM, MOVE, CLAIM, MOVE, CLAIM, MOVE]";

        var outerCourierLogic = "[CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, " +
            "CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE" +
            ", CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE" +
            ", CARRY, CARRY, MOVE, CARRY, CARRY, MOVE]";

        //Need to update:
        var outerHarvesterLogic = "[WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY," +
            "CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]";

        var dismantilist = "[TOUGH, TOUGH, TOUGH, TOUGH, WORK, WORK, " +
            "WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,  WORK, WORK," +
            "MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE," +
            "MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]";

        var basicCreep = "[WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, " +
            "CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,CARRY, CARRY,CARRY, CARRY,CARRY, CARRY,CARRY, CARRY,CARRY, CARRY,CARRY, CARRY,CARRY, CARRY," +
            "MOVE, MOVE, MOVE, MOVE,MOVE, MOVE,MOVE, MOVE,MOVE, MOVE,MOVE, MOVE,MOVE, MOVE,MOVE, MOVE,MOVE, MOVE,MOVE, MOVE,MOVE, MOVE,MOVE, MOVE,MOVE, MOVE,]";

        var pureHarvester = "[WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]";

        var courier = "[CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, " +
            "CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE" +
            ", CARRY, CARRY, MOVE, CARRY, CARRY, MOVE, CARRY, CARRY, MOVE]";

        var upgrader = "[WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY" +
            ", MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]";

        var outerClaimerLogic = "[CLAIM, CLAIM, MOVE, MOVE, MOVE, MOVE]";


        //MikiOnEs design move x 25 attack x 19 heal x 6
        var keeperKiller = "[MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE," +
            "MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE," +
            "MOVE,MOVE,MOVE,MOVE,MOVE,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK," +
            "ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK,ATTACK," +
            "ATTACK,ATTACK,ATTACK,ATTACK, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL]";


        if (creepType == 'basicCreep') {
            return basicCreep;
        } else if (creepType == 'outerHarvesterLogic') {
            return outerHarvesterLogic;
        } else if (creepType == 'pureHarvester') {
            return pureHarvester;
        } else if (creepType == 'courier') {
            return courier;
        } else if (creepType == 'pureMiner') {
            return pureMiner;
        } else if (creepType == 'upgrader') {
            return upgrader;
        } else if (creepType == 'outerClaimerLogic') {
            return outerClaimerLogic;
        } else if (creepType == 'outerCourierLogic') {
            return outerCourierLogic;
        } else if (creepType == 'attackerLogic') {
            return attackerLogic;
        } else if (creepType == 'medicLogic') {
            return medicLogic;
        } else if (creepType == 'keeperKiller') {
            return keeperKiller;
        } else if (creepType == 'controllerAttacker') {
            return controllerAttacker;
        } else if (creepType == 'dismantilist') {
            return dismantilist;
        } else {
            return "check creepTypes lev 7";
        }

    }


};
