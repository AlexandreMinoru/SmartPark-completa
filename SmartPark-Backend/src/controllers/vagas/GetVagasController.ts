import { Request, response, Response } from "express";
import { GetVagasServices } from "../../services/vagas/GetVagasServices";

class GetVagasController{
    async handle(req: Request, res: Response) {
        const{estabelecimento} = req.body

        const checkVaga = new GetVagasServices()
        const vaga = await checkVaga.execute({
            estabelecimento
        })

        return res.json(vaga)
    }
}
export {GetVagasController}