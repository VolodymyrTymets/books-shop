Meteor.publish("authors", function(filter,options) {
    return Authors.find(filter, options);
});
ReactiveTable.publish("authors", Authors);