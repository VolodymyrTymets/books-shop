Meteor.publish("books", function(filter,options) {
    return Books.find(filter, options);
});

ReactiveTable.publish("books", Books);