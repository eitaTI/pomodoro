# 26 - O Casamento (Consumindo a API) 💍

Chegou a hora de juntar as peças! Temos um Backend que salva dados (NestJS) e um Frontend visual (NextJS). O Frontend vai ligar para o Backend pedindo dados usando a função nativa `fetch`.

### 🎯 A Sua Missão
Vamos criar uma listagem de histórico no Frontend que puxa as informações do banco de dados (que o Backend fornece na porta `3000`).

Adicione este bloco de código lá no começo do seu `page.tsx`, logo depois dos `useState` que criamos:

```tsx
  const [historico, setHistorico] = useState([]);

  // Esse useEffect vai rodar 1 única vez quando a tela abrir!
  useEffect(() => {
    // A função 'fetch' é a chamada telefônica pro NestJS
    fetch("http://localhost:3000/pomodoro/historico")
      .then(resposta => resposta.json()) // Transforma a resposta em JSON
      .then(dados => setHistorico(dados))
      .catch(erro => console.log("Ops, o backend tá desligado?", erro));
  }, []);
```

E lá embaixo, adicione a lista na tela:
```tsx
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
```
Se o seu backend NestJS estiver rodando no terminal ao lado, você verá os dados do banco brotando direto na tela!
