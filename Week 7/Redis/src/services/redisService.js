const redis = require('redis');

const redisClient = redis.createClient({
  url: 'redis://localhost:6380' // Ensure this matches the port you're using
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

redisClient.on('connect', () => {
  console.log('Redis client connected');
});

// To handle unexpected disconnections, you might want to set up reconnection logic
redisClient.on('end', () => {
  console.log('Redis client disconnected');
});

module.exports = redisClient;
