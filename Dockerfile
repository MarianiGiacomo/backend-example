FROM alpine:3.8 as build-stage

WORKDIR /app

COPY . .

RUN apk add --update --no-cache npm && \
    npm install && \
    adduser -D app

USER app

EXPOSE $PORT

CMD /usr/bin/node index.js
