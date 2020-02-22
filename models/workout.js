const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Enter a name for workout'
    },
    type: {
        type: String,
        trim: true,
        required: 'Enter a type of workout'
        // resistance or cardio
    },
    weight: {
        type: Number,
        trim: true,
        required: 'Enter the weight for the workout in pounds'
    },
    sets: {
        type: String,
        trim: true,
        required: 'Enter the sets for the workout'
    },
    reps: {
        type: String,
        trim: true,
        required: 'Enter the reps for the workout'
    },
    duration: {
        type: Number,
        trim: true,
        required: 'Enter the duration for the workout in minutes'
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true 
    }
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;