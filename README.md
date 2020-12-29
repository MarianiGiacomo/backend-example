# backend-example
Simple backend app for a Docker tutorial

# Set up and running
`npm install`

Create a `.env` file  with:

```
PORT=<PORT_TO_BE_USED>
SERVICE_PORT=<PORT_OF_SERVICE_USED_FOR_/service_ROUTE>
SERVICE_URL=<SERVICE_URL>
```

Start:
`node index.js`

To run in Docker:
`docker build -t backend-example .`

`docker run --env-file=.env --name backend-example --rm -p <PORT_IN_DOTENV>:<PORT_IN_DOTENV> backend-example`
