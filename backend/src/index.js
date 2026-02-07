import express, { json } from 'express';
const app = express();
const PORT = 8000;

// Middleware
app.use(json());

// Root GET route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express server!' });
});

// Start server and log URL
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});