const mongoose=require('mongoose');

const courseSchema = new mongoose.Schema({
   // _id : Number,
    coursename : String,
    Articles : Number,
    //isactive: { type: Boolean, default:true},
    isdeleted: Boolean,

});

var coursemodel= mongoose.model('CourseTable',courseSchema);

module.exports = coursemodel;

