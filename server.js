const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    // Send an html file using readFile method
    if (req.url === "/") {
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        } else {
          res.end(data);
        }
      });
    } else if (req.url === "/about") {
      fs.readFile("./about.html", (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        } else {
          res.end(data);
        }
      });
    } else if (req.url === "/contact-me") {
      fs.readFile("./contactMe.html", (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        } else {
          res.end(data);
        }
      });
    } else {
      fs.readFile("./404.html", (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        } else {
          res.end(data);
        }
      });
    }
  })
  .listen(4000, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Server stated....");
    }
  });
