# Meu Pomodoro - Workspace 🛠️

Se você está lendo isso, parabéns! Você criou a sua área de trabalho copiando o `_template` oficial.

Esta pasta é 100% isolada do resto do projeto. Tudo o que você instalar, modificar ou quebrar aqui dentro, só afeta o seu ambiente.

## O Que Tem Aqui?
- **`/backend`**: Onde criaremos a nossa API REST usando NestJS. Já vem configurado com um `docker-compose.yml` para você subir o banco de dados PostgreSQL.
- **`/frontend`**: Onde criaremos a interface do usuário usando Next.js e Tailwind CSS.

## Como Iniciar os Ambientes?

### Backend (Terminal 1)
1. Abra um terminal e acesse a pasta `backend/` (`cd backend`)
2. Instale as dependências: `npm install`
3. Inicie o servidor em modo desenvolvimento: `npm run start:dev`

### Banco de Dados
Siga as instruções da **Fase 3** do Roadmap para rodar `docker compose up -d` dentro da pasta `backend/`.

### Frontend (Terminal 2)
1. Abra um NOVO terminal e acesse a pasta `frontend/` (`cd frontend`)
2. Instale as dependências: `npm install`
3. Inicie a interface: `npm run dev`

Agora siga as instruções passo a passo localizadas na pasta `/roadmap` na raiz do repositório principal!
