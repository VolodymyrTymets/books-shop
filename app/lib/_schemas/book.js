Schemas.Book = new SimpleSchema({
    _id: {
        type: String,
        max: 17,
        autoform: {
            type: "hidden",
            label: false
        },
        optional:true
    },
    title: {
        type: String,
        max: 50
    },
    description: {
        type: String
    },
    years:{
        type: Date
    },
    authorsId:{
        type: [String],
        autoform: {
            type: "hidden",
            label: false
        }
    },
    categoriesId:{
        type: [String],
        autoform: {
            type: "hidden",
            label: false
        }
    }
});