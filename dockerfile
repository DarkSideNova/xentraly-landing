# ---- Etapa 1: Instalación de Dependencias ----

FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copia solo los archivos de definición de paquetes
COPY package.json package-lock.json ./

# Instala las dependencias de forma consistente usando el lockfile
RUN npm ci

# ---- Etapa 2: Construcción (Build) ----
FROM node:18-alpine AS builder
WORKDIR /app

# Copia las dependencias instaladas en la etapa anterior
COPY --from=deps /app/node_modules ./node_modules

# Copia el resto del código fuente del proyecto
COPY . .

# Ejecuta el script de build para generar la carpeta /dist
RUN npm run build

# ---- Etapa 3: Ejecución (Runner) ----
FROM node:18-alpine AS runner
WORKDIR /app

# Copia los archivos de definición de paquetes para instalar solo las dependencias de producción
COPY package.json package-lock.json ./

# Instala ÚNICAMENTE las dependencias de producción (omite devDependencies)
RUN npm install --production

# Copia los archivos estáticos construidos en la etapa anterior
COPY --from=builder /app/dist ./dist

# Expone el puerto que usará el servidor dentro del contenedor
EXPOSE 3000

# Comando para iniciar el servidor. 
# Se recomienda usar "npm start" para mantener la consistencia con el package.json.
CMD ["npm", "start"]