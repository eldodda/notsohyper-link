import { db } from "./db.js";

export class ShortRepository {
  async save(code: string, url: string) {
    await db.set(code, url);
    return;
  }

  async find(code: string) {
    const url = await db.get(code);
    return url;
  }
}
