import logger from "pino";
import dayjs from "dayjs";
import { pid } from "process";

const loguru = logger({
  transport: {
    target: "pino-pretty",
    options: {
      levelFirst: true,
      translateTime: true,
      colorize: true,
    },
  },
  base: { pid: false },
  timestamp: () => `,"time:"${dayjs().format()}`,
});

export default loguru;
