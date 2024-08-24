const express = require('express');
const { getUserById, createUser } = require('./controllers/userController');

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON requests

// Route to get user by ID
app.get('/user/:id', getUserById);

// Route to create a new user
app.post('/user', createUser);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
