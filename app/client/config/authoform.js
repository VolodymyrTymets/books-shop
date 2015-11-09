AutoForm.hooks({
    'category-edit':{
        onSuccess: function (doc) {
            Router.go('categories');
        }
    }
});