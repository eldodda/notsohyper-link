import { URL } from "url";

export function checkURL(input: string) {
  let url;
  try {
    try {
      url = new URL(input);
    } catch (err) {
      url = new URL("https://" + input);
    }

    const isHttpOrHttps = url.protocol === "http:" || url.protocol === "https:";
    const hasValidHostname = url.hostname && url.hostname.includes(".");
    return isHttpOrHttps && hasValidHostname;
  } catch (err) {
    return false;
  }
}
