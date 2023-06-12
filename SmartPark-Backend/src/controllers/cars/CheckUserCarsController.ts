import { Request, response, Response } from "express";
import { CheckUserCarService } from "../../services/cars/CheckUserCarService";


class CheckUserCarController{
    async handle(req: Request, res: Response) {
        const {idUser} = req.body;
        const checkCar = new CheckUserCarService();
        const check = await checkCar.execute({
            idUser
        })
        return res.json(check)
    }
}
export {CheckUserCarController}