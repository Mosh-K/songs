# Backend (NestJS)

This is the backend API for the Songs project, built with NestJS.

## Features
- CRUD operations for songs
- Database configuration
- RESTful API endpoints
- Docker support

## Setup
1. Install dependencies:
	```sh
	npm install
	```
2. Start the development server:
	```sh
	npm run start:dev
	```

## API Endpoints
- `GET /songs` - List all songs
- `POST /songs` - Add new songs

## Swagger Documentation
This project uses [Swagger](https://swagger.io/) for interactive API documentation. After starting the server, you can access the Swagger UI at:

```
http://localhost:3000/api
```

Use this interface to explore and test the available endpoints.

## Configuration
See `dbConfig.ts` for database settings.

## License
MIT
