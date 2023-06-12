import { Request, response, Response } from "express";
import { AlterStatusService } from "../../services/vagas/AlterStatusService";

class AlterStatusController{
    async handle(req: Request, res: Response) {
        const {vagaID, status} = req.body
        const alterVaga = new AlterStatusService();
        const vaga = alterVaga.execute({
            vagaID,
            status
        })

        return res.json(vaga)
    }
}
export{AlterStatusController}