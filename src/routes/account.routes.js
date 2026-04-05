import { Router } from "express";
import accountController from "../controllers/account.controller.js";
import validate from "../middlewares/validation.middleware.js";

const router = Router();

router.post('/register', accountController.register);
router.post('/login', accountController.login);
router.delete('/user/:user', accountController.deleteUser);
router.patch('/user/:user', accountController.updateUser);
router.patch('/user/:user/role/:role', accountController.addRole);
router.delete('/user/:user/role/:role', accountController.deleteRole);

export default router;