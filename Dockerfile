FROM node:20.10.0-alpine AS base

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN corepack enable pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

FROM nginx:alpine


COPY --from=base /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
