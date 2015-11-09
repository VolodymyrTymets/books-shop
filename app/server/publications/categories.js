Meteor.publish("categories", function(filter,options) {
    return Categories.find(filter, options);
});
ReactiveTable.publish("categories", Categories);