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

// adds new event (implement tokens later if required)
router.post("/add", async(req, res) => {
    try {
        const {name, date, eventType} = req.body;
        const userID = req.session.userId;
        if (!name|| !date || !eventType) {
            return res.status(400).json({message: 'Please enter all details'});
        }

        currentTime = Date.now();
        if (date < currentTime) {
            return res.status(400).json({message: "Date is invalid"});
        }

        const eventExists = await Event.findOne({name: name, organiser: userID}); // replace with tokens later on
        if (eventExists) {
            return res.status(400).json({message: 'Event already exists'});
        }

        const newEvent = new Event({name: name, date: date, type: eventType, organiser: userID});
        await newEvent.save();
        res.status(201).json({message: "New Event Added Succesfully"});
    } catch(e) {
        res.status(500).json({error: e.message});
    }
});

module.exports = router;
