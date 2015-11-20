var fillCollection, getAssets, logAction;

getAssets = function(assetsDir) {
    var assetsPath, files, fullPath;
    assetsPath = path.join(Meteor.rootPath, 'assets','app');
    fullPath = path.join(assetsPath, assetsDir);
    try {
        files = fs.readdirSync(fullPath);
    } catch (_error) {
        console.log(_error.message)
        console.log("Can't load fixtures from directory '" + assetsDir + "'!");
        return assets;
    }
    return _.map(files, function(fileName) {
        var filePath;
        filePath = path.join(assetsDir, fileName);
        return EJSON.parse(Assets.getText(filePath));
    });
};
getFiles = function(assetsDir){
    var assetsPath, files, fullPath;
    assetsPath = path.join(Meteor.rootPath, 'assets','app');
    fullPath = path.join(assetsPath, assetsDir);
    try {
        files = fs.readdirSync(fullPath);

    } catch (_error) {
        console.log(_error.message)
        console.log("Can't load fixtures from directory '" + assetsDir + "'!");
        return assets;
    }
    return _.map(files, function(fileName) {
        var filePath;
        filePath = path.join(assetsDir, fileName);
        var newFile = new FS.File();
        newFile.attachData(Assets.getBinary(filePath), {type: 'image/png'});
        newFile.name(fileName);
        newFile._id = fileName
        return newFile;
    });

}

fillCollection = function(collection, assets) {
    if (!collection.find().count()) {
        return _.each(assets, function(doc) {
            collection.insert(doc);
            //if (collection === Meteor.users && doc.roles) {
            //    return Roles.addUsersToRoles(doc._id, doc.roles);
            //}
        });
    }
};

logAction = function(assetsNumber, collectionName) {
    var msg;
    if (_.every(arguments, _.identity)) {
        msg = ["Created " + assetsNumber + " new fixtures", "for the " + collectionName + " collection."];
        msg = msg.join(' ');
        return console.log(msg);
    }
};

Meteor.startup(function() {
    var fixturesConfigs, fixturesPath;
    if (!Meteor.isServer) {
        return;
    }
    fixturesPath = 'fixtures';
    fixturesConfigs = path.join(fixturesPath, 'configs.json');
    fixturesConfigs = EJSON.parse(Assets.getText(fixturesConfigs));
    _.each(fixturesConfigs, function(assetsDir, collectionName) {
        var assets, collection;
        collection = _.get(this, collectionName);

        if (collection.find().count()) {
            return;
        }
        if(collectionName !== 'Images'){
            assetsDir = path.join(fixturesPath, assetsDir);
            console.log('assetsDir -> ',assetsDir)
            assets = getAssets(assetsDir);
            if (assets.length) {
                fillCollection(collection, assets);
                return logAction(assets.length, collectionName);
            }
        }else{
            debugger
            assetsDir = path.join(fixturesPath, assetsDir);
            console.log('assetsDir  [Image]-> ',assetsDir);
             var  files = getFiles(assetsDir);
            _.each(files,function (file) {
                Images.insert(file);
            });
        }


    });
});
