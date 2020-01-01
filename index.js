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
    const courses = await Course
    .find({author: 'Kishan'})
     .limit(2)
     .sort({name: 1})
     .select({name: 1, tag: 1});
    console.log(courses);
}

async function updateCourse(id){
    const course = await Course.findByIdAndUpdate(id, {
        $set: {
            author: "bad man",
            isPublished: true
        }
    },{ new: true });
    console.log(course);
}

async function remove(id){
    const course = await Course.deleteOne({_id: id});
    console.log(course);
}
remove('5e0b92e5ee554136a05a3116');
 
