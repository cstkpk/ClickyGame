require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3002;

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets for Heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Use morgan if in dev environment
if (app.get("env") === "development") {
    const logger = require("morgan");
    app.use(logger("dev"));
}

// Add routes, both API and view
app.use(routes);

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});