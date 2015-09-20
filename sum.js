var sum = process.argv.slice(2).reduce(function(prev, curr){
  return (prev * 1) + (curr * 1);
});
console.log(sum)
