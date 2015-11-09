Template.Categories.helpers({
    'settings':function () {
        return {
            collection: 'categories',
            rowsPerPage: 5,
            showFilter: true,
            fields: [
                { key: 'name', label: TAPi18n.__('name') },
                { key: '_id', label: TAPi18n.__('action'), tmpl: Template.CategoriesRowAction },
            ]
        }
    }
});
