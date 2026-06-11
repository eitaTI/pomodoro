# 19 - Blindagem com Zod 🛡️

E se alguém tentar salvar um Pomodoro pela API mandando `duracaoMinutos: -500`? O banco vai aceitar e estragar suas estatísticas! 
O **Zod** é um segurança de balada. Ele verifica a porta (a requisição) e só deixa passar quem segue as regras.

### 🎯 A Sua Missão
Instale as dependências de segurança:
`npm i zod`

Crie um novo endpoint `POST` no seu `app.controller.ts` para salvar uma sessão, mas com regras!

```typescript
// Adicione isso no topo do seu app.controller.ts:
import { Body, Post, BadRequestException } from '@nestjs/common';
import { z } from 'zod';

// O Schema do Zod (A Regra do Segurança)
const CriarSessaoSchema = z.object({
  tipo: z.enum(['FOCO', 'DESCANSO']), // Só aceita esses dois nomes exatos
  duracaoMinutos: z.number().positive().max(60) // Número positivo e no máximo 60 min
});

// Dentro do seu AppController, abaixo do @Get:
  @Post('salvar')
  async salvarSessao(@Body() body: any) {
    // Tenta validar. Se der erro, ele expulsa a requisição.
    const dadosSeguros = CriarSessaoSchema.safeParse(body);
    
    if (!dadosSeguros.success) {
      throw new BadRequestException(dadosSeguros.error.errors);
    }

    // Se passou do segurança, a gente chama a cozinha (AppService)
    // Crie a função salvarSessao no AppService usando o Prisma!
    return { mensagem: 'Sessão salva de forma super segura!' };
  }
```
A sua API agora é à prova de balas.
