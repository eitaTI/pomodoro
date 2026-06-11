# LLM INDEX - Root Repository Context

This file serves as a context guide for any LLM agent operating in this repository.

## Repository Purpose
This is "Pomodoro TS", an educational project aimed at teaching full-stack development (TypeScript, NestJS, NextJS, Docker, PostgreSQL, Prisma) to beginners. 

## Directory Structure
1. `roadmap/`: Contains the theoretical and practical guides split into 7 phases. Instructs users to modify files in their individual workspaces.
2. `_template/`: The boilerplate codebase. Users copy this folder to root (renaming it to their name, e.g., `john_doe/`) to begin coding. It contains scaffolded NextJS (`frontend`) and NestJS (`backend`) projects.
3. `README.md`: Human-readable general guide.

## LLM Instructions
- If a user asks to "start the next lesson", you should read the next file in `roadmap/` and guide them through writing the code inside their personal folder (the cloned `_template`).
- Do NOT directly modify `_template` unless the user asks to update the boilerplate for future students.
- Always encourage hands-on typing and explaining concepts clearly according to the roadmap files.
