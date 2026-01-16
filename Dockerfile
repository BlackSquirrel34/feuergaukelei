# 1. Abhängigkeiten installieren
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm install

# 2. Build-Phase
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Deaktiviere Telemetrie während des Builds
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# 3. Production-Phase
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Erstelle einen User für mehr Sicherheit
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Kopiere die notwendigen Dateien aus der Standalone-Ausgabe
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
# Der Server startet über den Standalone-Server
CMD ["node", "server.js"]
