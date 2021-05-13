const express = require("express");
const db = require("./db/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const inputCheck = require("./utils/inputCheck");

const apiRoutes = require("./routes/apiRoutes");

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use api routes
app.use("/api", apiRoutes);


// default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

db.connect(err => {
    if (err) throw err;
    console.log("Database connected.");
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
    });
});