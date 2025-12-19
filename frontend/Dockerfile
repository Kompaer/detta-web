FROM node:22.15.1 as base
WORKDIR /app

FROM base as build
COPY package.json package-lock.json ./
COPY .npmrc ./

RUN --mount=type=secret,id=npm_auth,target=/root/.npmrc \ 
    npm install --include=dev

RUN rm -f .npmrc

COPY . .
RUN npm run build
#RUN npm prune

FROM base
ENV PORT=3000
COPY --from=build /app/.output /app/.output
CMD [ "node", ".output/server/index.mjs" ]
