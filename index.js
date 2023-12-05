const http = require('http');

const requestHandler = (req, res) => {
      console.log('Server hit!');
      if(req.url == '/page') {
        res.setHeader('Content-Type','text/html')
        res.end('<h1>Hello Page</h1>');
      }
      else{
          res.end(JSON.stringify({message: "Hello World"}));
      }
}

const server = http.createServer(requestHandler);

var port = 3000;
var host = 'localhost';

server.listen(port,host,()=> {
    console.log(`Server started at ${host}:${port}`);
})