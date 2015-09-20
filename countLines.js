var fs = require('fs');
var lines = fs.readFileSync(process.argv[2]).toString().split('\n')
var newLines = lines.length - 1
console.log(newLines)
