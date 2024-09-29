const http = require("http");
const url = require("url");
const data = require("./data/user.js");

const server = http.createServer((req, res) => {
  //   console.log(url.parse(req.url, true));
  //   console.log(req);

  const parsedURL = url.parse(req.url, true);

  if (parsedURL.pathname === "/getUser" && req.method === "GET") {
    const user = data.filter(
      (item) =>
        item.username === parsedURL.query.username &&
        item.email === parsedURL.query.email
    );
    console.log(parsedURL);
    console.log(user);
    res.end(JSON.stringify(user));
  }
});

server.listen(3001, () => console.log("server has started"));