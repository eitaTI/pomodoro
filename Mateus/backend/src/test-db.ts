import 'dotenv/config'
import { PrismaClient } from '../generated/prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = `${process.env.DATABASE_URL}`
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({ adapter })


async function main() {
    console.log("Salvando no banco...");
    
    // Criando um registro na tabela!
    const novaSessao = await prisma.pomodoroSession.create({
        data: {
            tipo: 'FOCO',
            duracaoMinutos: 25
        }
    });

    console.log("Salvo com sucesso! Olha como ficou:", novaSessao);

    // Listando tudo que tem no banco
    const todasSessoes = await prisma.pomodoroSession.findMany();
    console.log("Histórico completo:", todasSessoes);
}

main().catch(console.error);