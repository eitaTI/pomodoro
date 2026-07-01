import { Pomodoro } from "./Pomodoro";
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  
  // Manda o Nest usar o Pino como o "Alto Falante" oficial da aplicação
  app.useLogger(app.get(Logger)); 
  
  // Adiciona o CORS para o seu Frontend Next.js conseguir chamar essa API depois!
  app.enableCors(); 

  await app.listen(3000);
}
bootstrap();

console.log("🔥 BEM-VINDO AO POMODORO CLI 🔥");
console.log("Iniciando sua sessão de foco de 25 minutos...");

// Nós podemos criar quantos pomodoros quisermos agora!
const sessaoDeEstudo = new Pomodoro(25);

// Vamos começar!
setTimeout(() => {
    sessaoDeEstudo.iniciar();
}, 2000); // Espera 2 segundinhos pra começar