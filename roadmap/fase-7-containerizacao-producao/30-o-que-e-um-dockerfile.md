# 30 - Empacotando o Seu App (O Dockerfile) 📦

Excelente ideia você ter chegado até aqui! Na Fase 3 a gente **usou** o Docker para baixar uma imagem pronta do PostgreSQL. Mas e se a gente quiser colocar o **nosso** próprio código dentro de um container Docker para enviar pro servidor de produção?

Para isso nós criamos a nossa própria "Receita de Bolo", chamada **Dockerfile**.
O Dockerfile é um arquivo de texto onde você diz: "Ei Docker, baixe um computador com o Node.js instalado, copie meus arquivos pra dentro dele, instale as bibliotecas e ligue o servidor".

### 🎯 A Sua Missão
Vá na raiz da sua pasta `backend/` e crie um arquivo chamado **apenas** `Dockerfile` (sem extensão, sem `.txt` ou `.js`).

```dockerfile
# 1. Qual é o computador base? Um que já tenha o Node 20!
FROM node:20-alpine

# 2. Cria uma pasta de trabalho lá dentro
WORKDIR /usr/src/app

# 3. Copia o package.json pra dentro do container
COPY package*.json ./

# 4. Manda o container rodar o npm install lá dentro
RUN npm install

# 5. Agora copia TODO o resto do seu código pro container
COPY . .

# 6. Compila o TypeScript pro JavaScript puro de produção
RUN npm run build

# 7. Expõe a porta que o NestJS usa
EXPOSE 3000

# 8. O comando que o container vai rodar quando for ligado!
CMD ["npm", "run", "start:prod"]
```

Pronto! Seu Backend agora tem a receita para ser encaixotado e rodar em qualquer servidor do planeta, seja na Amazon (AWS), Google Cloud ou na máquina do seu colega, sem o erro "Na minha máquina funciona!".
No próximo passo, vamos preparar esse código para rodar junto com o banco.
