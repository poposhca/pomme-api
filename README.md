# Pomme API

Made for Digital Ocean's Functions

This is the API for the Pomme project, it is a serverless function with graphQL. 

## Stack
* Node 18
* Apollo Server
* TypeScript

## Getting Started

This is the GraphQL API for the Pomme project.

## Development

1. Clone the repository
2. Run `npm install`
3. Run `npm run build`
4. Build Redis Docker image in [./TestUtils](./TestUtils) `docker build -t pomme-redis .`
5. Copy `env.example` to `.env` and fill in the values
6. Run Redis Docker image `docker run -p 6379:6379 pomme-redis`
7. Run `npm run dev`

## Test Everything with docker compose

1. Run `docker-compose up --build`
