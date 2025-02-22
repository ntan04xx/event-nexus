connectString = "mongodb+srv://nathantan04:XRqywnbAWAdYxCnM@clusternexus.potbc.mongodb.net/?retryWrites=true&w=majority&appName=ClusterNexus"
connectCode = "XRqywnbAWAdYxCnM"

const mongoose = require("mongooose")
mongoose.connect(connectString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
