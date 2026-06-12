# 05 - O Arsenal dos Arrays: Map, Filter e Reduce 🥷

Você não vai ter apenas UMA sessão de Pomodoro, você terá várias! Elas viverão dentro de uma lista (um Array).
No dia a dia, programar é basicamente manipular arrays. Esqueça o `for(let i=0; i<x; i++)` na maior parte do tempo. Nós usamos métodos modernos.

### 🎯 A Sua Missão
No seu guerreiro `playground.ts`, coloque as nossas sessões do dia e vamos filtrá-las!

```typescript
type TipoSessao = 'FOCO' | 'DESCANSO';

interface Sessao {
    id: number;
    duracaoMinutos: number;
    tipo: TipoSessao;
}

const diaDeTrabalho: Sessao[] = [ // O [] diz que é uma LISTA de Sessões
    { id: 1, duracaoMinutos: 25, tipo: 'FOCO' },
    { id: 2, duracaoMinutos: 5, tipo: 'DESCANSO' },
    { id: 3, duracaoMinutos: 25, tipo: 'FOCO' }
];

// FILTER: Quero criar uma nova lista SÓ com as sessões de FOCO
const sessoesDeFoco = diaDeTrabalho.filter((sessao) => sessao.tipo === 'FOCO');

// MAP: Quero pegar as sessões de foco e pegar SÓ os minutos delas
const apenasOsMinutos = sessoesDeFoco.map((sessao) => sessao.duracaoMinutos);

// REDUCE: Quero somar todos esses minutos (começando de 0)
const totalFoco = apenasOsMinutos.reduce((acumulador, minutos) => acumulador + minutos, 0);

console.log(`Você focou ${totalFoco} minutos hoje. Parabéns!`);
```

Rode isso! Entendeu como as três funções fluem uma na outra?
* **Filter**: Peneira os dados.
* **Map**: Transforma/Extrai os dados.
* **Reduce**: Junta tudo num valor só.

Você acabou de concluir a **Fase 1**. O básico já foi. Hora de criar o motor do Pomodoro!
