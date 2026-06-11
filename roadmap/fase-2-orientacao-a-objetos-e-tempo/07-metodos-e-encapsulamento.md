# 07 - O Segredo de Estado (Encapsulamento) 🔒

No código anterior, qualquer pessoa que usasse a nossa classe poderia fazer isso de fora:
`meuRelogio.minutos = -999;`
Isso quebraria o nosso cronômetro! Um cronômetro não pode ser alterado de fora do nada. 

É aí que entra o **Encapsulamento** (colocar as coisas numa cápsula). Nós usamos `private` para dizer: "Ninguém mexe nisso de fora da classe" e `public` para dizer: "Isso você pode apertar". É tipo o cofre de um banco e a porta giratória.

### 🎯 A Sua Missão
Edite o seu `Pomodoro.ts` para proteger o relógio:

```typescript
export class Pomodoro {
    // Agora são privados. Ninguém toca neles por fora!
    private minutos: number;
    private segundos: number;

    constructor(minutosIniciais: number) {
        this.minutos = minutosIniciais;
        this.segundos = 0;
    }

    // Ações permitidas (públicas)
    public tick(): void {
        if (this.segundos === 0) {
            this.minutos--;
            this.segundos = 59;
        } else {
            this.segundos--;
        }
    }

    public getTempoFormatado(): string {
        // Formata para ter 2 dígitos (ex: "09" em vez de "9")
        const min = String(this.minutos).padStart(2, '0');
        const seg = String(this.segundos).padStart(2, '0');
        return `${min}:${seg}`;
    }
}

// Testando...
const relogio = new Pomodoro(25);
console.log(relogio.getTempoFormatado()); // 25:00
relogio.tick(); // Tirou 1 segundo
console.log(relogio.getTempoFormatado()); // 24:59
// relogio.minutos = 10; <-- Isso agora dá ERRO! (Descomente pra ver)
```

Testou o código? A lógica do cronômetro já está funcionando! Agora só falta o relógio rodar sozinho.
