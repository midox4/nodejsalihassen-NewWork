const express = require("express");
const router = express.Router();

// import from controllers
const { deleteData,trouverData,saveData,findData } = require("../controllers/articleControler");


//path start with '/all-articles/'
//get all articles show data in website
router.get("/",   findData );

// ajouter article a la base de donnee /ajout ADD

router.post("/",saveData);

// app.get("/all-articles/article-details", (req, res) => {
//   // result =   object  inside mongo database

//   Article.findById("613a9a265e04d99a04ee969e")
//     .then((result) => {
//       res.render("details", { mytitle: "ARTICLE DETAILS", objArticle: result });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.get("/:id", trouverData);
//DELETE DATA

router.delete("/:id", deleteData);

module.exports = router;
