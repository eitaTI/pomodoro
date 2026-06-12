# 10 - Desafio de Encerramento: O Seu Cronômetro CLI 🏆

Parabéns! Se você chegou até aqui, você já sabe o essencial de TypeScript (Tipagem forte, Interfaces, OOP com Classes e Promises) para começar a brincar com o Mundo Real.

Nós já temos a nossa classe `Pomodoro`. O nosso desafio final da Fase 2 é criar um arquivo principal para rodar o nosso CLI (Cronômetro no Terminal) de forma mais organizada, separando quem *controla* o Pomodoro, de onde o Pomodoro *nasce*.

### 🎯 A Sua Missão
1. Crie um arquivo chamado `index.ts` dentro de `backend/src/`.
2. Delete as 3 linhas de teste que você botou no final do arquivo `Pomodoro.ts` (aquelas que tinham `const meuRelogio = new Pomodoro(1);`). Nós queremos que a classe apenas sirva como o motor.
3. No seu `index.ts`, vamos importar o motor e rodá-lo:

```typescript
// index.ts
import { Pomodoro } from './core/Pomodoro';

console.log("🔥 BEM-VINDO AO POMODORO CLI 🔥");
console.log("Iniciando sua sessão de foco de 25 minutos...");

// Nós podemos criar quantos pomodoros quisermos agora!
const sessaoDeEstudo = new Pomodoro(25);

// Vamos começar!
setTimeout(() => {
    sessaoDeEstudo.iniciar();
}, 2000); // Espera 2 segundinhos pra começar
```

Rode `npx tsx src/index.ts`.

Seu Cronômetro funcional e estruturado usando Orientação a Objetos está finalizado.
Guarde bem esse sentimento de conquista, pois a partir da **Fase 3** nós vamos abrir o Docker, subir um Banco de Dados de verdade (PostgreSQL) e criar a API do Pomodoro.

Respira, bebe uma água e clica na próxima fase do Roadmap!
