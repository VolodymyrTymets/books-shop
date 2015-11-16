Template.OrderList.helpers({
    'settings':function () {
        return {
            collection: 'orders',
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                {
                  key: 'bookId',
                  label: TAPi18n.__('book_title'),
                  fn: function (value, object) { return Books.findOne({_id:value}).title; }
                },
                {
                    key: 'userId',
                    label: TAPi18n.__('user'),
                    fn: function (value, object) { return Meteor.users.findOne({_id:value}).profile.name; }
                },
                {
                    key: 'deliveryAddress',
                    label: TAPi18n.__('delivery_address')
                },
                {
                    key: 'deliveryType',
                    label: TAPi18n.__('delivery_type'),
                    fn: function (value, object) {
                        switch (value) {
                            case 'np':{
                                return TAPi18n.__('delivery_type_np')
                            }
                            case 'up':{
                                return TAPi18n.__('delivery_type_up')
                            }
                        }
                    }
                },
                {
                    key: 'active',
                    label: TAPi18n.__('is_active'),
                    tmpl: Template.OrdersRowAcrive
                },
                { key: '_id', label: TAPi18n.__('action'), tmpl: Template.OrdersRowAction },
            ]
        }
    }
});
