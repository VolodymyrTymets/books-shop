Package.describe({
  name: 'fixtures',
  version: '0.0.1',
  summary: 'Fixture methods for load and remove data',
  git: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use(['underscore']);
  api.use(['jss:path', 'peerlibrary:fs','ostrio:meteor-root'], 'server');

  api.addAssets(addFolder('fixtures', 'private'), 'server');

  api.addFiles([
    'server/fixtures.js',
    'server/methods.js',
    'server/underscore/underscore.js'
  ], 'server');

  api.addFiles(['client/fixtures.js'], 'client');

  api.export('Fixtures');
});

function addFolder(packageName, folder) {
  // local imports
  var _=Npm.require("underscore");
  var fs=Npm.require("fs");
  var path=Npm.require("path");
  // helper function, walks recursively inside nested folders and return absolute filenames
  function walk(folder){
    var filenames=[];
    // get relative filenames from folder
    var folderContent=fs.readdirSync(folder);
    // iterate over the folder content to handle nested folders
    _.each(folderContent,function(filename){
      // build absolute filename
      var absoluteFilename=folder+path.sep+filename;
      // get file stats
      var stat=fs.statSync(absoluteFilename);
      if(stat.isDirectory()){
        // directory case => add filenames fetched from recursive call
        filenames=filenames.concat(walk(absoluteFilename));
      }
      else{
        // file case => simply add it
        filenames.push(absoluteFilename);
      }
    });
    return filenames;
  }
  // save current working directory (something like "/home/user/projects/my-project")
  var cwd=process.cwd();
  // chdir to our package directory
  process.chdir("packages"+path.sep+packageName);
  // launch initial walk
  var result=walk(folder);
  // restore previous cwd
  process.chdir(cwd);
  return result;
};