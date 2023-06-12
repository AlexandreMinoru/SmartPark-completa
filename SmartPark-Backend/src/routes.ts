import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateCarController } from "./controllers/cars/CreateCarController";
import { DeleteCarController } from "./controllers/cars/DeleteCarController";
import { CheckUserCarController } from "./controllers/cars/CheckUserCarsController";
import { CreateVagaController } from "./controllers/vagas/CreateVagasController";
import { DeleteVagaontroller } from "./controllers/vagas/DeleteVagasController";
import { CheckAllVagaasController } from "./controllers/vagas/CheckAllVagasController";
import { GetVagasController } from "./controllers/vagas/GetVagasController";
import { AlterStatusController } from "./controllers/vagas/AlterStatusController";
const router = Router();
//Rotas USER ------------
router.post('/smartpark/userinsert', new CreateUserController().handle)

router.post('/smartpark/login', new AuthUserController().handle)

router.post('/smartpark/carinsert', new CreateCarController().handle)

router.delete('/smartpark/cardelete', new DeleteCarController().handle)

router.post('/smartpark/createvaga', new CreateVagaController().handle)

router.delete('/smartpark/deletevaga', new DeleteVagaontroller().handle)

router.get('/smartpark/carcheck', new CheckUserCarController().handle)

router.get('/smartpark/allvagas', new CheckAllVagaasController().handle)

router.get('/smartpark/getvagas', new GetVagasController().handle)

router.put('/smartpark/alterstatus', new AlterStatusController().handle)
export { router };