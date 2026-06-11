# 12 - O Tradutor Universal (Introdução ao Prisma ORM) 🗣️

Nós temos o nosso código em TypeScript de um lado, e o PostgreSQL (que só entende SQL) do outro.
Se a gente não quiser escrever queries SQL chatas na mão tipo `SELECT * FROM sessoes WHERE...`, nós usamos um **ORM** (Object-Relational Mapping). 

O Prisma é o melhor ORM para TypeScript atualmente. Ele pega o nosso código TS e traduz magicamente para SQL.

### 🎯 A Sua Missão
No seu terminal, dentro da pasta `backend`:

1. Instale o Prisma:
`npm install prisma --save-dev`

2. Inicie o Prisma no projeto:
`npx prisma init`

Você vai ver que ele criou uma pasta `prisma/` com um arquivo `schema.prisma`. É aqui que a mágica de desenhar o banco de dados vai acontecer! Ele também criou um arquivo `.env` para você colocar a URL do seu banco (que o nosso docker-compose já subiu pra você).
