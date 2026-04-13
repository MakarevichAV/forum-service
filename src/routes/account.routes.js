import {Router} from 'express';
import accountController from "../controllers/account.controller.js";

const router = Router();

router.post('/register', accountController.register);
router.post('/login', accountController.login);
router.delete('/user/:login', accountController.deleteUser);
router.patch('/user/:login', accountController.updateUser);
router.patch('/user/:login/role/:role', accountController.addRole);
router.delete('/user/:login/role/:role', accountController.deleteRole);
router.patch('/password', accountController.changePassword);
router.get('/user/:login', accountController.getUsers);

export default router;