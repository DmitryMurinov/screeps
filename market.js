module.exports = {

    runMarket: function (roomName) {

        this.sell(roomName);

    },

    sell: function (roomName, resource, amount, price) {

        const maxTransferEnergyCost = amount * 2;
        const orders = Game.market.getAllOrders({type: ORDER_BUY, resourceType: resource});

        var orderNumber = 0;
        var transferEnergyCost;
        for(let i=0; i<orders.length; i++) {

            if(orders[i].price >= price) {
                transferEnergyCost = Game.market.calcTransactionCost(
                    amount, roomName, orders[i].roomName);
                if (i > 0) {
                    var transferEnergyCostPrevious = Game.market.calcTransactionCost(
                        amount, roomName, orders[i - 1].roomName);
                    if (transferEnergyCost < transferEnergyCostPrevious) {
                        orderNumber = i;
                    }
                }
            }
        }

        if(transferEnergyCost < maxTransferEnergyCost) {
                Game.market.deal(orders[orderNumber].id, amount, roomName);
        }
    },

    buy: function (roomName, resource, amount, price) {

        const maxTransferEnergyCost = amount;
        const orders = Game.market.getAllOrders({type: ORDER_SELL, resourceType: resource});

        var orderNumber = 0;
        var transferEnergyCost;
        for(let i=0; i<orders.length; i++) {

            if(orders[i].price <= price) {
                transferEnergyCost = Game.market.calcTransactionCost(
                    amount, roomName, orders[i].roomName);
                if (i > 0) {
                    var transferEnergyCostPrevious = Game.market.calcTransactionCost(
                        amount, roomName, orders[i - 1].roomName);
                    if (transferEnergyCost < transferEnergyCostPrevious) {
                        orderNumber = i;
                    }
                }
            }
        }

        if(transferEnergyCost && transferEnergyCost < maxTransferEnergyCost) {
            Game.market.deal(orders[orderNumber].id, amount, roomName);
        }
    }

};