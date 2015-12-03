describe('DB CRUD', function() {
    var _categoryId = 'history';
    var _bookId = 'alhimic';
    var _authorId = 'coelqo';

    beforeEach(function () {
        Fixtures.clearDB();
        Fixtures.init();
    });


    it('Categories: Should be  possible add new object', function() {
       var res =  Categories.insert({name:"test"});
       expect(res).toBeDefined()
    });
    it('Categories: Should be  possible  remove object', function() {
        var res =  Categories.remove({ _id:_categoryId });
        expect(res).toBe(1)
    });
    it('Categories: Should be  possible  find object', function() {
        var res =  Categories.find({ _id:_categoryId }).count();
        expect(res).toBe(1)
    });
    it('Categories: Should be  possible  update object', function() {
        var newName = 'edited Name';
        Categories.update({ _id:_categoryId },{ $set :{ name:newName } });
        var res =  Categories.findOne({ _id:_categoryId }).name;
        expect(res).toBe(newName);
    });

    it('Books: Should be  possible add new object', function() {
        var book ={
            "_id":"test",
            "title":"test",
            "description":"test",
            "years":new Date(),
            "categoriesId":["test"],
            "authorsId":["test"],
            "photoId":"test",
            "price":'20'
        }
        var res =  Books.insert(book);
        expect(res).toBeDefined()
    });
    it('Books: Should be  possible  remove object', function() {
        var res =  Books.remove({ _id:_bookId });
        expect(res).toBe(1)
    });
    it('Books: Should be  possible  find object', function() {
        var res =  Books.find({ _id:_bookId }).count();
        expect(res).toBe(1)
    });
    it('Books: Should be  possible  update object', function() {
        var newTitle = 'edited Title';
        Books.update({ _id:_bookId },{ $set :{ title:newTitle } });
        var res =  Books.findOne({ _id:_bookId }).title;
        expect(res).toBe(newTitle);
    });

    it('Authors: Should be  possible add new object', function() {
        var author = {
            _id: "test",
            name: "test",
            surname: "test",
            photoId: "test",
            biography: "###test"
        }
        var res =  Authors.insert(author);
        expect(res).toBeDefined()
    });
    it('Authors: Should be  possible  remove object', function() {
        var res =  Authors.remove({ _id:_authorId });
        expect(res).toBe(1)
    });
    it('Authors: Should be  possible  find object', function() {
        var res =  Authors.find({ _id:_authorId }).count();
        expect(res).toBe(1)
    });
    it('Authors: Should be  possible  update object', function() {
        var newName = 'edited Name';
        Authors.update({ _id:_authorId },{ $set :{ name:newName } });
        var res =  Authors.findOne({ _id:_authorId }).name;
        expect(res).toBe(newName);
    });
});