// Posting a RAW JSON Data from body (POSTMAN API) through request
const http = require("http");

const todo = require("./data/todo");

const server = http.createServer((req, res) => {
  console.log("request object", req);
  if (req.url === "/viewtodo" && req.method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(todo));
  }

  if (req.url === "/addtodo" && req.method === "POST") {
    console.log("post req triggered");
    req.on("data", (todo) => {
      console.log(todo); //data will be in readable buffer stream form
      console.log(todo.toString()); // readable buffer stream converted to string form (json form)
      reqdata = todo.toString(); //Storing it in a temporary variable - reqdata
    });

    req.on("end", () => {
      /**DB SAVE */
      console.log(reqdata);
      res.end(reqdata);
      //   res.end(JSON.stringify(reqdata));
    });

    req.on("close", () => {
      console.log("closed");
    });

    // res.end("post req triggered");
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("<h1>Not Found</h1>");
  }
});

server.listen(3004, () => console.log("server is started"));