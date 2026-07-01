"use client";
import { useState, useEffect, useRef } from "react";
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
  // Estados do sistema
  const [carregando, setCarregando] = useState(true);
  const [historico, setHistorico] = useState([]);
  
  // Estados de áudio
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  
  // Estados do timer
  const [tempo, setTempo] = useState(25 * 60); // 25 min em seg
  const [rodando, setRodando] = useState(false);
  const [emPausa, setEmPausa] = useState(false);
  const [pausaRestante, setPausaRestante] = useState(0);
  const [breaks, setBreaks] = useState<BreakConfig[]>(PADRAO_BREAKS);
  const [breaksUsados, setBreaksUsados] = useState<number[]>([]);
  const [nomeSessao, setNomeSessao] = useState('');

  const audioRef = useRef<HTMLAudioElement>(null);

  // Busca histórico ao carregar
  useEffect(() => {
    fetch("http://localhost:3000/pomodoro/historico")
      .then(r => r.json())
      .then(d => { setHistorico(d); setCarregando(false); });
  }, []);

  // Efeito de reprodução de áudio
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.volume = isMuted ? 0 : volume;
        audioRef.current.src = "http://localhost:3001/Song.mp3";
        audioRef.current.play().catch(e => {
          console.log("Audio play failed:", e);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Efeito de volume
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  // Lógica do timer
  useEffect(() => {
    if (!rodando) return;
    const id = setInterval(() => {
      if (emPausa) {
        setPausaRestante((p) => {
          if (p <= 1) { setEmPausa(false); return 0; }
          return p - 1;
        });
      } else {
        setTempo((t) => {
          if (t <= 1) {
            setRodando(false);
            salvarSessaoNoBanco(nomeSessao, 'FOCO', 25);
            setIsPlaying(true); // Áudio toca ao terminar
            return 0;
          }
          const b = breaks.find(b => b.quando === t && !breaksUsados.includes(b.id));
          if (b) {
            setBreaksUsados(prev => [...prev, b.id]);
            setEmPausa(true);
            setPausaRestante(b.duracao);
            setIsPlaying(false); // Áudio pausa no descanso
          }
          return t - 1;
        });
      }
    }, 1000);
    return () => clearInterval(id);
  }, [rodando, emPausa, breaks, breaksUsados, nomeSessao]);

  const alternarTimer = () => {
    if (tempo <= 0) {
      setTempo(25 * 60); setBreaksUsados([]); setEmPausa(false); setRodando(true);
      setIsPlaying(true); // Áudio toca ao iniciar
    } else {
      setRodando(!rodando);
      setIsPlaying(!rodando); // Sincroniza audio
    }
  };

  const salvarSessaoNoBanco = async (nome: string, tipo: string, duracaoMinutos: number) => {
    await fetch("http://localhost:3000/pomodoro/salvar", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, tipo, duracaoMinutos })
    }).then(r => r.ok && alert("✅ Salvo!"));
  };

  const tempoExibir = emPausa ? pausaRestante : tempo;
  const minutos = String(Math.floor(tempoExibir / 60)).padStart(2, '0');
  const segundos = String(tempoExibir % 60).padStart(2, '0');

  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-rose-400">Pomodoro Mateus</h1>

      {/* Input de nome e volume - visíveis sempre */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <input type="text" placeholder="Nome da sessão" value={nomeSessao} onChange={(e) => setNomeSessao(e.target.value)} className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 w-72" />
        <div className="flex items-center gap-2">
            <label>Volume:</label>
            <input type="range" min={0} max={1} step={0.1} value={volume} onChange={(e) => setVolume(parseFloat(e.target.value))} />
            <span>{Math.round(volume * 100)}%</span>
            <button onClick={() => setIsMuted(!isMuted)}>{isMuted ? "🔇" : "🔊"}</button>
        </div>
      </div>

      <audio ref={audioRef} className="hidden" />

      <TimerDisplay tempoRestante={`${minutos}:${segundos}`} cor={emPausa ? 'sky' : 'rose'} label={emPausa ? 'Pausa' : 'Foco'} />

      <button onClick={alternarTimer} className="mt-8 px-8 py-3 bg-rose-500 rounded-lg font-bold text-lg">
        {rodando ? 'Pausar' : 'Iniciar Foco'}
      </button>

      {/* Histórico */}
      <div className="mt-12 text-center text-slate-400">
        <h3 className="text-xl font-bold text-white mb-4">Seu Histórico</h3>
        {historico.map((s: any) => <li key={s.id}>{s.nome} - {s.tipo}</li>)}
      </div>
    </main>
  );
}
