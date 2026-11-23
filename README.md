# ExamSathi


## About

ExamSathi ("exam companion") is a full-stack web application split into a `client` (frontend) and a `server` (backend).



## Project Structure

```
ExamSathi/
├── client/      # Frontend application
├── server/      # Backend API
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended) and npm — _adjust if the stack differs_


### 1. Clone the repository

```bash
git clone https://github.com/SwaroopDangal/ExamSathi.git
cd ExamSathi
```

### 2. Set up the server

```bash
cd server
npm install
```

Create a `.env` file in `server/`:

```env

PORT=5000
DATABASE_URL=
JWT_SECRET=
```

Start the server:

```bash
npm start
```

### 3. Set up the client

In a new terminal:

```bash
cd client
npm install
npm run dev
```

The app should now be running at `http://localhost:5173` (or the port shown in your terminal).

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## Author

**Swaroop Dangal** — [@SwaroopDangal](https://github.com/SwaroopDangal)
