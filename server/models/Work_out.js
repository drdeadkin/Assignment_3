let mongoose = require('mongoose');

// create a model class
let WorkTrack = mongoose.Schema({
    Exercise:String, //exercise is a string, does not require numbers in database
    Duration:Number,
    Sets:Number,
    Reps:Number,
    Notes:String,
    Date:String,
},
{
    collection:"Workouts"
});
module.exports = mongoose.model('Workout',WorkTrack);
