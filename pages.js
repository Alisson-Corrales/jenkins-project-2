const http = require("http");
const fs = require("fs");

http
  .createServer()
  .on("request", (req, res) => {
    //🍓 welcome 🍓//
    if (req.url === "/") {
      const fileStream = fs.createReadStream("./riddles/welcome.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
    }

    // 🐝 riddles 🐝 //

    //🍓 ears 🍓//
    else if (req.url === "/begin") {
      const fileStream = fs.createReadStream("./riddles/ears.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
    }
    //🍓 teeth 🍓//
    else if (req.url === "/ears") {
      const fileStream = fs.createReadStream("./riddles/teeth.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
    }
    //🍓 eyes 🍓//
    else if (req.url === "/teeth") {
      const fileStream = fs.createReadStream("./riddles/eyes.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
    }
    //🍓 skin 🍓//
    else if (req.url === "/eyes") {
      const fileStream = fs.createReadStream("./riddles/skin.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
    }
    //🍓 blood 🍓//
    else if (req.url === "/skin") {
      const fileStream = fs.createReadStream("./riddles/blood.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
    }
    //🍓 brain 🍓//
    else if (req.url === "/blood") {
      const fileStream = fs.createReadStream("./riddles/brain.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
    }

    // 🐝 hints 🐝  //

    //🍓 hintEars 🍓//
    else if (req.url === "/hint1") {
      const fileStream = fs.createReadStream("./hints/hintEars.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
    }
    //🍓 hintTeeth 🍓//
    else if (req.url === "/hint2") {
      const fileStream = fs.createReadStream("./hints/hintTeeth.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
    }
    //🍓 hintSkin 🍓//
    else if (req.url === "/hint3") {
      const fileStream = fs.createReadStream("./hints/hintSkin.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
    }
    //🍓 hintEyes 🍓//
    else if (req.url === "/hint4") {
      const fileStream = fs.createReadStream("./hints/hintEyes.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
    }
    //🍓 hintBlood 🍓//
    else if (req.url === "/hint5") {
      const fileStream = fs.createReadStream("./hints/hintBlood.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
    }
    //🍓 hintBrain 🍓//
    else if (req.url === "/hint6") {
      const fileStream = fs.createReadStream("./hints/hintBrain.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
    }
    //🍓 end 🍓//
    else if (req.url === "/brain") {
      const fileStream = fs.createReadStream("./riddles/end.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
    }
    // 🐝 real ending 🐝 //
    else if (req.url === "/hide") {
      const fileStream = fs.createReadStream("./riddles/hide.txt", "utf8");
      fileStream.on("open", () => {
        fileStream.pipe(res);
      });
    } else {
      res.end("404");
    }
  })
  .listen(3000, () => {
    console.log(`server running on port 3000`);
  });
