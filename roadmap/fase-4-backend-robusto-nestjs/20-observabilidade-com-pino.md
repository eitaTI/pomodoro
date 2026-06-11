# 20 - Observabilidade com Pino 🌲

Para terminar a Fase 4 como um profissional Sênior, você precisa saber monitorar sua API.
Esqueça o `console.log`. Em empresas grandes, usamos Logs Estruturados (em formato JSON). Eles dizem exatamente quando, onde e qual usuário acessou o sistema.

O **Pino** é o gerador de logs mais rápido do ecossistema Node.js.

### 🎯 A Sua Missão
Para integrar o Pino no NestJS, vamos instalar o módulo oficial:
`npm i nestjs-pino pino-http`

Abra o seu `main.ts` e adicione o Logger do Pino para capturar TODAS as requisições que chegam na sua API:

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino'; // <-- Importe isso

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  
  // Manda o Nest usar o Pino como o "Alto Falante" oficial da aplicação
  app.useLogger(app.get(Logger)); 
  
  // Adiciona o CORS para o seu Frontend Next.js conseguir chamar essa API depois!
  app.enableCors(); 

  await app.listen(3000);
}
bootstrap();
```

Você também precisa adicionar a configuração do Pino lá no `app.module.ts`:
```typescript
import { LoggerModule } from 'nestjs-pino'; // Importe no topo

// Dentro de imports do @Module:
@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: { target: 'pino-pretty' } // Deixa o log bonito no terminal local!
      }
    })
  ],
//...
```
Rode o servidor (`npm run start:dev`) e faça uma requisição no navegador. Olha como o seu terminal fica colorido e super detalhado! 

**PARABÉNS!** A sua API Backend está corporativa, conectada a um banco rodando em Docker, blindada com Zod e monitorada pelo Pino.

Na próxima (e última grande) fase, vamos para o Frontend montar a interface visual com Tailwind e Next.js! 🚀
