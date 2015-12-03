describe('[Object Validation]', function() {

    it('Category -> empty object', function() {
        var schema =  Schemas.Category.newContext();
        expect(schema.validate({})).toBe(false);
    });

    it('Category -> not valid object', function() {
        var schema =  Schemas.Category.newContext();
        var category = { name:1 };
        expect(schema.validate(category)).toBe(false);
    });

    it('Category -> valid object', function() {
        var schema =  Schemas.Category.newContext();
        var category = {
            _id: "fiction",
            name: "test category"
        };
        expect(schema.validate(category)).toBe(true);
    });

    it('Author -> empty object', function() {
        var schema =  Schemas.Author.newContext();
        expect(schema.validate([])).toBe(true);
    });

    it('Author -> not valid object', function() {
        var schema =  Schemas.Author.newContext();
        var author = {
            _id: "test",
            name: "test",
            surname: 1,
            photoId: "test",
            biography: "###test"
        }
        expect(schema.validate(author)).toBe(false);
    });

    it('Author -> valid object', function() {
        var schema =  Schemas.Author.newContext();
        var author = {
            _id: "test",
            name: "test",
            surname: "test",
            photoId: "test",
            biography: "###test"
        }
        expect(schema.validate(author)).toBe(true);
    });

    it('Book -> empty object', function() {
        var schema =  Schemas.Book.newContext();
        expect(schema.validate({})).toBe(false);
    });

    it('Book -> not valid object', function() {
        var schema =  Schemas.Book.newContext();
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
        expect(schema.validate(book)).toBe(false);
    });

    it('Book ->  valid object', function() {
        var schema =  Schemas.Book.newContext();
        var book ={
            "_id":"test",
            "title":"test",
            "description":"test",
            "years":new Date(),
            "categoriesId":["test"],
            "authorsId":["test"],
            "photoId":"test",
            "price":20
        }
        expect(schema.validate(book)).toBe(true);
    });
})