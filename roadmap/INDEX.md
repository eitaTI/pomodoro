# LLM INDEX - Roadmap Context

## Directory Purpose
This folder contains the step-by-step markdown lessons to build the Pomodoro app.

## Phases Breakdown
- **Fase 1 (01 to 05):** Basic TypeScript, variables, functions, interfaces, array manipulation. Uses a `playground.ts` scratchpad.
- **Fase 2 (06 to 10):** Object-Oriented Programming, state encapsulation, `setInterval`, Promises/async-await. Builds the CLI Pomodoro class.
- **Fase 3 (11 to 14):** Infrastructure. Docker setup for Postgres, Prisma ORM initialization, schemas, and migrations.
- **Fase 4 (15 to 20):** Backend API. Introduces NestJS architecture (Modules, Controllers, Services), DI, Zod validation, and Pino logging.
- **Fase 5 (21 to 25):** Frontend. Introduces Next.js App Router, JSX, Server vs Client components, React hooks (`useState`, `useEffect`), Tailwind CSS styling, and Componentization.
- **Fase 6 (26 to 29):** Integration. Fetching data from the Nest API into NextJS, posting new sessions, handling loading/error states.
- **Fase 7 (30 to 32):** Deployment. Writing a Dockerfile for the NestJS backend and using Docker Compose to orchestrate both API and DB together.

## Agent Behavior
When assisting a user, read the current markdown file to understand what they are supposed to build. Ensure they implement the exact concepts described in the lesson.
