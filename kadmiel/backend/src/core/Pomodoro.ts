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



const meuRelogio = new Pomodoro(30);
meuRelogio.mostrarTempo(); // Vai printar "25:0