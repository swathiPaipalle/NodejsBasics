var fs = require('fs');
var readableStream = fs.createReadStream('input.txt');

var data = "";
readableStream.setEncoding('UTF8');
readableStream.on('data', function(chunk){
    data +=chunk;
});
readableStream.on('end', function () {
    console.log(data);
});

console.log('Sync data is - ' + data.toString());
console.log("This is the end");


var writeData = "Hello World!";
var writableStream = fs.createWriteStream('output.txt');
writableStream.write(writeData, 'UTF8');
writableStream.end();
writableStream.on('finish', function () {
    console.log('Write completed!');
});