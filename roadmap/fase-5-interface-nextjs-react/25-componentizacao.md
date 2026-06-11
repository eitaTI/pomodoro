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

E no seu `page.tsx` original, você apaga a bola gigante e usa o seu novo bloco de lego:
```tsx
import { TimerDisplay } from '@/components/TimerDisplay';

// ... dentro do seu html
  <TimerDisplay tempoRestante={`${minutos}:${segundos}`} />
// ...
```
Pronto! Você está usando a arquitetura certa. Na **Fase 6** vamos conectar essa tela maravilhosa com o nosso NestJS e salvar de verdade no banco de dados!
