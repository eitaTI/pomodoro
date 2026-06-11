# 16 - A Arquitetura NestJS 🦁

O NestJS já veio instalado no seu template. 
A arquitetura dele é dividida em três pilares principais:

1.  **Módulos (`.module.ts`)**: São as pastas organizadoras. Elas dizem pro Nest o que pertence a quem.
2.  **Controladores (`.controller.ts`)**: São os garçons do restaurante. Eles recebem o pedido (a requisição HTTP `GET` ou `POST`) e passam pra cozinha.
3.  **Serviços (`.service.ts`)**: É a cozinha! Aqui fica a lógica de negócios e as chamadas pro Prisma/Banco de Dados.

### 🎯 A Sua Missão
Vamos ligar o nosso restaurante!
No terminal, na pasta `backend`, rode:
`npm run start:dev`

Ele vai compilar tudo e o seu servidor vai ficar online, escutando a porta 3000.
Abra seu navegador e digite: `http://localhost:3000`

Se você ver um "Hello World", o seu servidor corporativo NestJS está rodando! Deixe esse terminal aberto rodando.
