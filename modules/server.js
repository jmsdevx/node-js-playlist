const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Heyoooooo");
});

const port = 3000;
server.listen(port, "127.0.0.1");

console.log(`listening on port ${port}`);
