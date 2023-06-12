import { Request, response, Response } from "express";
import { CheckAllVagasServices } from "../../services/vagas/CheckAllVagasServices";

class CheckAllVagaasController{
    async handle(req: Request, res: Response) {
        const checkVaga = new CheckAllVagasServices()
        const vaga = await checkVaga.execute();
        return res.json(vaga);
    }
}

export {CheckAllVagaasController}