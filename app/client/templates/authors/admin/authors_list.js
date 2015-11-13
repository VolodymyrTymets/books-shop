Template.AuthorsList.helpers({
    'settings':function () {
        return {
            collection: 'authors',
            rowsPerPage: 5,
            showFilter: true,
            fields: [
                { key: 'name', label: TAPi18n.__('author_name') },
                { key: 'surname', label: TAPi18n.__('author_surname') },
                { key: '_id', label: TAPi18n.__('action'), tmpl: Template.AuthorsRowAction },
            ]
        }
    }
});
