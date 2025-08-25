const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema({
    subscriber: {
        type: mongoose.Schema.Types.UserId,
        ref: "User",
        required: true
    },
    event: {
        type: mongoose.Schema.Types.EventId,
        ref: "Event",
        required: true
    }
}); // subscription ID automatically added by mongoose as default primary key

const Subscription = mongoose.model("Subscription", subscribeSchema);
module.exports = Subscription;