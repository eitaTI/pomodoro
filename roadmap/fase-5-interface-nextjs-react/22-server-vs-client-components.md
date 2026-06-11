# 22 - Server vs Client Components 🧠

O Next.js moderno (App Router) tem uma divisão muito clara. 
Por padrão, **todo código roda no Servidor** (invisível pro usuário). Isso é ótimo para buscar coisas no banco de dados e SEO (pro Google ler seu site).

Mas o nosso cronômetro precisa rodar SEGUNDO A SEGUNDO no navegador do usuário. O Servidor não consegue ficar atualizando a tela a cada segundo de forma eficiente. Nós precisamos avisar pro Next.js: "Ei, esse código aqui roda na máquina do Cliente (no navegador dele)".

### 🎯 A Sua Missão
Abra o seu `page.tsx` novamente e coloque a "palavra mágica" na primeira linha:

```tsx
"use client"; // Isso diz: Rode no navegador do usuário!

export default function Home() {
  return (
    <main>
      <h1>Cronômetro do Cliente</h1>
      <button onClick={() => alert("Clicou!")}>
        Me Aperte!
      </button>
    </main>
  );
}
```
Se você tentar colocar o `onClick` num componente que NÃO tem `"use client"`, o Next.js vai dar um erro vermelho gigante na sua tela. Sempre que precisar de botões, animações, timers ou interatividade, você precisa usar o `"use client"`.
