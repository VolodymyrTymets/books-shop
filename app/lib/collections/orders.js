Orders = new Mongo.Collection('orders');

Orders.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

Schemas.Order.i18n("schemas.order");
Orders.attachSchema(Schemas.Order);

