const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
    date: {type: Date, required: true, unique: false},
    organiser: {
        type: mongoose.Schema.Types.UserId,
        ref: "User",
        required: true
    },
    type: [String]
}); // event ID automatically added by mongoose as default primary key

const Events = mongoose.model("Events", eventsSchema);
module.exports = Events;