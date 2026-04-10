# My Portfolio

Live Site: https://ranipuja235.github.io/portfolio/

## Developer Portfolio

A modern developer portfolio built with React and Vite on the frontend, and Node.js with Express on the backend.

## Project Structure

```text
MyPotfolio/
  frontend/
    src/
      components/
      data/
      App.tsx
      index.css
      main.tsx
      types.ts
    index.html
    package.json
    vite.config.ts
  backend/
    data/
      contacts.json
    routes/
      contactRoutes.js
    utils/
      contactStore.js
    package.json
    server.js
  README.md
```

## Frontend Features

- Responsive single-page portfolio layout
- Smooth scrolling navbar
- Hero, About, Skills, Projects, Experience, and Contact sections
- Tailwind CSS styling with simple fade and hover effects
- Contact form connected to the backend API

## Backend Features

- Express server with CORS and JSON parsing enabled
- `POST /contact` endpoint
- Contact messages stored in `backend/data/contacts.json`

## Run the Project

Open two terminals in VS Code.

### 1. Start the backend

```bash
cd backend
npm install
npm run dev
```

The backend runs at `http://localhost:5000`.

### 2. Start the frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at `http://localhost:5173`.

## Optional Environment Variable

If you want a different API URL, create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000
```

## Files to Edit in VS Code

- Put frontend React code inside `frontend/src/`
- Put backend Express code inside `backend/`
- Contact form submissions are saved in `backend/data/contacts.json`
