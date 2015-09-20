var fs = require('fs');
var fileString = fs.readFileSync(process.argv[2]).toString()
var lines = fileString.split('\n')
console.log(lines.length)
//.split('\n');

//console.log(lines.length);
