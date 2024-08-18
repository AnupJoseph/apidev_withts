import mongoose from "mongoose";
import config from "config";
import loguru from "./logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
    loguru.info("DB connected");
  } catch (error) {
    loguru.error("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
