const mongoose = require('mongoose');
const  { Schema }  = mongoose;

const JustTestSchema = new Schema({
  mood: {
    type: String,
    
  },
  sleep: {
    type: String,
    required: true,
  },
});

const JustTest = mongoose.model('Anus', JustTestSchema);

module.exports = JustTest;
