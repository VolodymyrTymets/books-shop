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

Orders.attachSchema(Schemas.Order);

