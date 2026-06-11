# 17 - A Injeção de Dependências 💉

No NestJS, você não sai criando instâncias das classes manualmente fazendo `new PrismaClient()` toda hora.
Você delega isso pro Nest! Você bota um `@Injectable()` em cima da classe, e o Nest "injeta" ela pra você onde precisar. Isso economiza memória e evita código repetido.

### 🎯 A Sua Missão
Nós precisamos injetar o Prisma no Nest.
Crie um arquivo `prisma.service.ts` na pasta `backend/src/`:

```typescript
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable() // Essa palavra mágica faz a injeção funcionar!
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect(); // Conecta no banco quando o Nest ligar
  }
}
```

Agora abra o `app.module.ts` e coloque ele nos Providers para o NestJS saber que ele existe:

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service'; // <-- Adicione isso

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService], // <-- Adicione aqui!
})
export class AppModule {}
```
Feito! O Prisma está conectado no coração do seu backend.
