const http = require('http');
const fs = require('fs');
const port = 3000;

const requestHandler = (request, response) => {
  fs.writeFile('/hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
		if(err)throw err
  });
  response.end(`File hello-world written to server`)
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`Error: ${err}`);
  }

  console.log(`Server is listening on ${port}`)
})
