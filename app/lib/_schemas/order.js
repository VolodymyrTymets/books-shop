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
        max: 50
    },
    dateOf:{
        type: Date,
        max: 50
    },
    typeOfDelivery:{
        type: String
    },
    userId:{
        type: String
    },
    bookId:{
        type: String
    }
});