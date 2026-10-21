FROM node:20.20.1 AS builder
RUN apt-get update
WORKDIR /app
COPY . .
RUN npm install
FROM node:20-slim
WORKDIR /app
COPY --from=builder /app /app
USER node
EXPOSE 5000
CMD ["node", "server.js"]