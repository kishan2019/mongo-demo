const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', 
                { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to mongodb..'))
    .catch( e => console.log('Could not connected to mongodb ', e));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tag: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema);
async function createCourse(){
    const course = new Course ({
     name: 'Mangoose',
     author: 'Radhe',
     tag: ['front', 'backend'],
     isPublished: false
 });
  const result = await course.save();
  console.log(result);
}

async function getCourses(){
    const courses = await Course.find();
    console.log(courses);
}

getCourses();
 
