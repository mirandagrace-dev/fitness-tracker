// Require dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const WorkoutSchema = new Schema({
	day: {
		type: Date,
		default: Date.now,
	},
	exercises: [
		{
			type: {
				type: String,
			},
			name: {
				type: String,
			},
			duration: {
				type: Number,
			},
			weight: {
				type: Number,
			},
			reps: {
				type: Number,
			},
			sets: {
				type: Number,
			},
			distance: {
				type: Number,
			},
		},
	],
});

// Create model variable
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export model
module.exports = Workout;
