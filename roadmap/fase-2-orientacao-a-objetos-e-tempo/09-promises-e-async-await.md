# 09 - Viagem no Tempo e Assincronismo (Promises e Async/Await) ⏳

Seu relógio funciona perfeitamente, mas quando construirmos a nossa API na próxima fase, nós precisaremos salvar as coisas no banco de dados.
Ir até o banco de dados e salvar algo **demora** (milissegundos, mas para o computador isso é uma eternidade). O JavaScript não quer travar a tela enquanto espera o banco responder.

Por isso, usamos as **Promises** (Promessas). Nós dizemos pro código: "Vai lá salvar no banco, e quando terminar (await), você continua a linha de baixo."

### 🎯 A Sua Missão
Para entender isso antes de entrar na dor de cabeça do Banco de Dados real, vamos simular uma demora no final do `Pomodoro.ts`.

Fora da sua classe `Pomodoro`, crie esta função que simula salvar dados e demora 2 segundos:

```typescript
// Uma Promise que "promete" retornar nada (void) depois de 2 segundos
const simularSalvamentoNoBanco = (): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("💾 Sessão salva no banco de dados com sucesso!");
            resolve();
        }, 2000);
    });
}
```

Agora, substitua a função `tick()` inteira lá na sua classe `Pomodoro` pela versão abaixo. Note que ela agora é `async` e retorna `Promise<void>`:

```typescript
    private async tick(): Promise<void> {
        if (this.minutos === 0 && this.segundos === 0) {
            this.pausar();
            console.log("\nPOMODORO FINALIZADO! 🚨");
            console.log("Salvando no banco...");
            
            // Aqui o código PARA e espera a Promise se resolver!
            await simularSalvamentoNoBanco();
            
            console.log("Tudo pronto! Pode iniciar o próximo.");
            return;
        }

        if (this.segundos === 0) {
            this.minutos--;
            this.segundos = 59;
        } else {
            this.segundos--;
        }

        console.clear();
        console.log(`⏱️ Tempo: ${this.getTempoFormatado()}`);
    }
```

Deixe o Pomodoro de 1 minuto acabar e repare no console! O aviso de salvamento demora 2 segundos, mas não trava o resto. Você acabou de dominar um dos maiores fantasmas do TypeScript: O assincronismo.
