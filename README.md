# Express Basic Server

A minimal Node.js and Express server with JSON root and health-check endpoints.

## Features

- `GET /` returns a basic service response.
- `GET /health` reports status, process uptime in seconds, and the current timestamp.
- The server uses the `PORT` environment variable or defaults to port `1198`.

## Run locally

```bash
git clone https://github.com/a2rp/express-basic-server.git
cd express-basic-server
npm install
npm run dev
```

Use `npm start` to run without Nodemon. The server prints the port when it starts.

## API endpoints

### `GET /`

```json
{
  "message": "Express Basic Server Running",
  "status": "success"
}
```

### `GET /health`

```json
{
  "status": "OK",
  "uptime": 12.34,
  "timestamp": "2026-11-10T12:00:00.000Z"
}
```

The uptime and timestamp values are generated when the request is handled.

## Stack

Node.js, Express 5, and Nodemon.

## Links

- Portfolio: [https://www.ashishranjan.net](https://www.ashishranjan.net)
- GitHub: [https://github.com/a2rp](https://github.com/a2rp)
- CodePen: [https://codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [https://www.linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [https://www.facebook.com/theash.ashish/](https://www.facebook.com/theash.ashish/)
- YouTube: [https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- Support: [https://a2rp-donation-page.netlify.app/](https://a2rp-donation-page.netlify.app/)
- Buy Me a Coffee: [https://buymeacoffee.com/ashishranjan](https://buymeacoffee.com/ashishranjan)
- Patreon: [https://patreon.com/a2rp](https://patreon.com/a2rp)
