import prismaClient from "../../prisma";
interface DeleteCar{
    carID: number
}

class DeleteCarService{
    async execute({carID}: DeleteCar){
        const car = await  prismaClient.car.findFirst({
            where: {
                carID: carID
            }

        })
        if(!car){
            throw new Error("carro não cadastrado");
        }
        const remove = await  prismaClient.car.delete({
            where:{
                carID: carID
            }
        })
        const text = "O carro removido foi o com id: " + carID;
        return text;
    }
}

export {DeleteCarService}