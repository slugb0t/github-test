module.exports = (app) => {
  // Your code here
  const axios = require("axios");
  const instance = axios.create({
    baseURL: "http://localhost:3000",
  });

  app.on("installation", async (context) => {
    // app.log({event: context.name, action: context.payload[0]})
    // app.log.info({ event: context.name, action: context.payload });
    await instance.post("/api/github/webhooks", context.payload);
  });

  app.log.info("Yay, the app was loaded!");
};
