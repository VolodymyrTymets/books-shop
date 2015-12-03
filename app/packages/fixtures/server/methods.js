Meteor.methods({
    'fixtures/init':function () {
        console.log('Loading fixture data... ');
        return Fixtures.init();
    },
    'fixtures/clearDB':function () {
        console.log('Clearing fixture data... ');
        return Fixtures.clearDB();
    }
})