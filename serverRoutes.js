// const http = require("http");
// console.log(http);

// const server = http.createServer((req, res) => {
//   console.log("request object", req);
//   res.end("done");
// });

// server.listen(3004, () => console.log("server is started"));

//Printing the flat data (user.js) on Postman API response page
// const http = require("http");

// const data = require("./data/user");

// const server = http.createServer((req, res) => {
//   console.log("request object", req);
//   if (req.url === "/view") {
//     res.writeHead(200, { "content-type": "application/json" });
//     res.end(JSON.stringify(data));
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("<h1>Not Found</h1>");
//   }
// });

// server.listen(3004, () => console.log("server is started"));

// //Printing the flat data (user.js) on Postman API response page based on request methods(GET,POST)
// const http = require("http");

// const data = require("./data/user");

// const server = http.createServer((req, res) => {
//   console.log("request object", req);
//   if (req.url === "/users" && req.method === "GET") {
//     res.writeHead(200, { "content-type": "application/json" });
//     res.end(JSON.stringify(data));
//   }

//   if (req.url === "/users" && req.method === "POST") {
//     console.log("post req triggered");
//     res.end("post req triggered");
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("<h1>Not Found</h1>");
//   }
// });

// server.listen(3004, () => console.log("server is started"));

// Posting a RAW JSON Data from body (POSTMAN API) through request
const http = require("http");

const data = require("./data/user");

const server = http.createServer((req, res) => {
  console.log("request object", req);
  if (req.url === "/users" && req.method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(data));
  }

  if (req.url === "/users" && req.method === "POST") {
    console.log("post req triggered");
    req.on("data", (data) => {
      console.log(data); //data will be in readable buffer stream form
      console.log(data.toString()); // readable buffer stream converted to string form (json form)
      reqdata = data.toString(); //Storing it in a temporary variable - reqdata
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