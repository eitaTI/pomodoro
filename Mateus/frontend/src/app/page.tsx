"use client";
import { useState, useEffect } from "react"; // Puxando os "Hooks" do React
import { TimerDisplay } from './components/TimerDisplay';


export default function Home() {
  const [carregando, setCarregando] = useState(true);
  const [historico, setHistorico] = useState([]);

  // Esse useEffect vai rodar 1 única vez quando a tela abrir!
  useEffect(() => {
    // A função 'fetch' é a chamada telefônica pro NestJS
    fetch("http://localhost:3000/pomodoro/historico")
      .then(resposta => resposta.json())
      .then(dados => {
          setHistorico(dados);
          setCarregando(false); // Tiramos o aviso de carregando!
      })
  }, []);

  const [tempo, setTempo] = useState(25 * 60); // 25 Minutos
  
  // (mantenha a lógica do useEffect aqui, mas trocando pra minutos!)

  const minutos = String(Math.floor(tempo / 60)).padStart(2, '0');
  const segundos = String(tempo % 60).padStart(2, '0');

    const salvarSessaoNoBanco = async () => {
    try {
      const resposta = await fetch("http://localhost:3000/pomodoro/salvar", {
        method: 'POST', // Estamos ENVIANDO dados
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tipo: 'FOCO',
          duracaoMinutos: 25
        })
      });

      if (resposta.ok) {
        alert("✅ Pomodoro salvo no Banco de Dados!");
        // Bônus: Que tal rodar a busca de histórico de novo pra atualizar a tela?
      } else {
        alert("❌ Erro ao salvar! Zod bloqueou?");
      }

    } catch (erro) {
      console.log("Erro de conexão", erro);
    }
  }

  return (
    // Fundo escuro, ocupando a tela toda (h-screen), centralizando tudo (flex items-center)
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      
      <h1 className="text-4xl font-bold mb-8 text-rose-400">Pomodoro Mateus</h1>
      
      {/* O círculo do timer! */}
      <TimerDisplay tempoRestante={`${minutos}:${segundos}`} />

      <button className="mt-8 px-8 py-3 bg-rose-500 hover:bg-rose-600 transition-colors rounded-lg font-bold text-lg">
        Iniciar Foco
      </button>
      {/* Embaixo do botão Iniciar Foco */}
  <div className="mt-12 text-center text-slate-400">
    <h3 className="text-xl font-bold text-white mb-4">Seu Histórico</h3>
    <ul>
      {historico.map((sessao: any) => (
        <li key={sessao.id} className="mb-2">
          {sessao.tipo} - {sessao.duracaoMinutos} min 
          (Data: {new Date(sessao.createdAt).toLocaleDateString()})
        </li>
      ))}
    </ul>
  </div>
      
    </main>
  );
}