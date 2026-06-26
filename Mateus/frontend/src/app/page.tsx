"use client";
import { useState, useEffect } from "react";
import { TimerDisplay } from './components/TimerDisplay';

type BreakConfig = {
  id: number;
  quando: number;
  duracao: number;
};

const PADRAO_BREAKS: BreakConfig[] = [
  { id: 1, quando: 17 * 60 + 30, duracao: 150 },
  { id: 2, quando: 10 * 60, duracao: 150 },
];

export default function Home() {
  const [carregando, setCarregando] = useState(true);
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pomodoro/historico")
      .then(resposta => resposta.json())
      .then(dados => {
          setHistorico(dados);
          setCarregando(false);
      })
  }, []);

  const [tempo, setTempo] = useState(25 * 60);
  const [rodando, setRodando] = useState(false);
  const [emPausa, setEmPausa] = useState(false);
  const [pausaRestante, setPausaRestante] = useState(0);
  const [breaks, setBreaks] = useState<BreakConfig[]>(PADRAO_BREAKS);
  const [breaksUsados, setBreaksUsados] = useState<number[]>([]);

  useEffect(() => {
    if (!rodando) return;

    const id = setInterval(() => {
      if (emPausa) {
        setPausaRestante((p) => {
          if (p <= 1) {
            setEmPausa(false);
            return 0;
          }
          return p - 1;
        });
      } else {
        setTempo((t) => {
          if (t <= 1) {
            setRodando(false);
            salvarSessaoNoBanco('FOCO', 25);
            return 0;
          }

          const breakAtual = breaks.find(
            (b) => b.quando === t && !breaksUsados.includes(b.id)
          );
          if (breakAtual) {
            setBreaksUsados((prev) => [...prev, breakAtual.id]);
            setEmPausa(true);
            setPausaRestante(breakAtual.duracao);
          }

          return t - 1;
        });
      }
    }, 1000);

    return () => clearInterval(id);
  }, [rodando, emPausa, breaks, breaksUsados]);

  const alternarTimer = () => {
    if (tempo <= 0) {
      setTempo(25 * 60);
      setBreaksUsados([]);
      setEmPausa(false);
      setRodando(true);
    } else {
      setRodando((r) => !r);
    }
  };

  const tempoExibir = emPausa ? pausaRestante : tempo;
  const minutos = String(Math.floor(tempoExibir / 60)).padStart(2, '0');
  const segundos = String(tempoExibir % 60).padStart(2, '0');
  const cor = emPausa ? 'sky' : 'rose';

  const salvarSessaoNoBanco = async (tipo: string, duracaoMinutos: number) => {
    try {
      const resposta = await fetch("http://localhost:3000/pomodoro/salvar", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tipo, duracaoMinutos })
      });

      if (resposta.ok) {
        alert("✅ Pomodoro salvo no Banco de Dados!");
        fetch("http://localhost:3000/pomodoro/historico")
          .then(r => r.json())
          .then(dados => setHistorico(dados));
      } else {
        alert("❌ Erro ao salvar! Zod bloqueou?");
      }

    } catch (erro) {
      console.log("Erro de conexão", erro);
    }
  }

  const atualizarBreak = (id: number, campo: 'quando' | 'duracao', valor: number) => {
    setBreaks((prev) => prev.map((b) => b.id === id ? { ...b, [campo]: valor } : b));
  };

  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-center">
      
      <h1 className="text-4xl font-bold mb-8 text-rose-400">Pomodoro Mateus</h1>

      <TimerDisplay tempoRestante={`${minutos}:${segundos}`} cor={cor} label={emPausa ? 'Pausa' : 'Foco'} />

      {!rodando && (
        <div className="mt-6 space-y-4">
          {breaks.map((b) => (
            <div key={b.id} className="flex items-center gap-4 text-slate-300 text-sm">
              <span className="w-6">#{b.id}</span>
              <label>Pausa aos:</label>
              <input
                type="range" min={60} max={24 * 60} step={30}
                value={b.quando}
                onChange={(e) => atualizarBreak(b.id, 'quando', Number(e.target.value))}
                className="w-24 accent-rose-500"
              />
              <span className="font-mono text-rose-300 w-14">
                {Math.floor(b.quando / 60)}:{String(b.quando % 60).padStart(2, '0')}
              </span>
              <label>Dur:</label>
              <input
                type="range" min={30} max={600} step={30}
                value={b.duracao}
                onChange={(e) => atualizarBreak(b.id, 'duracao', Number(e.target.value))}
                className="w-20 accent-sky-400"
              />
              <span className="font-mono text-sky-300 w-12">
                {Math.floor(b.duracao / 60)}:{String(b.duracao % 60).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={alternarTimer}
        className="mt-8 px-8 py-3 bg-rose-500 hover:bg-rose-600 transition-colors rounded-lg font-bold text-lg min-w-40"
      >
        {rodando ? (emPausa ? 'Pausa...' : 'Pausar') : tempo <= 0 ? 'Reiniciar' : 'Iniciar Foco'}
      </button>

      <div className="mt-12 text-center text-slate-400">
        <h3 className="text-xl font-bold text-white mb-4">Seu Histórico</h3>
        {carregando ? (
            <p className="animate-pulse text-rose-300">Carregando seus dados...</p>
        ) : (
        <ul>
          {historico.map((sessao: any) => (
            <li key={sessao.id} className="mb-2">
              {sessao.tipo} - {sessao.duracaoMinutos} min 
              (Data: {new Date(sessao.createdAt).toLocaleDateString()})
            </li>
          ))}
        </ul>
        )}
      </div>
      
    </main>
  );
}