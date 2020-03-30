var express = require('express');
var path = require('path');
var csv = require('fast-csv');
var main = require('../model/main');
var stream;
message ='';
exports.getdata=(req, res) =>{
    res.render('index', message);
};
exports.postdata= (req, res) =>{
    message : "Error! in image upload."
      if (!req.file) {
          console.log("No file received");
            message = "Error! in image upload."
          res.render('index',{message: message, status:'danger'});
      
        } else {
          console.log('file received');
          const filenm=req.file.filename;
          console.log(filenm);
          const filepath = path.join(__dirname,'../uploads/'+filenm);
          const fileRows=[];
          csv.parseFile(filepath)
          .on('data',(data)=>{
              fileRows.push(data);
              var results={
                  id:data[0],
                  name:data[1],
                  description:data[2]
              };
              console.log(results);
              main.create(results)
              .then(()=>{
                  console.log('mysql');
              })
              .catch(err=>{
                  console.log(err.message);
              })
          })
          message = "Successfully! uploaded";
          res.render('index',{message: message, status:'success'});
        }
  };
