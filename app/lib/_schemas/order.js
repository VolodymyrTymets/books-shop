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
    deliveryAddress: {
        type: String,
        max: 50
    },
    createdOn:{
        type: Date,
        max: 50
    },
    deliveryType:{
        type: String
    },
    userId:{
        type: String
    },
    bookId:{
        type: String
    },
    active:{
        type: Boolean
    }
});