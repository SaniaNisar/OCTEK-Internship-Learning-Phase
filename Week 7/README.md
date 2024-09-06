# User Data Cache - REDIS 

## Features:
* API Endpoint: /user/:id - Retrieves user data by ID.
* Cache Mechanism: Uses Redis to cache the user data.
* Fallback: Retrieves data from a mock database if not found in the cache.


In this project:
- Redis is used to cache user data to improve response time and reduce load on the mock database.
- Express is used to create a simple REST API.
- Node.js handles the server-side logic, including interfacing with Redis and the mock database.

* This setup demonstrates a basic use case for Redis caching in a Node.js application.
