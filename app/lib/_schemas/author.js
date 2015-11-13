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
        max: 50
    },
    surname: {
        type: String,
        max: 50
    },
    biography:{
        type: String,
        autoform: {
            type: "textarea"
        }
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