import { Request, response, Response } from "express";
import { CreateCarService } from "../../services/cars/CreateCarsService";


class CreateCarController{
    async handle(req: Request, res: Response) {
        const { idUser, placa, modelo, fabricante } = req.body
        const CreateCar = new CreateCarService();
        const create = await CreateCar.execute({
            idUser, placa, modelo, fabricante
        })
        return res.json(create)
    }
}
export {CreateCarController}