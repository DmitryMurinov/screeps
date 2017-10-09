module.exports = {

    run: function (tower) {

        var enemies= tower.room.find(Game.HOSTILE_CREEPS);
        tower.attack(enemies[0]);

    }

};