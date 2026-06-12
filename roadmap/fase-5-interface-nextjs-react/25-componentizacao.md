# 25 - A Regra de Ouro do React: Componentização 🧩

Colocar tudo dentro do `page.tsx` funciona agora que está pequeno. Mas imagine colocar Botões, Timer, Lista de Histórico, Gráficos... o arquivo ficaria com 1000 linhas!

A regra de ouro do React é **dividir e conquistar**. Um botão deve ser um arquivo separado. O timer deve ser um arquivo separado.

### 🎯 A Sua Missão
1. Crie uma pasta `components/` dentro de `frontend/src/`.
2. Crie o arquivo `TimerDisplay.tsx` lá dentro.

```tsx
// src/components/TimerDisplay.tsx
export function TimerDisplay({ tempoRestante }: { tempoRestante: string }) {
    return (
        <div className="w-64 h-64 rounded-full border-8 border-rose-500 flex items-center justify-center bg-slate-800 shadow-2xl">
            <h2 className="text-6xl font-mono">{tempoRestante}</h2>
        </div>
    );
}
```

E no seu `page.tsx` original, você apaga a bola gigante e usa o seu novo bloco de lego. O arquivo completo fica assim:

```tsx
"use client";
import { useState, useEffect } from "react";
import { TimerDisplay } from '@/components/TimerDisplay';

export default function Home() {
  const [tempo, setTempo] = useState(25 * 60);

  useEffect(() => {
    if (tempo > 0) {
      const timerId = setTimeout(() => setTempo(tempo - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [tempo]);

  const minutos = String(Math.floor(tempo / 60)).padStart(2, '0');
  const segundos = String(tempo % 60).padStart(2, '0');

  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-rose-400">Pomodoro Pro</h1>
      <TimerDisplay tempoRestante={`${minutos}:${segundos}`} />
      <button className="mt-8 px-8 py-3 bg-rose-500 hover:bg-rose-600 transition-colors rounded-lg font-bold text-lg">
        Iniciar Foco
      </button>
    </main>
  );
}
```
Pronto! Você está usando a arquitetura certa. Na **Fase 6** vamos conectar essa tela maravilhosa com o nosso NestJS e salvar de verdade no banco de dados!
