Meteor.methods({
    'fixtures/init':function () {
        console.log('Loading fixture data... ');
        return Fixtures.init();
    }
})