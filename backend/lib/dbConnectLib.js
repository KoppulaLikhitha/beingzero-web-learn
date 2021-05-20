

const mongoose = require('mongoose');

const config=require('../config/config');



//const cs = config.mongoConnectionString;
const cs = "mongodb+srv://likki:likhitha@cluster0.u1hbb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
var dbOptions = {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect: true};

module.exports ={
   connect : function(){

    mongoose.connect(cs, dbOptions);
    
    mongoose.connection.on('connected', function () {
  console.log('MongoDB connected!');
  });
   } 
}