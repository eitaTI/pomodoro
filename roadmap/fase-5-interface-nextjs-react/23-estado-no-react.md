# 23 - Estado e Memória no React (`useState` e `useEffect`) 🎣

No HTML puro, a tela não muda sozinha. No React, se você quiser que algo na tela mude (como os segundos caindo), você precisa colocar isso no **Estado (`useState`)**. Quando o Estado muda, o React redesenha a tela pra você magicamente!

### 🎯 A Sua Missão
Vamos criar um timer simples de 10 segundos no nosso `page.tsx`:

```tsx
"use client";
import { useState, useEffect } from "react"; // Puxando os "Hooks" do React

export default function Home() {
  // O Estado: Guarda o tempo atual. Quando setTempo muda, a tela muda!
  const [tempo, setTempo] = useState(10); 

  // O Efeito: Roda quando a tela aparece (ou quando 'tempo' mudar)
  useEffect(() => {
    if (tempo > 0) {
      // Cria o loop de 1 segundo
      const timerId = setTimeout(() => setTempo(tempo - 1), 1000);
      
      // Limpa a memória quando a tela sumir pra não dar bug!
      return () => clearTimeout(timerId); 
    }
  }, [tempo]); // O efeito fica observando a variável 'tempo'

  return (
    <main>
      <h1>Seu Timer React ⏱️</h1>
      <h2>{tempo === 0 ? "O TEMPO ACABOU!" : `${tempo} segundos restantes`}</h2>
    </main>
  );
}
```
Abra o navegador e veja a mágica. O React percebe que a variável mudou e pinta a tela sozinho, sem você precisar mexer no DOM ou criar IDs de HTML!
