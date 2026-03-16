# express-basic-server

A minimal Express.js backend server demonstrating basic routing and a health check endpoint.  
This project is part of a backend foundations series where each repository focuses on solving one specific backend concept.

---

## Features

- Basic Express server setup
- Root endpoint `/`
- Health check endpoint `/health`
- Environment based port configuration
- Simple JSON responses

---

## Tech Stack

- Node.js
- Express.js

---

## Installation

```bash
## Clone the repository
git clone https://github.com/a2rp/express-basic-server.git

## Go to project directory
cd express-basic-server

## Install dependencies
npm install

## Running the server
Development mode

## Production mode
npm start
```

## API Endpoints

### Root

GET /

## Response

```json
{
    "message": "Express Basic Server Running",
    "status": "success"
}
```

---

## Project Structure

express-basic-server
│
├── index.js
├── package.json
├── package-lock.json
└── .gitignore

---

## Purpose

This repository demonstrates the foundation of an Express.js backend server.
It serves as the starting point for building scalable backend applications.

---

## Author

Ashish Ranjan
