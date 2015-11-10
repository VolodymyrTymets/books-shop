Schemas.Category = new SimpleSchema({
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
        label: TAPi18n.__('category_name'),
        max: 200
    }
});