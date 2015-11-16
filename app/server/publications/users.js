Meteor.publish("users", function(options) {
    return Meteor.users.find({}, options);
});

