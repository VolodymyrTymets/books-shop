Template.JournalsList.helpers({
    'settings':function () {
        return {
            collection: 'journals',
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                { key: 'title', label: TAPi18n.__('journal_title') },
                { key: '_id', label: TAPi18n.__('action'), tmpl: Template.JournalsRowAction }
            ]
        }
    },
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

