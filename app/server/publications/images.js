Meteor.publish("images", function(options) {
    return Images.find({}, options);
});

