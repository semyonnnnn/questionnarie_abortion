// hello.js
const http = require("http");

const hostname = "0.0.0.0"; // listen on all interfaces
const port = 3000;

const server = http.createServer((req, res) => {
  // Set response header
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  // Send response body
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
