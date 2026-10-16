import express from "express";
import "dotenv/config";
import { route } from "./routes.js";
import { connectRedis } from "./db.js";

const app = express();

app.use(express.json());
app.use(route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectRedis();
  console.log(`Server runnin on port ${PORT}.`);
});
