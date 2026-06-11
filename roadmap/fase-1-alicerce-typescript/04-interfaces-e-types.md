# 04 - Modelando o Mundo com Interfaces e Types 🧩

Até agora usamos tipos simples. Mas e se quisermos representar algo complexo, tipo um "Ciclo do Pomodoro"? Um ciclo tem um id, uma duração, e o tipo (foco ou pausa).
Para isso usamos `type` ou `interface`. Pense neles como o **molde** de um bolo.

### 🎯 A Sua Missão
No `playground.ts`, vamos criar o molde da nossa Sessão.

```typescript
// Estamos criando um tipo nosso! Ele só aceita essas duas palavras exatas.
type TipoSessao = 'FOCO' | 'DESCANSO';

// A Interface é o contrato. Um objeto "Sessao" tem que ter exatamente isso:
interface Sessao {
    id: number;
    duracaoMinutos: number;
    tipo: TipoSessao;
}

// Agora vamos criar um objeto usando a nossa interface:
const minhaPrimeiraSessao: Sessao = {
    id: 1,
    duracaoMinutos: 25,
    tipo: 'FOCO' // Tente mudar pra 'DORMIR' e veja o TS gritar com você!
};

console.log(minhaPrimeiraSessao);
```

Rode o arquivo (`npx tsx src/playground.ts`).
Você acabou de criar o seu primeiro modelo de dados! Isso será a base do nosso banco de dados no futuro.
