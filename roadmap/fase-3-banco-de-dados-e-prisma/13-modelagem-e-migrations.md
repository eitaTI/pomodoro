# 13 - Desenhando a Tabela e Migrations 🏗️

O banco está ligado e o Prisma está instalado. Agora precisamos dizer pro banco de dados: "Ei, crie uma tabela para guardar as Sessões do meu Pomodoro".

### 🎯 A Sua Missão
Abra o arquivo `prisma/schema.prisma` que foi criado no passo anterior.
No final dele, cole a nossa tabela:

```prisma
model PomodoroSession {
  id             Int      @id @default(autoincrement())
  tipo           String   // 'FOCO' ou 'DESCANSO'
  duracaoMinutos Int
  createdAt      DateTime @default(now()) // Marca a hora que você salvou sozinho!
}
```

Agora, vamos fazer o Prisma mandar essa planta pro PostgreSQL criar a tabela de verdade. Rodamos uma **Migration** (Migração):

No terminal, rode:
`npx prisma migrate dev --name init`

Pronto! Ele foi lá no Docker, conectou no Postgres e criou a tabela `PomodoroSession`. O mais legal? Ele também gerou Tipos TypeScript pra você. Você nem precisa mais daquela interface manual que criamos na Fase 1.
