var structLinks = require('links');
var helperCounter = require('helper.counter');
var roomLogicCivilian = require('logic.civilian');
var roomLogicWar = require('rooms.logic.war');
var market = require('market');
var labs = require('labs');
var runAllCreeps = require('creeps.runAllCreeps');
var manageResources = require('manageResources');
var defendRooms = require('defend.rooms');

module.exports.loop = function () {

    // var startCpu = Game.cpu.getUsed();
    // console.log(Game.cpu.getUsed() - startCpu);

    var gameTime = Game.time.toString();

    var allCreepsCount = helperCounter.countAllCreeps();

    for (let name in Memory.creeps) {
        if (Game.creeps[name] == undefined) {
            delete Memory.creeps[name];
        }
    }

    runAllCreeps.run(allCreepsCount, gameTime);



    var roomsList = helperCounter.roomsList();

    var resourcesListCatalized = helperCounter.resourcesListCatalized();

    // var startCpu = Game.cpu.getUsed();
    // console.log(Game.cpu.getUsed() - startCpu);

    var allReservesCount = helperCounter.countAllReserves();

    // var startCpu = Game.cpu.getUsed();

    defendRooms.towers(roomsList);


    if(gameTime.substring(gameTime.length - 1, gameTime.length) == ('0' || '5')) {
        roomLogicCivilian.runMyRooms(allCreepsCount, gameTime, allReservesCount);
    }
    // console.log(Game.cpu.getUsed() - startCpu);

    // roomLogicWar.runMyRooms(gameTime);

    structLinks.linksTransfer();

    labs.runLabs(allReservesCount, gameTime);

    if(gameTime.substring(gameTime.length - 1, gameTime.length) == '0') {
        manageResources.runManage(allReservesCount, roomsList, resourcesListCatalized);
    }



}
;