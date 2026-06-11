# 02 - Tipos e a Mágica da Inferência 🎩

O poder do TypeScript é prever o que tem dentro de uma variável. 
Nós dizemos a ele se algo é texto (`string`), número (`number`) ou verdadeiro/falso (`boolean`).

### 🎯 A Sua Missão
Abra o seu `playground.ts` e apague o que tinha lá.
Escreva o seguinte código:

```typescript
// Nós forçamos o tipo (:)
let nomeParticipante: string = "Coloque seu nome aqui";
let tempoFoco: number = 25;
let estaDescansando: boolean = false;

// Tente fazer isso e veja a linha vermelha do erro no seu editor:
tempoFoco = "vinte e cinco"; 
```

Viu o erro? O TS não deixa você colocar texto numa variável que nasceu para ser número! Apague a linha com erro.

**Inferência:**
Muitas vezes, você não precisa avisar o tipo. Se você fizer:
`let ciclos = 4;`
O TS é inteligente e já sabe que `ciclos` é um `number`.

**O Inimigo Público Nº 1: O `any`**
Se você disser `let coisa: any`, o TypeScript desliga a verificação pra essa variável. Nunca use `any` se puder evitar. É como comprar um carro blindado e andar com a janela aberta.

Quando testar e entender os erros, vá para o passo 3!
