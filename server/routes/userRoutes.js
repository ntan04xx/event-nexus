const express = require("express");
const bcrypt = require("bcrypt");
const User = require("./models/userModel");
const Events = require("./models/eventsModel");
const Subscriptions = require("./models/subscribeModel");

const router = express.Router();

// register new user
router.post("/register", async(req, res) => {
    try {
        const {username, password, firstname, lastname, firstjoin, academicstatus} = req.body;
        if (!username || !password) {
            return res.status(400).json({message: 'Please enter username and password'});
        }

        const hashedPassword = await bcrypt.hash(password, 11);

        const userExists = await User.findOne({username: username});
        if (userExists) {
            return res.status(400).json({message: 'Username already taken'});
        }

        const newUser = new User({username: username, password: hashedPassword, firstname: firstname, lastname: lastname, dateJoin: firstjoin, academicStatus: academicstatus});
        await newUser.save();
        req.session.userId = newUser._id; // replace with tokens later
        res.status(201).json({message: "New User Registered Succesfully"});
    } catch(e) {
        res.status(500).json({error: e.message});
    }
});

// login existing user
router.get("/login", async(req, res) => {
    try {
        const {username, password} = req.body;
        if (!username || !password) {
            return res.status(400).json({message: 'Please enter username and password'});
        }

        const user = await User.findOne({username: username}); // only one user for each username
        if (!user) {
            return res.status(401).json({message: 'Username not found'});
        }

        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.status(401).json({message: 'Wrong password'});
        }
        req.session.userId = newUser._id;
        res.status(200).json({message: 'Logged in. Welcome back to Event Nexus!'})
    } catch(e) {
        res.status(500).json({error: e.message});
    }
});

// shows user profile
router.get("/view", async(req, res) => {
    try {
        const userId = req.session.userId;
        const user = await User.findbyId(userId);
        if (!user) {
            return res.status(401).json({message: 'User not found'});
        }

        const {username, firstname, lastname, dateJoin, academicStatus} = user;
        const events = await Events.find({organiser: userId});
        res.json({username, firstname, lastname, dateJoin, academicStatus, events}); // show on frontend
    } catch(e) {
        res.status(500).json({error: e.message});
    }
});

module.exports = router;