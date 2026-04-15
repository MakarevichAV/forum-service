import {Router} from 'express';
import accountController from "../controllers/account.controller.js";
import validate from "../middlewares/validation.middleware.js";

const router = Router();

router.post('/register', validate('register'), accountController.register);
router.post('/login', accountController.login);
router.delete('/user/:login', accountController.deleteUser);
router.patch('/user/:login', validate('updateUser'), accountController.updateUser);
router.patch('/user/:login/role/:role', validate('changeRoles', 'params'), accountController.addRole);
router.delete('/user/:login/role/:role', validate('changeRoles', 'params'), accountController.deleteRole);
router.patch('/password', accountController.changePassword);
router.get('/user/:login', accountController.getUsers);

export default router;