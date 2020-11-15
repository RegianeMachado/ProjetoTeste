import UserController from "../controllers/UserController";

import { Router } from "express";

const routes = Router();

routes.get("/", UserController.index);
routes.post("./users", UserController.store);
routes.put("./usersUpdate", UserController.update);
routes.delete("./userDelete", UserController.delete);

export default routes;
