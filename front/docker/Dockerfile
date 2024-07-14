FROM node AS build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build -c production

FROM node:bookworm-slim
WORKDIR app/src
COPY --from=build /app/src/dist/front/ ./
CMD node server/server.mjs
EXPOSE 4000
