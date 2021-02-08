// Require dependencies
const express = require("express");
const mongoose = require("mongoose");
const Workout = require("./models/Workout");
const routes = require("./controllers/workoutController");

// Create an instance of Express and define a PORT
const app = express();
const PORT = process.env.PORT || 8080;

// Connect to Mongoose and add middleware
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	}
);

// Check Mongoose connection
const connection = mongoose.connection;

connection.on("connected", () => {
	console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
	console.log("Mongoose connection error: " + err);
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(express.static("public"));

// Listen on the PORT
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
