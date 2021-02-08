const router = require("express").Router();
const Workout = require("../models/workout");
router.post("/workouts", function (req, res) {
	Workout.create({})
		.then((workoutData) => {
			res.json(workoutData);
		})
		.catch((err) => {
			res.json(err);
		});
});
router.put("/workouts/:id", function (req, res) {
	Workout.findByIdAndUpdate(
		req.params.id,
		{ $push: { exercises: req.body } },
		{ new: true, runValidators: true }
	)
		.then((workoutData) => {
			res.json(workoutData);
		})
		.catch((err) => {
			res.json(err);
		});
});
router.get("/workouts", function (req, res) {
	Workout.aggregate([
		{
			$addFields: {
				totalDuration: {
					$sum: "$exercises.duration",
				},
			},
		},
	])
		.then((workoutData) => {
			res.json(workoutData);
		})
		.catch((err) => {
			res.json(err);
		});
});
router.get("/workouts/range", function (req, res) {
	Workout.aggregate([
		{
			$addFields: {
				totalDuration: {
					$sum: "$exercises.duration",
				},
			},
		},
	])
		.sort({ _id: -1 })
		.limit(7)
		.then((workoutData) => {
			res.json(workoutData);
		})
		.catch((err) => {
			res.json(err);
		});
});
router.delete("/api/workouts");
