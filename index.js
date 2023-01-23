


module.exports = (app, { getRouter }) => {
  // Your code here
  
  const router = getRouter("/");

  // const instance = axios.create({
  //   baseURL: "https://probot-slugb0t.vercel.app"
  // });

  // router.post("/api/github/webhooks", (req, res) => {
  //   // Handle webhook event
  //   console.log(req.body);
  // });

  // app.route('issues.opened', (req, res) => {
  //   console.log(req.body);
  // })
  
  app.onAny(async (context) => {
    // app.log({event: context.name, action: context.payload[0]})
    app.log.info({event: context.name, action: context.payload});
    context.log.info("Connect");
    // await instance.post('/webhook', context.payload)
  });
  
  app.log.info("Yay, the app was loaded!");
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
