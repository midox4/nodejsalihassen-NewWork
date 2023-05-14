// here we put all functions 

const mongoose = require("mongoose");

const Data = require("../models/articleSchema");


const  findData = (req, res) => {
    // res.render("index", { mytitle: "HOME" });
  
    // result = Array of objects inside mongo database
  
    Data.find() // get all data from database mongodb
      .then((result) => {
        res.render("index", { mytitle: "HOME", arrArticle: result });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const saveData =  (req, res) => {
    const article = new Data(req.body);
  
    // console.log(req.body)
    //function save( make _id automatique on db mongo)
  
    article
      .save()
      .then((result) => {
        res.redirect("/all-articles");
        console.log("ajout avec succes ")
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const trouverData = (req, res) => {
    // check the id if it is valid
    // findBy ID  go to page all article details ejs
    const ObjectId = mongoose.Types.ObjectId;
  
    console.log(req.params.id);
    let query = { _id: new ObjectId(req.params.id) };
  
    Data.findOne(query) // get all data from database mongodb model.findbyid
  
      .then((result) => {
        res.render("details", { mytitle: "ARTICLE DETAILS", objArticle: result });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const deleteData = (req, res) => {
    //var supp = { _id: new ObjectId(req.params.id) };
    //var myId = JSON.parse(req.params.id);
    var Id = req.params.id.trim();
    //var query = reqId.toString()
  
    Data.findByIdAndDelete(Id)
      .then((result) => {
        res.json({ mylink: "/all-articles" });
  
        console.log("data deleted with succccces ");
      })
      .catch((err) => {
        console.log(err);
      });
  }


  module.exports= {

    findData,
    saveData,
    trouverData,
    deleteData



  }