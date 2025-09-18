# Stage 1: Build the NestJS app
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy source code
COPY . .

# Build the project
RUN npm run build

# Stage 2: Run the app
FROM node:22-alpine

WORKDIR /app

# Copy only necessary files from builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Set environment variable
ENV NODE_ENV=production

# Expose port (change if needed)
EXPOSE 3000

# Start the app
CMD ["node", "dist/main"]
