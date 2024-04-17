const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
require('models/Restaurant');
const Restaurant = mongoose.model('restaurants');

// Root Route
router.get('/', (req, res) => {
    res.send('Root API route');
});

// Get all restaurants in database
router.get('/restaurants', async (req, res) => {
    // Using mongoose
    const filter = {};
    const restaurants = await Restaurant.find(filter);
    console.log(restaurants);
    res.json(restaurants);
});

module.exports = router;