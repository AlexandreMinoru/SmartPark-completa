import { Request, response, Response } from "express";
import { DeleteVagasService } from "../../services/vagas/DeleteVagasService";

class DeleteVagaontroller{
    async handle(req: Request, res: Response) {
        const {vagaId} = req.body

        const Deletevaga = new DeleteVagasService();
        const vaga = await Deletevaga.execute({
            vagaId
        })
        return res.json(vaga);
    }
}

export {DeleteVagaontroller}