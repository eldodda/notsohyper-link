import { nanoid } from "nanoid";
import "dotenv/config";

const HOST = process.env.HOST;
const PORT = process.env.PORT;

export function encodeURL(URL: string) {
  const encodedURL = `https://${HOST}:${PORT}/${nanoid(5)}`;
  return encodedURL;
}
