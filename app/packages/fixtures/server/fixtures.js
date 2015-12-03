Fixtures =new  function () {

    var fillCollection, getAssets, logAction;
    var ASSETS_PATH = path.join(Meteor.rootPath, 'assets', 'packages', 'fixtures');

    var getAssets = function (assetsDir) {
        var assetsPath, files, fullPath;
        fullPath = path.join(ASSETS_PATH, assetsDir);
        try {
            files = fs.readdirSync(fullPath);
        } catch (_error) {
            console.log(_error.message)
            console.log("Can't load fixtures from directory '" + assetsDir + "'!");
            return assets;
        }
        return _.map(files, function (fileName) {
            var filePath;
            filePath = path.join(assetsDir, fileName);
            return EJSON.parse(Assets.getText(filePath));
        });
    };
    var getFiles = function (assetsDir) {
        var  files, fullPath;
        fullPath = path.join(ASSETS_PATH, assetsDir);
        try {
            files = fs.readdirSync(fullPath);

        } catch (_error) {
            console.log(_error.message)
            console.log("Can't load file from directory '" + assetsDir + "'!");
            return assets;
        }
        return _.map(files, function (fileName) {
            var filePath;
            filePath = path.join(assetsDir, fileName);
            var newFile = new FS.File();
            newFile.attachData(Assets.getBinary(filePath), {type: 'image/png'});
            newFile.name(fileName);
            newFile._id = fileName
            return newFile;
        });

    }

    var fillCollection = function (collection, assets) {
        if (!collection.find().count()) {
            return _.each(assets, function (doc) {
                collection.insert(doc);
                //if (collection === Meteor.users && doc.roles) {
                //    return Roles.addUsersToRoles(doc._id, doc.roles);
                //}
            });
        }
    };

    var logAction = function (assetsNumber, collectionName ,assetsDir) {
        var msg;
        if (_.every(arguments, _.identity)) {
            msg = ["-> load [" + assetsNumber + "] ", " item of [" + collectionName + "]" ," from [" + assetsDir + "]"];
            msg = msg.join(' ');
            return console.log(msg);
        }
    };

    this.init = function () {
        var fixturesConfigs, fixturesPath;
        fixturesPath = 'private';
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
                assets = getAssets(assetsDir);
                if (assets.length) {
                    fillCollection(collection, assets);
                    return logAction(assets.length, collectionName, assetsDir);
                }
            }else{
                assetsDir = path.join(fixturesPath, assetsDir);
                var  files = getFiles(assetsDir);
                _.each(files,function (file) {
                    Images.insert(file);
                });
                return logAction(files.length, collectionName, assetsDir);
            }
        });
    }
}();
