const http = require("http");
const fs = require("fs");

http
  .createServer()
  .on("request", (req, res) => {
    if (req.url === "/write") {
      res.write("more", "utf8", () => {
        setTimeout(() => {
          res.end("time");
        }, 2000);
      });
    } else if (req.url === "/ears") {
      const fileStream = fs.createReadStream("./riddles/ears.txt", "utf8");
      fileStream.on("open", () => {
          fileStream.pipe(res);
      })
      fileStream.on('error', err => {
          res.end(err)
      })
    } else {
      res.end("404");
    }
  })
  .listen(3000, () => {
    console.log(`server running on port 3000`);
  });
