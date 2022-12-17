FROM node:gallium-alpine3.17
WORKDIR /code
COPY ../package.json .
RUN yarn install --no-lockfile