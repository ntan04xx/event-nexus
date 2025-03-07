const express = require("express");
const User = require("./models/userModel")

const app = express();
app.use(express.json());
const portNumber = 3000

// include routes below

app.listen(portNumber, () => {
    console.log(`Server now running on port ${portNumber}`)
});
