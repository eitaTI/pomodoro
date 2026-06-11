# 14 - Prisma Client na Prática 💾

Chegou a hora de salvar a nossa primeira sessão real no banco de dados!

### 🎯 A Sua Missão
Para usarmos o Prisma no código, precisamos instalar o Cliente dele.
Rode no terminal: `npm install @prisma/client`

Agora, crie um arquivo `test-db.ts` dentro da sua pasta `backend/src/`:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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
```

Rode no terminal: `npx tsx src/test-db.ts`

Você deve ver os dados indo e voltando do banco! Tente rodar várias vezes e veja o histórico crescendo.
Parabéns, você fechou a **Fase 3**. O seu motor de banco de dados está tinindo. Bora pra **Fase 4** criar a API!
