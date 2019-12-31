const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to mongodb..'))
    .catch( e => console.log('Could not connected to mongodb ', e));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tag: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});