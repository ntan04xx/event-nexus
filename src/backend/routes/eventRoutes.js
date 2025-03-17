const express = require("express");
const Events = require("../models/eventsModel");

const router = express.Router();

// GET /api/events: Gets all published events
router.get('/', async(req, res) => {
    try {
        const events = await Events.find();
        res.status(200).json(events)
    } catch (e) {
        res.status(500).json({e: "Failed to fetch events"})
    }
});

module.exports = router;
