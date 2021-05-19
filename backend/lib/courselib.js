



//const bcrypt = require("bcryptjs");
/*const bodyparser= require('body-parser');

exports.create  = (req,res) => {

    if(err)
    {
        return res.status(400).send({
            message: "Required field can not be empty",
          });
      //console.log("Required fiels should not be empty");
    }

    const cmodel = new coursemodel({
        id : 1,
        coursename : "bz course",
        articles : 5,
    });

    cmodel
        .save()
        .then((cmodel) =>
        {
           res.send(cmodel);
        })
  
        .catch((err) =>{
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User.",
              });
            //console.log("error occcured");
        });

};


exports.findAll = (req, res) => {
    coursemodel.find()
      .sort({coursename: -1 })
      .then((cmodel) => {
        res.status(200).send(cmodel);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error Occured",
        });
      });
  };*/

const coursemodel = require('../models/coursemodel');

 module.exports.createcourse = function(req,res){

  var courseobj ={
      _id : req.body._id,
      coursename : req.body.coursename,
      Articles : req.body.Articles,
  };
    var course=new coursemodel(courseobj);

    course.save(function(err,courseobj){

        //coursemodel.find({},function(err,courseobj){
        if(err){
            console.log("err"+err);
            //res.json({error : err});
        }

        else {

            //console.log(courseobj);
            //callback(err,courseobj);
            res.json(courseobj);
        }
    })
}

module.exports.getallcourses = function(req,res){

    var query = {};

    coursemodel.find(query,function(err,courseobjarr){
        if(err){
            //console.log("err"+err);
            res.json({error : err});
        }

        else {
            //callback(err,courseobjarr);
            //console.log(courseobjarr);
            res.json(courseobjarr);
        }
    })
}
