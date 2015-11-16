Meteor.methods({
    'saveOrders': function (objs) {
        _.each(objs,function (obj) {
            if (!Orders.findOne({_id: obj._id})) {
                var user = Meteor.user();
                obj.createdOn = new Date();
                obj.userId = user._id;
                obj.deliveryAddress = user.profile.deliveryAddress
                obj.deliveryType = user.profile.deliveryType;
                obj.active = false;
                Orders.insert(obj);
            }
        })
    }
});