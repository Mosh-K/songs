# Songs Project

This repository contains a full-stack application for managing songs. It is divided into two main parts:

- **back/**: Backend API built with NestJS
- **front/**: Frontend application built with React and Vite

## Features
- Add, view, and manage songs
- CSV import utility
- RESTful API
- Dockerized setup for easy deployment

## Project Structure
```
docker-compose.yaml
back/        # NestJS backend
front/       # React frontend
```

## Getting Started

### Prerequisites
- Node.js (v22+ recommended)
- Docker (optional, for containerized setup)

### Docker Setup
To run both frontend and backend using Docker:
```sh
docker-compose up --build
```
The backend will be available at `http://localhost:3000` and the frontend at `http://localhost:8080`.

The Swagger API documentation will be available at `http://localhost:3000/api`.

## API Endpoints
The backend exposes RESTful endpoints for managing songs. See `back/README.md` for details.

## Technologies Used
- NestJS
- React
- Vite
- TypeScript
- Docker

## License
MIT
