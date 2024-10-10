import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.get("/all", UserController.getAllUser);

router.post("/add", UserController.addUser);

router.post("/edit/:id", UserController.editUser);
export default router;
