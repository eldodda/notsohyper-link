import { ShortController } from "../controller.js";
import { ShortRepository } from "../repository.js";
import { ShortService } from "../service.js";

const shortRepo = new ShortRepository();
const shortServ = new ShortService(shortRepo);
export const shortCtrl = new ShortController(shortServ);
