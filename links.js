module.exports = {

    linksTransfer: function () {

        this.E9S54();
        // this.E57N15();
        // this.E52N19();

    },

    E9S54: function () {

        const linkEnergySource1 = Game.rooms['E9S54'].lookForAt('structure', 16, 14)[0];

        const linkEnergySource2 = Game.rooms['E9S54'].lookForAt('structure', 39, 17)[0];

        // const linkOuter3 = Game.rooms['E9S54'].lookForAt('structure', 47, 30)[0];


        const linkStorage = Game.rooms['E9S54'].lookForAt('structure', 38, 26)[0];
        // const linkTo = linkFrom.pos.findInRange(FIND_MY_STRUCTURES, 2,
        //     {filter: {structureType: STRUCTURE_LINK}})[0];

        // if(linkStorage.memory.sending == undefined){
        //     linkStorage.memory.sending = false;
        // }
        if(linkEnergySource1 && linkStorage) {
            if (linkEnergySource1.energy > 0 && linkEnergySource1.cooldown == 0) {
                linkEnergySource1.transferEnergy(linkStorage);
            }
        }

        if(linkEnergySource2 && linkStorage) {
            if(linkEnergySource2.energy > 0 && linkEnergySource2.cooldown == 0) {
                linkEnergySource2.transferEnergy(linkStorage);
            }
        }

        // if(linkOuter3 && linkStorage) {
        //     if(linkOuter3.energy > 0 && linkOuter3.cooldown == 0) {
        //         linkOuter3.transferEnergy(linkStorage);
        //     }
        // }

    },

    E57N15: function () {

        // const linkEnergySource1 = Game.rooms['E57N15'].lookForAt('structure', 27, 47)[0];

        const linkOuter1 = Game.rooms['E57N15'].lookForAt('structure', 27, 47)[0];

        // const linkEnergySource2 = Game.rooms['E54N18'].lookForAt('structure', 27, 16)[0];

        const linkStorage = Game.rooms['E57N15'].lookForAt('structure', 7, 23)[0];

        const linkController = Game.rooms['E57N15'].lookForAt('structure', 37, 27)[0];

        // const linkTo = linkFrom.pos.findInRange(FIND_MY_STRUCTURES, 2,
        //     {filter: {structureType: STRUCTURE_LINK}})[0];

        // if(linkStorage.memory.sending == undefined){
        //     linkStorage.memory.sending = false;
        // }
        // if(linkEnergySource1 && linkStorage) {
        //     if (linkEnergySource1.energy > 0 && linkEnergySource1.cooldown == 0) {
        //         linkEnergySource1.transferEnergy(linkStorage);
        //     }
        // }
        if(linkOuter1 && linkStorage) {
            if (linkOuter1.energy > 0 && linkOuter1.cooldown == 0) {
                linkOuter1.transferEnergy(linkStorage);
            }
        }

        // if(linkEnergySource2.energy >= 700 && linkEnergySource2.cooldown == 0) {
        //     linkEnergySource2.transferEnergy(linkStorage, 500);
        // }
    },

    E52N19: function () {

        const linkEnergySource1 = Game.rooms['E52N19'].lookForAt('structure', 2, 36)[0];

        const linkEnergySource2 = Game.rooms['E52N19'].lookForAt('structure', 13, 47)[0];

        const linkEnergySource3 = Game.rooms['E52N19'].lookForAt('structure', 2, 38)[0];

        const linkStorage = Game.rooms['E52N19'].lookForAt('structure', 27, 30)[0];
        // const linkTo = linkFrom.pos.findInRange(FIND_MY_STRUCTURES, 2,
        //     {filter: {structureType: STRUCTURE_LINK}})[0];

        // if(linkStorage.memory.sending == undefined){
        //     linkStorage.memory.sending = false;
        // }

        if(linkEnergySource1 && linkStorage) {
            if (linkEnergySource1.energy > 0 && linkEnergySource1.cooldown == 0) {
                linkEnergySource1.transferEnergy(linkStorage);
            }
        }
        if(linkEnergySource2 && linkStorage) {
            if (linkEnergySource2.energy > 0 && linkEnergySource2.cooldown == 0) {
                linkEnergySource2.transferEnergy(linkStorage);
            }
        }
        if(linkEnergySource3 && linkStorage) {
            if (linkEnergySource3.energy > 0 && linkEnergySource3.cooldown == 0) {
                linkEnergySource3.transferEnergy(linkStorage);
            }
        }

    }


};