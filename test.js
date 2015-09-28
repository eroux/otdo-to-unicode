var fs=require("fs");
var readline = require('readline');
var otdotsTools=require("./otdotstools.js");
var rl = readline.createInterface({
  input: fs.createReadStream('test.txt', "utf8")
});
rl.on('line', function (line) {
  console.log(line+': '+otdotsTools.otdotsToUnicode(line));
});
