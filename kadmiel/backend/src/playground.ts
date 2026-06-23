//console.log(`Hoje voce focou por ${totalHoje} minutos!`);

type TipoSessao = 'FOCO' | 'DESCANSO';

interface Sessao {
    id: number;
    duracaoMinutos: number;
    tipo: TipoSessao;
}

const diaDetrabalho:Sessao[] = [
    {id: 1, duracaoMinutos:25, tipo: 'FOCO'},
    {id: 2, duracaoMinutos: 5, tipo:'DESCANSO'},
    {id: 3, duracaoMinutos: 25, tipo:'FOCO'}
];

const sessoesDeFoco = diaDetrabalho.filter((sessao)=>
sessao.tipo === 'FOCO');


const apenasOsMinutos = sessoesDeFoco.map((sessao) =>
sessao.duracaoMinutos);

const totalFoco = apenasOsMinutos.reduce((acumulador, minutos) =>
acumulador + minutos, 0);

console.log(`Você focou ${totalFoco} minutos hoje. P`)