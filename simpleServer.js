const http = require("http");
console.log(http);

const data = [
  {
    id: 1,
    username: "xyz",
  },
  {
    id: 2,
    username: "abc",
  },
];

const server = http.createServer((req, res) => {
  console.log("request object", req);
  //   res.setHeader("content-type", "text/plain");
  //   res.end("Hello from the Server");
  //   res.setHeader("content-type", "text/html");
  //   res.end("<h1>Hello from the Server</h1>");
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(data));
});

server.listen(3004, () => console.log("server is started"));