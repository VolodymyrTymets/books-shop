AutoForm.hooks({
    'category-edit':{
        onSuccess: function (doc) {
            Router.go('categoriesList');
        }
    },
    'book-edit':{
        onSuccess: function (doc) {
            Router.go('booksList');
        }
    },
    'author-edit':{
        onSuccess: function (doc) {
            Router.go('authorsList');
        }
    }
});