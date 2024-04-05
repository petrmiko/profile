FROM node:20-bookworm-slim as base

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

EXPOSE 3000

FROM base as builder
WORKDIR /app
COPY . .
RUN npm i && CONTAINER=1 npm run build

FROM base as runner
WORKDIR /app
COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown node:node .next

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node

CMD [ "node", "server.js" ]
