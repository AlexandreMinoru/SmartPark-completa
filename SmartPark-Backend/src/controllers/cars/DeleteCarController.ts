import { Request, response, Response } from "express";
import { DeleteCarService } from "../../services/cars/DeleteCarService";

class DeleteCarController{
    async handle(req: Request, res: Response) {
        const{carID} = req.body
        const deleteCar = new DeleteCarService();
        const remove = await deleteCar.execute({
            carID
        })
        return res.json(remove)
    }

}
export {DeleteCarController}