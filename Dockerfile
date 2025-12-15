# Étape 1 : build Vite
FROM node:20-alpine AS build

WORKDIR /app

# Installer les deps
COPY package*.json ./
RUN npm install

# Copier le reste du code
COPY . .

# Build Vite (sortie dans /app/dist)
RUN npm run build

# Étape 2 : servir les fichiers statiques avec Nginx
FROM nginx:alpine

# Copier le build
COPY --from=build /app/dist /usr/share/nginx/html

# Config nginx custom
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
