const http = require("http");
const fs = require("fs");

http
  .createServer()
  .on("request", (req, res) => {
    if (req.url === "/") {
      const fileStream = fs.createReadStream("./riddles/welcome.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
      fileStream.on("error", (err) => {
        res.end(err);
      });
    } else if (req.url === "/begin") {
      const fileStream = fs.createReadStream("./riddles/ears.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
      fileStream.on("error", (err) => {
        res.end(err);
      });
    } else if (req.url === "/ears") {
      const fileStream = fs.createReadStream("./riddles/teeth.txt", "utf8");
      const link = fs.createReadStream("./riddles/hintTeeth.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
        <a href= {link}> need a hint? </a>
      });
      fileStream.on("error", (err) => {
        res.end(err);
      });
    } else if (req.url === "/teeth") {
      const fileStream = fs.createReadStream("./riddles/teeth.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
      fileStream.on("error", (err) => {
        res.end(err);
      });
    } else {
      res.end("404");
    }
  })
  .listen(3000, () => {
    console.log(`server running on port 3000`);
  });
