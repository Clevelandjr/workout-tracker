const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            require: "Please enter type of exercise"
        },
        name: {
            type: String,
            trim: true,
            require: "Please enter name of exercise"
        },
        duration: {
            type: Number,
            require: "Please enter duration of workout"
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        }
    }]
},
    {
        toJSON: {
            virtuals: true
        }

    }
);


workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;