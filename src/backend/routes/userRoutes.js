const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("./models/userModel");
const Events = require("./models/eventsModel");
const Subscriptions = require("./models/subscribeModel");

const router = express.Router();

// register new user
router.post("/register", async(req, res) => {
    try {
        const {username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 11);

        const userExists = await User.findOne({username});
        if (userExists) {
            return res.status(400).json({message: 'Username already taken'});
        }

        const newUser = new User({username: username, password: hashedPassword});
        await newUser.save();
        res.status(201).json({message: "New User Registered Succesfully"});
    } catch(e) {
        res.status(500).json({error: e.message});
    }
});

// login existing user
router.get("/login", async(req, res) => {
    try {
        const {username, password} = req.body();
        const users = await User.find({username});
        if (!users) {
            return res.status(401).json({message: 'Username not found'});
        }
        else if (users.password != password) {
            return res.status(401).json({message: 'Wrong password'});
        }

        // implement proper logging in later
        res.status(200).json({message: 'Logged in. Welcome back to Event Nexus!'})
    } catch(e) {
        res.status(500).json({error: e.message});
    }
});

