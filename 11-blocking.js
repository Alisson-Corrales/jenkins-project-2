const http = require("http");

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.end("home page");
        break;
      case "/block": {
        setTimeout(() => {
          for (let i = 0; i < 251; i++) {
            for (let j = 0; j < 51; j++) {
              console.log(`${i} ${j}`);
            }
          }
        }, 0);
        res.end("block");
        break;
      }
      default:
        res.end("404");
    }
  })
  .listen(3000, () => {
    console.log(`server is running and listening at port 3000`);
  });

