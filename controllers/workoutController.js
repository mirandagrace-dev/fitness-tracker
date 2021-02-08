const express = require("express");
const Workout = require("../models/workout");

const router = express.Router();

router.get("/api/workouts", (req, res) => {
	Workout.find()
		.then((allWorkouts) => {
			res.json(allWorkouts);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).end();
		});
});

router.get("/api/workouts/range", (req, res) => {
	Place.findOne({ _id: req.params.id })
		.then((singleWorkout) => {
			res.json(singleWorkout);
		})
		.catch((err) => {
			console.log(err);
			res.status(404).end();
		});
});

router.post("/api/workouts", (req, res) => {
	Place.create(req.body)
		.then((newWorkout) => {
			res.json(newWorkout);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).end();
		});
});

router.put("/api/workouts/:id", (req, res) => {
	Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((updatedWorkout) => {
			console.log(updatedWorkout);
			res.json(updatedWorkout);
		})
		.catch((err) => {
			console.log(err);
			res.status(404).end();
		});
});

module.exports = router;
