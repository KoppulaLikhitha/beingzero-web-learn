const mongoose = require('mongoose');


module.exports.connect = function(){

const password=process.env.Mongo_atlas_password;
const connectionString="mongodb+srv://likki:"+password+"@cluster0.u1hbb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionString,{useUnifiedTopology: true, useNewUrlParser : true});

//mongoose.connect('mongodb://localhost:27017/beingzero-web-learn', {useNewUrlParser: true});

mongoose.connection.on('connected',function(){
    console.log("Database Connected");
})

}


