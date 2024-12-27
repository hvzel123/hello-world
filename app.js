// Load the http module to create an HTTP server.
const http = require('http');

// Configure the HTTP server to respond with "Hello, World!"
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code 200 = OK
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Set the port and hostname where the server will listen
const PORT = 3000;
const HOSTNAME = '127.0.0.1'; // Localhost

// Start the server and listen for requests
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});