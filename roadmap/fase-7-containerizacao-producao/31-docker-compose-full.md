# 31 - Docker Compose Full Power 🚀

Você já tem a receita do seu Backend (`Dockerfile`) e você já tem o `docker-compose.yml` que liga o PostgreSQL. 
Por que não usar o Compose para subir **os dois** juntos de uma vez só?

Quando você faz isso, o Compose cria uma "Rede Wi-Fi Privada" entre os containers. O seu Backend vai conseguir conversar direto com o Banco de Dados chamando ele pelo nome (`db`), igual magia!

### 🎯 A Sua Missão
Abra o seu `docker-compose.yml` na pasta `backend/` e modifique para ficar assim:

```yaml
version: '3.8'
services:
  # Nosso Banco de Dados já conhecido
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: pomodoro_user
      POSTGRES_PASSWORD: pomodoro_password
      POSTGRES_DB: pomodoro_db
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

  # A NOVA MÁQUINA: A Nossa API!
  api:
    build: . # Manda o docker ler o Dockerfile que tá nessa pasta
    ports:
      - "3000:3000"
    environment:
      # A Url do banco agora aponta pra palavra "db" em vez de localhost!
      DATABASE_URL: "postgresql://pomodoro_user:pomodoro_password@db:5432/pomodoro_db?schema=public"
    depends_on:
      - db # Só liga a API depois que o banco ligar

volumes:
  pgdata:
```

Agora, o verdadeiro poder da nuvem!
Derrube o banco antigo se ele estiver rodando (`docker compose down`) e suba a frota inteira de uma vez:

`docker compose up --build`

Você vai ver o Docker baixando o Node, instalando suas coisas, compilando seu NestJS e subindo a API junto com o Postgres no mesmo terminal.

> **Atenção:** Como o banco de dados foi recriado do zero, as tabelas ainda não existem. Deixe o terminal do Docker rodando, abra um NOVO terminal na pasta `backend/` e aplique as migrations no banco novo:
>
> `npx prisma migrate deploy`
>
> Depois disso, a API já consegue ler e escrever no banco! **ISSO é produção de verdade.**
