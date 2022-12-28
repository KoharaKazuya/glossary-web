# @see https://github.com/GoogleContainerTools/distroless/blob/c0d1303e3d1f536db7aa2fa3c00555f5b1ce184f/examples/nodejs/Dockerfile
# @see https://docs.docker.com/language/nodejs/build-images/

FROM node:18 AS build-env
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci
COPY . /app
RUN npm run build

FROM node:18 AS deps-env
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci --omit=dev

FROM gcr.io/distroless/nodejs18-debian11
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build-env /app/package.json /app/package.json
COPY --from=build-env /app/build /app/build
COPY --from=deps-env /app/node_modules /app/node_modules
CMD ["build"]
