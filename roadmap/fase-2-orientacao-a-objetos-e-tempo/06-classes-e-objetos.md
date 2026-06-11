# 06 - Chega de Playground: Bem-vindo à Orientação a Objetos 🏭

Você agora precisa de algo mais robusto para controlar o seu relógio. Pense numa **Classe** como uma fábrica, e os **Objetos** como os carros que saem dela. A classe diz "todo carro tem acelerador e velocidade", e o objeto é o seu Fusca azul rodando na pista.

O nosso Pomodoro precisa de estado (ex: tempo atual) e ações (iniciar, pausar). Uma Classe é o lugar perfeito pra guardar isso tudo junto.

### 🎯 A Sua Missão
1. Pode apagar o `playground.ts`. Não precisamos mais dele.
2. Dentro da sua pasta `backend/src/`, crie uma pasta chamada `core`.
3. Dentro da `core`, crie um arquivo chamado `Pomodoro.ts`.

Vamos construir o motor do seu projeto:

```typescript
export class Pomodoro {
    // Propriedades (o que o pomodoro "TEM")
    minutos: number;
    segundos: number;

    // O Construtor roda 1 vez, assim que o objeto nasce!
    constructor(minutosIniciais: number) {
        this.minutos = minutosIniciais;
        this.segundos = 0;
    }

    // Métodos (o que o pomodoro "FAZ")
    mostrarTempo(): void { // void significa que não retorna nada
        console.log(`${this.minutos}:${this.segundos}`);
    }
}
```

Para testar se a sua fábrica funciona, vá no final do arquivo e rode:
```typescript
const meuRelogio = new Pomodoro(25);
meuRelogio.mostrarTempo(); // Vai printar "25:0"
```
Rode no terminal: `npx tsx src/core/Pomodoro.ts`
Você acabou de invocar seu primeiro objeto!
