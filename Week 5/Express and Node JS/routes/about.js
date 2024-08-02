const express = require('express')
const router = express.Router()

//Routing
// Handling '/about' request
router.get('/', (req,res) => {
    res.send('<h2>Sania Here - Express.js</h2>');
});


module.exports = router


