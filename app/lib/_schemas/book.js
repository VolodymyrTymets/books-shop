Schemas.Author = new SimpleSchema({
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
        label: TAPi18n.__('book_title'),
        max: 50
    },
    description: {
        type: String,
        label:  TAPi18n.__('book_description')
    },
    years:{
        type: Date,
        label:  TAPi18n.__('book_years')
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