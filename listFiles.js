var fs = require('fs');
fs.readdir(process.argv[2], function cb(err, fileNames){
  if (err) throw err;
  else {
    fileExt = '.' + process.argv[3];
    extLength = fileExt.length;
    fileNames.forEach(function (fileName){
      if (fileName.slice(0 - extLength) === fileExt) {console.log(fileName);}
      // if (fileName) {console.log(fileName);}
    });
  }
});

// function cb(err, fileStr){
//   if (err) {return console.error(err);}
//   else {
//     var lines = fileStr.split('\n');
//     var newLines = lines.length - 1;
//     console.log(newLines);
//   }
// }
