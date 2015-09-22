var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', cb)

function cb(err, fileStr){
  if (err) {return console.error(err);}
  else {
    var lines = fileStr.split('\n');
    var newLines = lines.length - 1;
    console.log(newLines);
  }
}
