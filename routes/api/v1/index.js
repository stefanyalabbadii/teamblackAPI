const express = require('express');
const router = express.Router();

// Root Route
router.get('/', (req, res) => {
    res.send('Root API route');
});

module.exports = router;