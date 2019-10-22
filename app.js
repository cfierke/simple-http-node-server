const http = require('http');
const fs = require('fs');
const port = 3000;

const requestHandler = (request, response) => {
  response.end(`Handling a request on port ${port}`)
  try {
    fs.writeFileSync('hello-world.txt', 'Hello to this great world', 'utf8');
    console.log('File written successfully');
  } catch (err) {
    console.log(JSON.stringify(err));
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`Error: ${err}`);
  }

  console.log(`Server is listening on ${port}`)
})
