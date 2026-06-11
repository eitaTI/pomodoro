# 03 - Funções que Exigem Respeito 🛡️

Uma função é um bloco de código que faz uma tarefa. No TS, a gente "blinda" as entradas (parâmetros) e as saídas (retornos) dessa função.

### 🎯 A Sua Missão
Ainda no `playground.ts`, vamos criar uma função que calcula quantos minutos de Pomodoro você fez no dia.

Copie e cole:
```typescript
// Função tradicional: recebe um number e OBRIGATORIAMENTE retorna um number
function calculaTempoTotal(ciclosDeFoco: number): number {
    const tempoPorCiclo = 25;
    return ciclosDeFoco * tempoPorCiclo;
}

// Arrow function (um jeito mais moderno e curto de escrever a mesma coisa)
const calculaTempoArrow = (ciclosDeFoco: number): number => {
    return ciclosDeFoco * 25;
}

const totalHoje = calculaTempoTotal(4);
console.log(`Hoje você focou por ${totalHoje} minutos!`);
```

Rode no terminal: `npx tsx src/playground.ts`

**O que aprendemos:**
Se a função diz que retorna `number`, e você tentar retornar `"batata"` dentro dela, o código nem vai compilar. O TS garante que você entregue o que prometeu!
