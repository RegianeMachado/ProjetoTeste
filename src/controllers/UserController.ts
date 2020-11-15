import { Response, Request } from "express";
import { Users } from "../entity/Users";
import { getConnection } from "typeorm";

class UserController {
  static index(res: Response, req: Request) {
    console.log("oi");
  }
  static store(res: Response, req: Request) {}
  static update(res: Response, req: Request) {}
  static delete(res: Response, req: Request) {}
}

export default UserController;
