Fixtures =new  function () {

    var ASSETS_PATH = path.join(Meteor.rootPath, 'assets', 'packages', 'fixtures');
    var FIXTURE_PATH = 'private';

    var getAssets = function (assetsDir) {
        var  files, fullPath;
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

    };

    var getConfig = function () {
        var  fixturesConfigs = path.join(FIXTURE_PATH, 'configs.json');
        fixturesConfigs = EJSON.parse(Assets.getText(fixturesConfigs));
        return fixturesConfigs;
    };

    var fillCollection = function (collection, assets) {
        if (!collection.find().count()) {
            return _.each(assets, function (doc) {
                collection.insert(doc);
            });
        }
    };

    var logInit = function (assetsNumber, collectionName ,assetsDir) {
        var msg;
        if (_.every(arguments, _.identity)) {
            msg = ["-> load [" + assetsNumber + "]", "item of [" + collectionName + "]" ,"from [" + assetsDir + "]"];
            msg = msg.join(' ');
            return console.log(msg);
        }
    };
    var logClear = function (collectionName) {
        var msg;
        if (_.every(arguments, _.identity)) {
            msg = ["-> [" + collectionName + "]", " is clear..."];
            msg = msg.join(' ');
            return console.log(msg);
        }
    };

    this.init = function () {
        _.each(getConfig(), function(assetsDir, collectionName) {
            var assets, collection;
            collection = _.get(this, collectionName);

            if (collection.find().count()) {
                return;
            }
            if(collectionName !== 'Images'){
                assetsDir = path.join(FIXTURE_PATH, assetsDir);
                assets = getAssets(assetsDir);
                if (assets.length) {
                    fillCollection(collection, assets);
                    return logInit(assets.length, collectionName, assetsDir);
                }
            }else{
                assetsDir = path.join(FIXTURE_PATH, assetsDir);
                var  files = getFiles(assetsDir);
                _.each(files,function (file) {
                    Images.insert(file);
                });
                return logInit(files.length, collectionName, assetsDir);
            }
        });
    };

    this.clearDB = function () {
        _.each(getConfig(), function(assetsDir, collectionName) {
            var collection =  _.get(this, collectionName);
            collection.remove({},function (e) {
                if (e) {
                    console.error('Failed removing collection', e);
                }
                logClear(collectionName)
            });
        });
    };
}();
