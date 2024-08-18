import express from "express";
import config from "config";
import connect from "./utils/connect";
import loguru from "./utils/logger";
import routes from "./routes";

const port = config.get<number>("port");
const app = express();

app.listen(port, async () => {
  loguru.info(`Application is active at http://localhost:${port}`);
  await connect();
  routes(app);
});
