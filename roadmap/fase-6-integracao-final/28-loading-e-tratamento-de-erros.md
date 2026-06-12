# 28 - Profissionalizando (Loading e Tratamento de Erros) 🚦

A sua aplicação funciona bem quando tudo dá certo. Mas e se a internet cair? E se o banco de dados estiver lento e demorar 5 segundos para buscar o histórico?
A tela não pode ficar em branco. Nós precisamos dar um feedback pro usuário (o famoso ícone de carregando 🔄).

### 🎯 A Sua Missão
1. Crie um novo estado no topo do seu `page.tsx`:
`const [carregando, setCarregando] = useState(true);`

 2. Lá no seu `fetch` de buscar histórico:
```tsx
    fetch("http://localhost:3000/pomodoro/historico")
      .then(resposta => resposta.json())
      .then(dados => {
          setHistorico(dados);
          setCarregando(false);
      })
      .catch(erro => {
          console.error("Erro ao buscar histórico:", erro);
          setCarregando(false); // Mesmo com erro, para de mostrar o loading
      })
```

3. Na hora de renderizar o HTML (no `return`):
```tsx
    {carregando ? (
        <p className="animate-pulse text-rose-300">Carregando seus dados...</p>
    ) : (
        <ul>
           {/* o seu .map() do histórico aqui */}
        </ul>
    )}
```

É o detalhe de tratamento de loading (`animate-pulse` no Tailwind) que separa projetos de iniciante de projetos nível Sênior. 
A experiência de uso é tudo!
