# 11 - O Monstro na Jaula (Docker & PostgreSQL) 🐳

Você chegou na **Fase 3**! Agora vamos lidar com o banco de dados.
Instalar o PostgreSQL na sua máquina, configurar usuário, porta e senha pode dar muita dor de cabeça. Por isso nós usamos o **Docker**.

O Docker pega programas inteiros (tipo um banco de dados) e roda eles dentro de uma "caixa" (container) na sua máquina. Se der ruim, você só joga a caixa fora e pega uma nova.

### 🎯 A Sua Missão
A pasta `_template/backend/` já vem com um arquivo chamado `docker-compose.yml`. Ele é a nossa receita de bolo para subir o PostgreSQL.

1. Abra o Docker Desktop na sua máquina (se não tiver, baixe e instale).
2. No seu terminal, dentro da pasta `backend`, rode:
`docker compose up -d`
*(O `-d` serve pro Docker rodar silenciosamente no fundo e liberar o seu terminal)*

Se tudo deu certo, você acabou de ligar um Banco de Dados Profissional na porta `5432` do seu computador. Ele tá vivo, mas tá vazio. No próximo passo vamos criar as tabelas!
