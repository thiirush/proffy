import express from "express";
import ClassesControllers from "./controllers/ClassesControler";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();

const classesControllers = new ClassesControllers();
const connectionsControllers = new ConnectionsController();

routes.post("/classes", classesControllers.create);

routes.get("/classes", classesControllers.index);

routes.post("/connections", connectionsControllers.create);
routes.get("/connections", connectionsControllers.index);

export default routes;
