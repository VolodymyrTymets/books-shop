Images = new FS.Collection("images", {
    stores: [new FS.Store.GridFS("images")],
    filter: {
        allow: {
            contentTypes: ['image/*'] //allow only images in this FS.Collection
        }
    }
});
Images.allow({
    insert: function (userId, obj) {
        return true;
    },
    update: function (userId, obj) {
        return true;
    },
    remove: function (userId, obj) {
        return true;
    },
    download:function(userId, obj){
        return true;
    }
})