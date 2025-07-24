const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/internshipDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log(' Connected to MongoDB successfully'))
  .catch(err => console.error(' Connection failed:', err));

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String
});

const Student = mongoose.model('Student', studentSchema);

const s = new Student({ name: 'Shagufta', email: 'shagufta@example.com', course: 'MongoDB' });
s.save().then(() => console.log('Student saved'));