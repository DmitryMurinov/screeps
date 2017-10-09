module.exports = {

    runManage: function (currentReserves, roomsList, resourcesListCatalized) {

        var roomToSend = 'E53N16';
        // var resource = RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE;
        var resource = RESOURCE_CATALYZED_GHODIUM_ALKALIDE;
        // RESOURCE_CATALYZED_ZYNTHIUM_ACID
        // RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE
        var roomFromSend = 'E52N19';
        var amount = 1000;

        this.catalizedResourceBalancer(currentReserves, roomsList, resourcesListCatalized);

        var roomMemory = Game.rooms[roomFromSend].memory;

        if (!roomMemory.moveResource) {
            roomMemory.moveResource = 'finished';
        }

        var terminalTo = Game.rooms[roomToSend].terminal;
        // if (Game.rooms[roomToSend].terminal.store[RESOURCE_CATALYST] < 10000) {
        //     this.sendResources(roomFromSend, roomToSend, resource, amount);
        // }

        // if(terminalTo.store[RESOURCE_ENERGY] > 5000){
        //     this.moveResource(roomToSend, terminalTo, Game.rooms[roomToSend].storage, RESOURCE_ENERGY, 1000);
        // }

    },

    catalizedResourceBalancer: function (currentReserves, roomsList, resourcesListCatalized) {

        var roomsWithStorageAndTerminal = 0;

        for (i in roomsList) {
            var roomName = roomsList[i];
            var storage = Game.rooms[roomName].storage;
            var terminal = Game.rooms[roomName].terminal;

            if (storage && terminal) {
                roomsWithStorageAndTerminal++;
            }
        }

        resourcesListCatalized.push(RESOURCE_CATALYST);
        resourcesListCatalized.push(RESOURCE_ENERGY);


        outerLoop:
        for(var i in resourcesListCatalized){
            var catalizedResourse = resourcesListCatalized[i];

            for (var j in roomsList) {
                var roomName = roomsList[j];
                var storage = Game.rooms[roomName].storage;
                var terminal = Game.rooms[roomName].terminal;

                if (storage && terminal) {

                    if((currentReserves[roomName + ';' + catalizedResourse] - 1500) >
                        (currentReserves['total;' + catalizedResourse] / roomsWithStorageAndTerminal)){
                        var amount = 10000000;
                        var lineKey = "";
                        var roomTo = "";

                        innerLoop:
                        for (var k in roomsList) {
                            var roomToName = roomsList[k];
                            var storageTo = Game.rooms[roomToName].storage;
                            var terminalTo = Game.rooms[roomToName].terminal;
                            if(storageTo && terminalTo && (
                                (currentReserves[roomToName + ';' + catalizedResourse]) <
                                (currentReserves['total;' + catalizedResourse] / roomsWithStorageAndTerminal))){
                                roomTo = roomToName;
                                break innerLoop;
                            }
                        }
                        
/*
                        for(var reserveKey in currentReserves){
                            var reserveValue = currentReserves[reserveKey];
                            if(reserveKey.indexOf(catalizedResourse) !== -1 && reserveKey.indexOf("total") === -1){
                                roomTo = reserveKey.substring(0, reserveKey.indexOf(";"));
                                if(reserveValue < amount && Game.rooms[roomTo].storage && Game.rooms[roomTo].terminal){
                                    amount = reserveValue;
                                    lineKey = reserveKey;
                                }
                            }
                        }

                        roomTo = lineKey.substring(0, lineKey.indexOf(";"));
*/
                        this.sendResources(roomName, roomTo, catalizedResourse, 1000);
                        Game.rooms[roomName].memory.catalizedResourcesBalanced = false;
                        Game.rooms[roomName].memory.catalizedResourcesBalancedCleanData = true;
                        break outerLoop;
                    } else {
                        Game.rooms[roomName].memory.catalizedResourcesBalanced = true;
                        if(Game.rooms[roomName].memory.catalizedResourcesBalancedCleanData = true) {
                            Game.rooms[roomName].memory.moveResource == 'finishing';
                            Game.rooms[roomName].memory.moveResourceFromId = null;
                            Game.rooms[roomName].memory.moveResourceToId = null;
                            Game.rooms[roomName].memory.moveResourceResource = null;
                            Game.rooms[roomName].memory.moveResourceAmount = 0;
                            Game.rooms[roomName].memory.catalizedResourcesBalancedCleanData = false;
                        }
                    }
                }
            }
        }
    },

    sendResources: function (roomFromSend, roomToSend, resource, amount) {

        var terminalFrom = Game.rooms[roomFromSend].terminal;
        var terminalTo = Game.rooms[roomToSend].terminal;

        if (terminalFrom && terminalTo && ((resource != RESOURCE_ENERGY && terminalFrom.store[resource] > 100) || (resource == RESOURCE_ENERGY &&
                terminalFrom.store[resource] > 200))) {
            if (terminalFrom.store[resource] < amount && resource != RESOURCE_ENERGY) {
                amount = terminalFrom.store[resource];
            } else if (terminalFrom.store[resource] < amount * 2 && resource == RESOURCE_ENERGY) {
                amount = amount / 2;
            }
            var result = terminalFrom.send(resource, amount, roomToSend);
        } else {
            var storageFrom = Game.rooms[roomFromSend].storage;
            if (storageFrom && storageFrom.store[resource] > 0) {
                var roomName = roomFromSend;
                var objectFrom = storageFrom;
                var objectTo = terminalFrom;
                this.moveResource(roomName, objectFrom, objectTo, resource, amount);
            }
        }
    },

    moveResource: function (roomName, objectFrom, objectTo, resource, amount) {

        var roomMemory = Game.rooms[roomName].memory;

        if (!roomMemory.moveResource) {
            roomMemory.moveResource = 'finished';
        }

        if (amount > 0) {
            if(roomMemory.moveResource = 'finished'){
                roomMemory.moveResource = 'starting';
            }
            roomMemory.moveResourceFromId = objectFrom.id;
            roomMemory.moveResourceToId = objectTo.id;
            roomMemory.moveResourceResource = resource;
            roomMemory.moveResourceAmount = amount;
        } else {
            roomMemory.moveResource == 'finishing';
            roomMemory.moveResourceFromId = null;
            roomMemory.moveResourceToId = null;
            roomMemory.moveResourceResource = null;
            roomMemory.moveResourceAmount = 0;
        }

    }

};