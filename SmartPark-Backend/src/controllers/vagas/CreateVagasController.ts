import { Request, response, Response } from "express";
import { CreateVagasService } from "../../services/vagas/CreateVagasService";

class CreateVagaController{
    async handle(req: Request, res: Response) {
        const{estabelecimento, andar, status} = req.body

        const CreateVaga = new CreateVagasService();
        const vaga = await CreateVaga.execute({
            estabelecimento,
            andar,
            status
        })
        return res.json(vaga);
    }
}

export {CreateVagaController}