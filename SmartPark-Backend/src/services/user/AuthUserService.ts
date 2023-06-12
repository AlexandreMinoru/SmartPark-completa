import prismaClient from "../../prisma";
interface AuthRequest {
    email: string;
    password: string;
}
class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        //verificar se email existe
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            },
            select:{
                name:true,
                password:true
            }
        })
        if (!user) {
            throw new Error("Usuario não encontardo")
        }
        //verificar validade password

        if (user.password !== password) {
            throw new Error("Senha errada")
        }
        //return { ok: "Chamada serviço Auth" }
        return user
    }
}
export { AuthUserService } 