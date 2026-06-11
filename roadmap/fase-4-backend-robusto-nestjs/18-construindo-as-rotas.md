# 18 - Construindo as Rotas do Pomodoro 🛣️

Agora o garçom precisa servir o pedido real! Vamos criar uma rota de `GET` para listar o histórico.

### 🎯 A Sua Missão
Abra o `app.controller.ts` e o `app.service.ts` (a cozinha).

**No `app.service.ts` (A Cozinha):**
```typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  // Injetando o banco aqui dentro!
  constructor(private prisma: PrismaService) {}

  async getHistorico() {
    // Busca tudo que está no banco, ordenado pelo mais recente
    return this.prisma.pomodoroSession.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }
}
```

**No `app.controller.ts` (O Garçom):**
```typescript
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('pomodoro') // <-- Agora a rota é /pomodoro
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('historico') // <-- Rota GET /pomodoro/historico
  buscarHistorico() {
    return this.appService.getHistorico();
  }
}
```

Vá no navegador e acesse: `http://localhost:3000/pomodoro/historico`
Você deve ver um array JSON (talvez vazio, ou talvez com o teste que fizemos antes). Você acabou de criar a sua primeira API!
