const express = require("express");
const User = require("./models/userModel");
const Events = require("./models/eventsModel");
const Subscriptions = require("./models/subscribeModel");

const app = express();
app.use(express.json());
const portNumber = 3000;

// include routes below
const eventRoutes = require("./routes/eventRoutes");
app.use("api/events", eventRoutes);

app.listen(portNumber, () => {
    console.log(`Server now running on port ${portNumber}`)
});
