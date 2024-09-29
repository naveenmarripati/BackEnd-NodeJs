const http = require("http");
const url = require("url");
const data = require("./data/todoQueryData.js");

const server = http.createServer((req, res) => {
  //   console.log(url.parse(req.url, true));
  //   console.log(req);

  const parsedURL = url.parse(req.url, true);

  if (parsedURL.pathname === "/getTodo" && req.method === "GET") {
    const user = data.filter(
      (item) =>
        item.completed === parsedURL.query.completed &&
        item.active === parsedURL.query.active
    );
    console.log(parsedURL);
    console.log(user);
    res.end(JSON.stringify(user));
  }
});

server.listen(3001, () => console.log("server has started"));