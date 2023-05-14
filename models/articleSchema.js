//creating model and schema for article

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//  define the schema  ( the structure of article)

const articleSchema = new Schema({
  //articleSchema variable ay ism

  title: String,  //title houwa bidou name fil form 
  summary: String,
  body: String,
});
// create model based on that schema 

const Data = mongoose.model("Dataa", articleSchema)  //dataa ism document fil base 

//export model like that 
module.exports= Data