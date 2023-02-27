var http = require("http");
const { mainModule } = require("process");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    if(req.url == "/welcome"){
        res.writeHead(200, { "content of type": "text/plain"});
        res.write("Welcome to Dominos!");
        res.end();
    }
    else if(req.url == "/content"){
        res.writeHead(200, {"content of type": "application/json"});
        res.write(
            
    `phone: '18602100000', 
    email: 'guestcaredominos@jublfood.com' `

        );
        res.end();
    }
    else {
        res.writeHead(404, {});
        res.write(`Error 404, The page you are searching cannot be found or please try again some time`);
        res.end();
    }
  
}
httpServer.listen(8081, ()=>{ console.log(`Server is up at PORT 8081`)})
module.exports = httpServer;