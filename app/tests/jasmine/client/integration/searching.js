describe('[Book Categories]', function () {
    beforeAll(function (done) {
        Fixtures.clearDB(function () {
            Fixtures.init(function () {
                done();
            });
        });
    });

    beforeEach(function (done) {
        Fixtures.clearDB(function () {
            Fixtures.init(function () {
                Meteor.loginWithPassword('testUser', 'password', function (err, res) {
                    Tracker.afterFlush(done);
                });
            });
        });
    });

    it('Should be possible find book for title ', function (done) {
        var _title = 'Алхімік';
        Router.go('home');
        setTimeout(function () {
            $('#search-form input').val(_title);
            $('#search-form').submit();
            setTimeout(function () {

                // Should be searched book in collections
                expect(Books.findOne({title:_title})).toBeDefined();

                // Should be searched book in DOM
                expect($('figure figcaption h3.title-left')).toContainText(_title);
                done();
            },500)
        },500)
    });

    it('Should be possible find book for description ', function (done) {
        var _pice_of_description = ' вперше опублікований';
        Router.go('home');
        setTimeout(function () {
            $('#search-form input').val(_pice_of_description);
            $('#search-form').submit();
            setTimeout(function () {

                // Should be searched book in collections
                expect(Books.findOne().description.indexOf(_pice_of_description) > -1).toBe(true);

                // Should be searched book in DOM
                expect($('figure figcaption')).toContainText(_pice_of_description);
                done();
            },500)
        },500)
    });
});