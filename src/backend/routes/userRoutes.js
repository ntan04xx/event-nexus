const express = require("express");
const bcrypt = require("bcrypt");
const User = require("./models/userModel");
const Events = require("./models/eventsModel");
const Subscriptions = require("./models/subscribeModel");

const router = express.Router();

// register new user (implement tokens later if required)
router.post("/register", async(req, res) => {
    try {
        const {username, password, firstname, lastname, firstjoin, academicstatus} = req.body;
        if (!username || !password) {
            return res.status(400).json({message: 'Please enter username and password'});
        }

        const hashedPassword = await bcrypt.hash(password, 11);

        const userExists = await User.findOne({username});
        if (userExists) {
            return res.status(400).json({message: 'Username already taken'});
        }

        const newUser = new User({username: username, password: hashedPassword, firstname: firstname, lastname: lastname, dateJoin: firstjoin, academicStatus: academicstatus});
        await newUser.save();
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

        const user = await User.findOne({username}); // only one user for each username
        if (!user) {
            return res.status(401).json({message: 'Username not found'});
        }

        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.status(401).json({message: 'Wrong password'});
        }

        res.status(200).json({message: 'Logged in. Welcome back to Event Nexus!'})
    } catch(e) {
        res.status(500).json({error: e.message});
    }
});

// add route that pulls up user profile to be shown on frontend (after events is made)
