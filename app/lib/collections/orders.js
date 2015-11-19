Orders = new Mongo.Collection('orders');

Orders.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return AdminPermission();
    },
    remove: function () {
        return AdminPermission();
    }
});

Schemas.Order.i18n("schemas.order");
Orders.attachSchema(Schemas.Order);

