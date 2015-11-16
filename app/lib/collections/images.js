Images = new FS.Collection("images", {
    stores: [new FS.Store.GridFS("images")],
    filter: {
        allow: {
            contentTypes: ['image/*'] //allow only images in this FS.Collection
        }
    }
});
Images.allow({
    insert: function () {
        return AdminPermission();
    },
    update: function () {
        return AdminPermission();
    },
    remove: function () {
        return AdminPermission();
    },
    download:function(){
        return true;
    }
})