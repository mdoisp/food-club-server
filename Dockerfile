# Estágio de build
FROM node:18-alpine AS builder

WORKDIR /app

# Copia os arquivos de configuração
COPY package*.json ./
COPY tsconfig*.json ./

# Instala as dependências
RUN npm ci

# Copia o código fonte
COPY . .

# Compila o projeto
RUN npm run build

# Estágio de produção
FROM node:18-alpine

WORKDIR /app

# Copia apenas os arquivos necessários do estágio de build
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY .env .env

# Expõe a porta da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"] 