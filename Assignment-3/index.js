var http = require('http');
const fs = require('fs');
function create (fileName, fileContent){
  fs.writeFile(fileName, fileContent, (err) =>{
    console.log(err);
  });
}
const fileName = "index.html";
const fileContent = `<h1> Hello World </h1>
<p> This is Dhananjai... </p>`
create(fileName, fileContent);
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(fileContent);
}).listen(5000);