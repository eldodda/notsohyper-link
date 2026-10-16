import { createClient } from "redis";

export const db = createClient();

export async function connectRedis() {
  try {
    await db.connect();
    console.log("Redis connected.");
  } catch (err) {
    console.log(
      "Error connecting to Redis:\n|========================|\n",
      err
    );
  }
}
