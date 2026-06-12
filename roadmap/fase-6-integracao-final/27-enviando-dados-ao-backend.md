# 27 - Enviando Dados ao Backend 📬

Exibir dados é fácil. Agora vamos dizer pro backend: "Acabei o meu Pomodoro, toma aí 25 minutos de Foco pra guardar no histórico!". Faremos isso usando o verbo `POST`.

### 🎯 A Sua Missão
Crie uma função para mandar esse aviso no seu `page.tsx`. Ela será chamada toda vez que o seu timer chegar a ZERO.

```tsx
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
```

Chame-a quando o `tempo === 0` no seu `useEffect` do relógio!
Você completou o ciclo completo de uma aplicação Web Corporativa. Da Interface até a Tabela do Banco de Dados.
