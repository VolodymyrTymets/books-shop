Schemas.Journal = new SimpleSchema({
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
        type: String,
        autoform: {
            type: "textarea"
        }
    },
    years:{
        type: Date
    },
    authorsId:{
        type: [String],
        autoform: {
            type: "select-multiple"
        }
    },
    categoriesId:{
        type: [String]

    },
    price:{
        type: Number
    },
    photoId:{
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images'
            }
        }
    }
});