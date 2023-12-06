# Setting up Primsa tracing with HyperDX

## Getting started

This repository includes a `.devcontainer` to run both the NodeJS app and the Postgres server for Prisma via docker compose.

First copy .env.sample to `.env` and update your HyperDX ingestion API key. Then:

- `git clone <>`
- `yarn install`
- `yarn prisma migrate dev`
- `yarn prisma seed`
- `yarn start`

At this point you should be able to visit http://localhost:3000/ and see a list of posts by user. Check your HyperDX console and you'll see the traces there.


## How it works

TODO: Update readme with better docs and more explanations