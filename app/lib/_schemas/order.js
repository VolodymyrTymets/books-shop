Schemas.Order = new SimpleSchema({
    _id: {
        type: String,
        max: 17,
        autoform: {
            type: "hidden",
            label: false
        },
        optional:true
    },
    address: {
        type: String,
        label: TAPi18n.__('order_address'),
        max: 50
    },
    dateOf:{
        type: Date,
        label: TAPi18n.__('order_dateOf'),
        max: 50
    },
    typeOfDelivery:{
        type: String,
        label: TAPi18n.__('order_typeOfDelivery')
    },
    userId:{
        type: String,
        label: TAPi18n.__('order_user')
    },
    bookId:{
        type: String,
        label: TAPi18n.__('order_book')
    }
});