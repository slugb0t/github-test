const { run } = require("probot");
// const { getRouter } = require("probot");
const probotApp = require("./probot/index.js");
const setupServer = require("./server/server.js");
const server = setupServer();

// server.use(express.json());

// start the express server
server.listen(3000, () => {
  console.log("Express server running on http://localhost:3000/");
});
// pass a probot app function
run(probotApp, { webhookPath: "/api/github/webhooks", server: server });
// probotApp.route(router);
