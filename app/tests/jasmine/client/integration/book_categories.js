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

    //afterAll(function (done) {
    //
    //});

    it('Should display all book in main page ', function (done) {
        Router.go('home');
        setTimeout(function () {
            // Should be 4 book in collections
            expect(Books.find().count()).toBe(4);

            // Should be 4 book in DOM
            expect($('figure')).toHaveLength(4);
            done();
        },500)
    });

    it('Should display 2 book category [fiction]', function (done) {
        Router.go('categoryBooks', { _categoryId: 'fiction' });
        setTimeout(function () {
            // Should be 2 book in collections
            expect(Books.find().count()).toBe(2);

            // Should be 2 book in DOM
            expect($('figure')).toHaveLength(2);
            done();
        },500);
    });

    it('Should display 2 book category [psychological]', function (done) {
        Router.go('categoryBooks', { _categoryId: 'psychological' });
        setTimeout(function () {
            // Should be 2 book in collections
            expect(Books.find().count()).toBe(2);

            // Should be 2 book in DOM
            expect($('figure')).toHaveLength(2);
            done();
        },500);
    });

    it('Should display 0 book category [history]', function (done) {
        Router.go('categoryBooks', { _categoryId: 'history' });
        setTimeout(function () {
            // Should be 0 book in collections
            expect(Books.find().count()).toBe(0);

            // Should be 0 book in DOM
            expect($('figure')).toHaveLength(0);
            done();
        },500);
    })
});