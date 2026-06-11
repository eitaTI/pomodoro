# 24 - Estilização Express com Tailwind CSS 🎨

O seu timer tá funcionando, mas tá bem feio. Escrever CSS manual em arquivos separados é coisa do passado.
O projeto já vem com **Tailwind CSS**. Com ele, nós estilizamos usando classes no próprio HTML (ex: `bg-red-500` para fundo vermelho).

### 🎯 A Sua Missão
Vamos deixar a nossa tela com cara de Pomodoro. Modifique o `page.tsx`:

```tsx
"use client";
// ... (mantenha os imports e variáveis useState/useEffect que fizemos antes)

export default function Home() {
  const [tempo, setTempo] = useState(25 * 60); // 25 Minutos
  
  // (mantenha a lógica do useEffect aqui, mas trocando pra minutos!)

  const minutos = String(Math.floor(tempo / 60)).padStart(2, '0');
  const segundos = String(tempo % 60).padStart(2, '0');

  return (
    // Fundo escuro, ocupando a tela toda (h-screen), centralizando tudo (flex items-center)
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      
      <h1 className="text-4xl font-bold mb-8 text-rose-400">Pomodoro Pro</h1>
      
      {/* O círculo do timer! */}
      <div className="w-64 h-64 rounded-full border-8 border-rose-500 flex items-center justify-center bg-slate-800 shadow-2xl">
        <h2 className="text-6xl font-mono">{minutos}:{segundos}</h2>
      </div>

      <button className="mt-8 px-8 py-3 bg-rose-500 hover:bg-rose-600 transition-colors rounded-lg font-bold text-lg">
        Iniciar Foco
      </button>

    </main>
  );
}
```
Olha pro navegador agora. Aquele texto seco virou um app moderno num fundo escuro, com um timer gigante e um botão de hover. Tudo sem escrever uma linha de CSS!
