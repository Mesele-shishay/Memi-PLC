# syntax=docker/dockerfile:1

# ---------- Build stage ----------
FROM node:20-bookworm-slim AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# ---------- Runtime stage ----------
FROM node:20-bookworm-slim AS runner

ENV NODE_ENV=production
ENV PORT=3000
WORKDIR /app

# Copy runtime dependencies and build artifacts from builder
COPY package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["npm", "run", "start"]
