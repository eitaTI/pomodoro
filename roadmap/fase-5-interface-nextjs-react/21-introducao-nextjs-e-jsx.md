# 21 - O Rosto do Projeto: Next.js & JSX 💅

Chegamos na **Fase 5**! Deixe o seu terminal do Backend rodando lá quieto e abra um NOVO terminal. 
Agora vamos para a pasta `frontend`.

Nós vamos usar o **Next.js**. Ele é um framework para React, ou seja, serve para construir interfaces de usuário incríveis misturando HTML com o nosso amado TypeScript. O nome dessa mistura maluca é **JSX (ou TSX)**.

### 🎯 A Sua Missão
1. No novo terminal, entre na sua pasta `frontend/` e rode `npm install`.
2. Quando terminar, rode `npm run dev` para ligar o servidor do frontend.
3. Abra `http://localhost:3000` (se ele disser que a porta já tá em uso pelo NestJS, ele vai abrir na `3001`).

**Limpando a Casa:**
Vá até `frontend/src/app/page.tsx`. Delete TODO o código que está lá e substitua por isso:

```tsx
export default function Home() {
  return (
    <main>
      <h1>Meu Pomodoro Next.js! 🍅</h1>
      <p>A matemática é: {2 + 2}</p>
    </main>
  );
}
```
Salve o arquivo e olhe pro navegador. Viu que atualizou sozinho na mesma hora? Viu como você colocou código JavaScript `{2 + 2}` DENTRO do HTML? Isso é o poder do JSX!
