Template.BookEdit.helpers({
    'categoriesOpt':function () {
        var opt = [];
        Categories.find().forEach(function (cat) {
            opt.push({
                label: cat.name,
                value: cat._id
            })
        })
        return opt;
    },
    'authorsOpt':function () {
        var opt = [];
        Authors.find().forEach(function (author) {
            opt.push({
                label: author.name  + ' ' + author.surname,
                value: author._id
            })
        })
        return opt;
    }
});

