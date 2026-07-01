const simularSalvamentoNoBanco = (): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("💾 Sessão salva no banco de dados com sucesso!");
            resolve();
        }, 2000);
    });
}

export class Pomodoro {
    private minutos: number;
    private segundos: number;
    private intervalId: NodeJS.Timeout | null = null; // Para podermos pausar depois!

    constructor(minutosIniciais: number) {
        this.minutos = minutosIniciais;
        this.segundos = 0;
    }


    private async tick(): Promise<void> { // Note o 'async' aqui!
        if (this.minutos === 0 && this.segundos === 0) {
            this.pausar();
            console.log("\nPOMODORO FINALIZADO! 🚨");
            console.log("Salvando no banco...");
            
            // Aqui o código PARA e espera a Promise se resolver!
            await simularSalvamentoNoBanco(); 
            
            console.log("Tudo pronto! Pode iniciar o próximo.");
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
