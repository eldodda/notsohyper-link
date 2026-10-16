import { randomUUIDv7 } from "node:crypto";
import type { ShortRepository } from "./repository.js";
import { encodeURL } from "./utils/urlEncoder.js";
import { checkURL } from "./utils/urlValitator.js";

export class ShortService {
  constructor(private readonly shortRepo: ShortRepository) {}

  async encode(url: string) {
    const isValid = checkURL(url);
    if (!isValid) throw new Error("O texto inserido não é uma URL válida.");
    const code = encodeURL(url);
    await this.shortRepo.save(code, url);
    return code;
  }

  async findURL(code: string) {
    const longURL = await this.shortRepo.find(code);
    if (!longURL) throw new Error("Este código não corresponde a nenhuma URL.");
    return longURL;
  }
}
