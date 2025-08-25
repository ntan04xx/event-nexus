require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());
const portNumber = 3000;

// Connecting to MongoDB
const connection_str = process.env.NON_ENCODED;
mongoose.connect(connection_str, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log("✅ Now connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Preparing session
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/ClusterNexus' }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
}));

// Base route
app.get("/", (req, res)=> {
    res.send("📅 Event Nexus - Make Your Event Planning Easier Now!");
});

// Importing other routes
const userRoutes = require("./routes/userRoutes");
app.use("/register", userRoutes);
app.use("/login", userRoutes);
app.use("/view", userRoutes);

const eventRoutes = require("./routes/eventRoutes");
app.use("/add", eventRoutes);
app.use("/list", eventRoutes);

// Starting server
app.listen(portNumber, () => {
    console.log(`👍🏻 Server now running on port ${portNumber}`)
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose connection is disconnected due to application termination');
        process.exit(0);
    });
});
