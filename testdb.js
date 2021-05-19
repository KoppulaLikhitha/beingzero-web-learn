// const courselib = require('./backend/lib/courselib');
// const coursemodel = require('./backend/models/coursemodel');

// const mongoose = require('mongoose');

// const password=process.env.Mongo_atlas_password;
// const connectionString="mongodb+srv://likki:"+password+"@cluster0.u1hbb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


// mongoose.connect(connectionString,{useNewUrlParser : true});

// //mongoose.connect('mongodb://localhost:27017/beingzero-web-learn', {useNewUrlParser: true});

// mongoose.connection.on('connected',function(){
//     console.log("Database Connected");

// });
// courselib.getallcourses(function(err,courseobjarr)
// {
//     console.log(courseobjarr);
// })

// courselib.createcourse({coursename : 'beingzero course'},function(err,savedObj){
//     console.log(savedObj);
// })


// //module.exports  = mongoose;