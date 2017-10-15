var rolePureHarvester = require('role.pureHarvester');
var roleOuterHarvesterLogic = require('role.outerHarvesterLogic');
var roleCourier = require('role.courier');
var roleOuterCourierLogic = require('role.outerCourierLogic');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleOuterClaimerLogic = require('role.outerClaimerLogic');
var roleBasicCreep = require('role.basicCreep');
var roleBasicCreepOuter = require('role.basicCreepOuter');
var roleAttackerLogic = require('role.attackerLogic');
var roleRefillerWar = require('role.refillerWar');
var roleSiegerLogic = require('role.sieger');
var roleMedicLogic = require('role.medic');
var roleBankir = require('role.bankir');
var rolePureMiner = require('role.pureMiner');
var roleCourierMine = require('role.courierMine');
var roleExauster = require('role.exauster');
var roleControllerAttacker = require('role.controllerAttacker');
var roleDismantalist = require('role.dismantalist');
var roleKeeperKiller = require('role.keeperKiller');
var roleOuterReserver = require('role.outerReserver');
var roleDefender = require('role.defender');
var roleRandedAttacker = require('role.RangedAttacker');

module.exports = {

    run: function (allCreepsCount, gameTime) {

        for (let name in Game.creeps) {

            var creep = Game.creeps[name];


            // str.indexOf('word') !== -1

            // console.log(creep.room.name + creep.name + creep.memory.role);

            if (creep.memory.role == 'attacker') {
                roleAttacker.run(creep);
            } else if (creep.memory.role == 'refillerWar') {
                roleRefillerWar.run(creep);
            } else if (creep.memory.role == 'defender') {
                roleDefender.run(creep);
            } else if (creep.memory.role.indexOf('rangedAttacker') !== - 1) {
                roleRandedAttacker.run(creep);
            }else if (creep.memory.role == 'pureMiner') {
                rolePureMiner.run(creep);
            } else if (creep.memory.role == 'courierMine') {
                roleCourierMine.run(creep);
            } else if (creep.memory.role.indexOf('bankir') !== - 1) {
                roleBankir.run(creep);
            }
            if (creep.memory.role == 'upgrader') {
                roleUpgrader.run(creep);
            } else if (creep.memory.role == 'builder') {
                roleBuilder.run(creep);
            // } else if (creep.memory.role == 'towerpopup') {
            //     roleTowerPopUp.run(creep);
            } else if (creep.memory.role == 'pureHarvester') {
                rolePureHarvester.run(creep);
            } else if (creep.memory.role == 'courier') {
                roleCourier.run(creep);
            } else if (creep.memory.role.indexOf('outerHarvesterLogic') !== - 1) {
                roleOuterHarvesterLogic.run(creep);
            } else if (creep.memory.role.indexOf('outerCourierLogic') !== -1) {
                roleOuterCourierLogic.run(creep, gameTime);
            } else if (creep.memory.role.indexOf('outerClaimerLogic') !== -1) {
                roleOuterClaimerLogic.run(creep);
            } else if (creep.memory.role == 'basicCreep') {
                roleBasicCreep.run(creep);
            } else if (creep.memory.role.indexOf('basicCreepOuter') !== -1) {
                roleBasicCreepOuter.run(creep);
            } else if (creep.memory.role.indexOf('outerReserver') !== -1) {
                roleOuterReserver.run(creep);
            } else if (creep.memory.role.indexOf('attackerLogic') !== -1) {
                roleAttackerLogic.run(creep);
            } else if (creep.memory.role.indexOf('keeperKiller') !== -1) {
                roleKeeperKiller.run(creep, allCreepsCount, gameTime);
            } else if (creep.memory.role.indexOf('medic') !== - 1) {
                roleMedicLogic.run(creep);
            } else if (creep.memory.role == 'exauster') {
                roleExauster.run(creep);
            } else if (creep.memory.role.indexOf('controllerAttacker') !== -1) {
                roleControllerAttacker.run(creep);
            } else if (creep.memory.role.indexOf('dismantalist') !== -1) {
                roleDismantalist.run(creep);
            } else if (creep.memory.role == 'siegerLogic') {
                roleSiegerLogic.run(creep);
            }

        }
    }
};
