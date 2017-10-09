module.exports = {

    run: function (creep) {

        if(creep.memory.needBoost == true){
            creep.room.memory.labsBoost = true;
            var upgradePosition = new RoomPosition(creep.room.terminal.pos.x + 1, creep.room.terminal.pos.y + 2, creep.room.name);
            if(creep.pos.x != upgradePosition.x || creep.pos.y != upgradePosition.y){
                creep.moveTo(upgradePosition);
            } else {
                creep.memory.needBoost = false;
                var body = creep.body;
                for(i in body){
                    var bodyPart = body[i];
                    if((bodyPart.type == WORK)&& bodyPart.boost == undefined){
                        creep.memory.needBoost = true;
                    }
                }
                if(creep.memory.needBoost == false) {
                    creep.room.memory.labsBoost = false;
                }
            }
        } else {


        if (!creep.memory.mineId) {
            var mines = creep.room.find(FIND_MINERALS);
            var mine = mines[0];
            creep.memory.mineId = mine.id;
            creep.memory.mineralType = mine.mineralType;
        }

        if (_.sum(creep.carry) > 50) {
            var couriers = creep.pos.findInRange(FIND_MY_CREEPS, 1, {filter: (c) => c.memory.role == 'courierMine'});

             var courier;
            if (couriers.length >= 1) {
                courier = couriers[0];
            }

            if(courier != undefined){
                creep.transfer(courier, creep.memory.mineralType);
            } else {
                var storage = creep.pos.findInRange(FIND_STRUCTURES, 3, {
                    filter: (s) => s.structureType == STRUCTURE_CONTAINER && _.sum(s.store) < 2000
                });

                if (storage.length > 0) {
                    if (creep.transfer(storage[0], creep.memory.mineralType) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(storage[0]);
                    }
                }
            }
        }
            if(creep.memory.mineId){
                var mine = Game.getObjectById(creep.memory.mineId);
                var result = creep.harvest(mine);


                if(result == ERR_NOT_IN_RANGE){
                    if(creep.memory.storedPath == undefined){
                        creep.memory.storedPath = creep.pos.findPathTo(mine);
                    }
                    var moveResult = creep.moveByPath(creep.memory.storedPath);
                    if(moveResult != OK){
                        creep.memory.storedPath = creep.pos.findPathTo(mine);
                        creep.moveByPath(creep.memory.storedPath);
                    }
                }
            }
        }
    }

};