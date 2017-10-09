module.exports = {

    linksTransfer: function () {

        this.E53N16();
        this.E57N15();
        this.E52N19();

    },

    E53N16: function () {

        const linkEnergySource1 = Game.rooms['E53N16'].lookForAt('structure', 2, 18)[0];

        const linkEnergySource2 = Game.rooms['E53N16'].lookForAt('structure', 5, 2)[0];

        const linkOuter3 = Game.rooms['E53N16'].lookForAt('structure', 47, 30)[0];


        const linkStorage = Game.rooms['E53N16'].lookForAt('structure', 29, 24)[0];
        // const linkTo = linkFrom.pos.findInRange(FIND_MY_STRUCTURES, 2,
        //     {filter: {structureType: STRUCTURE_LINK}})[0];

        // if(linkStorage.memory.sending == undefined){
        //     linkStorage.memory.sending = false;
        // }
        if(linkEnergySource1 && linkStorage) {
            if (linkEnergySource1.energy >= 200 && linkEnergySource1.cooldown == 0) {
                linkEnergySource1.transferEnergy(linkStorage);
            }
        }

        if(linkEnergySource2 && linkStorage) {
            if(linkEnergySource2.energy >= 200 && linkEnergySource2.cooldown == 0) {
                linkEnergySource2.transferEnergy(linkStorage);
            }
        }

        if(linkOuter3 && linkStorage) {
            if(linkOuter3.energy >= 200 && linkOuter3.cooldown == 0) {
                linkOuter3.transferEnergy(linkStorage);
            }
        }

    },

    E57N15: function () {

        // const linkEnergySource1 = Game.rooms['E57N15'].lookForAt('structure', 27, 47)[0];

        const linkOuter1 = Game.rooms['E57N15'].lookForAt('structure', 27, 47)[0];

        // const linkEnergySource2 = Game.rooms['E54N18'].lookForAt('structure', 27, 16)[0];

        const linkStorage = Game.rooms['E57N15'].lookForAt('structure', 24, 19)[0];

        const linkController = Game.rooms['E57N15'].lookForAt('structure', 37, 27)[0];

        // const linkTo = linkFrom.pos.findInRange(FIND_MY_STRUCTURES, 2,
        //     {filter: {structureType: STRUCTURE_LINK}})[0];

        // if(linkStorage.memory.sending == undefined){
        //     linkStorage.memory.sending = false;
        // }
        // if(linkEnergySource1 && linkStorage) {
        //     if (linkEnergySource1.energy >= 200 && linkEnergySource1.cooldown == 0) {
        //         linkEnergySource1.transferEnergy(linkStorage);
        //     }
        // }
        if(linkOuter1 && linkController) {
            if (linkOuter1.energy >= 200 && linkOuter1.cooldown == 0) {
                linkOuter1.transferEnergy(linkController);
            }
        }

        // if(linkEnergySource2.energy >= 700 && linkEnergySource2.cooldown == 0) {
        //     linkEnergySource2.transferEnergy(linkStorage, 500);
        // }
    },

    E52N19: function () {

        const linkEnergySource1 = Game.rooms['E52N19'].lookForAt('structure', 2, 36)[0];

        const linkEnergySource2 = Game.rooms['E52N19'].lookForAt('structure', 13, 47)[0];

        const linkStorage = Game.rooms['E52N19'].lookForAt('structure', 27, 30)[0];
        // const linkTo = linkFrom.pos.findInRange(FIND_MY_STRUCTURES, 2,
        //     {filter: {structureType: STRUCTURE_LINK}})[0];

        // if(linkStorage.memory.sending == undefined){
        //     linkStorage.memory.sending = false;
        // }

        if(linkEnergySource1 && linkStorage) {
            if (linkEnergySource1.energy >= 200 && linkEnergySource1.cooldown == 0) {
                linkEnergySource1.transferEnergy(linkStorage);
            }
        }
        if(linkEnergySource2.energy >= 200 && linkEnergySource2.cooldown == 0) {
            linkEnergySource2.transferEnergy(linkStorage);
        }
    }


};