# 08 - O Relógio Ganha Vida: `setInterval` ⏱️

Nós criamos a função `tick()` que reduz um segundo. Mas a gente não quer ficar chamando isso na mão. Queremos que o computador chame sozinho a cada segundo.
Para isso, usamos a função mágica do JavaScript: `setInterval`.

Ela recebe duas coisas: o que fazer, e a cada quantos milissegundos fazer (1 segundo = 1000 milissegundos).

### 🎯 A Sua Missão
Adicione o método `iniciar` na sua classe `Pomodoro.ts`. O arquivo ficará assim:

```typescript
export class Pomodoro {
    private minutos: number;
    private segundos: number;
    private intervalId: NodeJS.Timeout | null = null; // Para podermos pausar depois!

    constructor(minutosIniciais: number) {
        this.minutos = minutosIniciais;
        this.segundos = 0;
    }

    private tick(): void {
        if (this.minutos === 0 && this.segundos === 0) {
            this.pausar();
            console.log("\nPOMODORO FINALIZADO! 🚨");
            return;
        }

        if (this.segundos === 0) {
            this.minutos--;
            this.segundos = 59;
        } else {
            this.segundos--;
        }
        
        console.clear(); // Limpa o terminal pra criar efeito de relógio
        console.log(`⏱️ Tempo: ${this.getTempoFormatado()}`);
    }

    public iniciar(): void {
        // Se já tem um intervalo rodando, não faz nada
        if (this.intervalId) return; 
        
        // Chama o this.tick() a cada 1000ms (1 segundo)
        this.intervalId = setInterval(() => this.tick(), 1000);
    }

    public pausar(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId); // Mata o loop de tempo
            this.intervalId = null;
        }
    }

    private getTempoFormatado(): string {
        const min = String(this.minutos).padStart(2, '0');
        const seg = String(this.segundos).padStart(2, '0');
        return `${min}:${seg}`;
    }
}

// BORA TESTAR DE VERDADE!
const meuRelogio = new Pomodoro(1); // Pomodoro de 1 minuto pra teste rápido
meuRelogio.iniciar();
```

Rode `npx tsx src/core/Pomodoro.ts` e veja a mágica no terminal! O relógio está vivo!
