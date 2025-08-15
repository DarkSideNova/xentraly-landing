FROM node:18-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package-lock.json package.json ./

RUN npm ci

FROM node:18-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

EXPOSE 3000

COPY --from=builder /app/dist /app/dist

CMD ["npx", "serve", "-s", "dist"]