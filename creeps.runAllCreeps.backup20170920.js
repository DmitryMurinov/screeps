var roleHarv280AndUpgradeRC = require('zzz.role.harvTo280ThenUpgradeRC');
var rolePureHarvester = require('role.pureHarvester');
var rolePureHarvesterLink = require('zzz.role.pureHarvesterLink');
var roleOuterHarvester = require('zzz.role.outerHarvester');
var roleOuterHarvesterLogic = require('role.outerHarvesterLogic');
var roleCourier = require('role.courier');
var roleOuterCourier = require('zzz.role.outerCourier');
var roleOuterCourierLogic = require('role.outerCourierLogic');
var roleUpgrader = require('role.upgrader');
var roleOuterUpgrader2 = require('zzz.role.outerUpgrader2');

var roleBuilder = require('zzz.role.builder');
var roleRepairer = require('role.repairer');
var roleAttacker = require('zzz.role.attacker');
var roleTowerPopUp = require('role.towerpopup');
// var roleOuterRepairer = require('role.outerRepairer');
var roleOuterRepairer2 = require('zzz.role.outerRepairer2');
var roleOuterClaimer = require('zzz.role.outerClaimer');
var roleOuterClaimerLogic = require('role.outerClaimerLogic');
var roleBasicCreep = require('role.basicCreep');
var roleBasicCreepOuter = require('role.basicCreepOuter');
var roleAttackerLogic = require('role.attackerLogic');
var rolePatrolLogic = require('role.patrolLogic');
var roleRefillerWar = require('role.refillerWar');
var roleSiegerLogic = require('role.sieger');
var roleMedicLogic = require('role.medic');
var roleBankirLogic = require('role.bankir');
var rolePureMiner = require('role.pureMiner');
var roleCourierMine = require('role.courierMine');
var roleExauster = require('role.exauster');

module.exports = {

    run: function () {

        for (let name in Game.creeps) {

            var creep = Game.creeps[name];


            // str.indexOf('word') !== -1

            if (creep.memory.role == 'attacker') {
                roleAttacker.run(creep);
            } else if (creep.memory.role == 'attackerLogic') {
                roleAttackerLogic.run(creep);
            } else if (creep.memory.role == 'patrolLogic') {
                rolePatrolLogic.run(creep);
            } else if (creep.memory.role == 'refillerWar') {
                roleRefillerWar.run(creep);
            } else if (creep.memory.role == 'pureMiner') {
                rolePureMiner.run(creep);
            } else if (creep.memory.role == 'courierMine') {
                roleCourierMine.run(creep);
            } else if (creep.memory.role == 'siegerLogic') {

            } else if (creep.memory.role == 'medicLogic') {
                roleMedicLogic.run(creep);
            } else if (creep.memory.role == 'bankirLogic') {
                roleBankirLogic.run(creep);
            }
            if (creep.memory.role == 'upgrader') {
                roleUpgrader.run(creep);
            // } else if (creep.memory.role == 'repairer') {
            //     roleRepairer.run(creep);
            // } else if (creep.memory.role == 'towerpopup') {
            //     roleTowerPopUp.run(creep);
            } else if (creep.memory.role == 'pureHarvester') {
                rolePureHarvester.run(creep);
            } else if (creep.memory.role == 'courier') {
                roleCourier.run(creep);
            } else if (creep.memory.role == 'outerHarvesterLogic') {
                roleOuterHarvesterLogic.run(creep);
            } else if (creep.memory.role == 'outerCourier') {
                roleOuterCourier.run(creep);
            } else if (creep.memory.role == 'outerCourierLogic') {
                roleOuterCourierLogic.run(creep);
            } else if (creep.memory.role == 'outerClaimerLogic') {
                roleOuterClaimerLogic.run(creep);
            } else if (creep.memory.role == 'basicCreep') {
                roleBasicCreep.run(creep);
            } else if (creep.memory.role == 'basicCreepOuter') {
                roleBasicCreepOuter.run(creep);
            } else if (creep.memory.role == 'exauster') {
                roleExauster.run(creep);
            }

        }
    }
};
