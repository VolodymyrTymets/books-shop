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
    name: {
        type: String,
        label: TAPi18n.__('author_name'),
        max: 50
    },
    surname: {
        type: String,
        label:TAPi18n.__('author_surname'),
        max: 50
    },
    biography:{
        type: String,
        label: TAPi18n.__('author_biography')
    }
});