require("dotenv").config()
const mongoose = require("mongoose")

const connection_str = process.env.MONGO_URI

mongoose.connect(connection_str, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("connected", () => {
    console.log("MongoDB connected successfully");
});

db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

db.on("disconnected", () => {
    console.log("MongoDB disconnected");
});
