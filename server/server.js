const express = require("express");
const path = require("path");

const setupServer = () => {
  const router = express();
  router.use(express.static(path.join(__dirname, "../frontend/build")));
  //   const app = express();

  router.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });

  router.post("/api/github/webhooks", (req, res) => {
    console.log(req.body);
    res.send(req.body);
    res.status(200).end();
  });

  //  app.use(router);
  return router;
};

module.exports = setupServer;
