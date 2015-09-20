var fs = require('fs');
var lines = fs.readFileSync(process.argv[0]).toString().split('\n');
console.log(lines.length);
