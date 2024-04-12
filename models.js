const mongoose = require('mongoose');


const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        lowercase: true,
        required: true,
        trim : true
    },
    location: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    company: {
        type: String,
        lowercase: true,
        trim: true
    },
    deadline: {
        type: Date,
        required: true
    }
})

const JobList = mongoose.model('Jobs', JobSchema);
module.exports = JobList;