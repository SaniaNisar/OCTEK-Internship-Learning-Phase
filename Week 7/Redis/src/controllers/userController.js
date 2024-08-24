const redisClient = require('../services/redisService');
const { getUserFromDatabase, addUserToDatabase } = require('../database/db');

// Handle GET request to fetch user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    redisClient.get(id, async (err, data) => {
      if (err) return res.status(500).send(err.message);

      if (data) {
        console.log('Cache hit');
        return res.json(JSON.parse(data));
      }

      console.log('Cache miss');
      const user = await getUserFromDatabase(id);
      if (!user) return res.status(404).send('User not found');

      redisClient.setex(id, 3600, JSON.stringify(user));
      res.json(user);
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Handle POST request to create a new user
const createUser = async (req, res) => {
  const { id, name, email } = req.body;

  if (!id || !name || !email) {
    return res.status(400).send('Missing required fields');
  }

  try {
    const user = await addUserToDatabase(id, name, email);
    redisClient.setex(id, 3600, JSON.stringify(user));
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { getUserById, createUser };
