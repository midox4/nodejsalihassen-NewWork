//  to controll ur website
require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const helmet = require('helmet')
const port = 5000 ;

// import from routes 
const articlesRouter = require('./routes/allArticles')
// view engine template ejs

app.set("view engine", "ejs");

// static file css image video : put all files in folder named public
app.use(express.static("public"));

// for post request use this 
app.use(express.urlencoded({ extended: true }));
// helmet to secure express app
//app.use(helmet())
// for auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// mongoose
// const connectDB = async ()=>{
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI)
//     console.log(`MONGODB CONNECTED : ${conn.connection.host}`)
    
//   } catch (error) {
//     console.log(error)
//     process.exit(1)
    
//   }
// }

// connectDB().then(()=>{
//   app.listen(port,(req,res)=>{
//     console.log(`listening on port ${port} `)
//   })
// })

//mongoose connection
mongoose
  .connect("mongodb+srv://hafsi:hafsi@cluster0.cquwfsx.mongodb.net/crudop")
  .then((result) => {
    app.listen(port, () => {
      console.log(` connected to databse mongodb at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("error to connect to database ");
  });

  
  app.use("/all-articles",articlesRouter) // routes link yebdew bil allarticles/..

  app.get("/", (req, res) => {
    res.redirect("/all-articles");
  });

  app.get("/add-new-article", (req, res) => {
    res.render("add-new-article", { mytitle: "create new article" });
  });  

// app.get("/all-articles/:id", (req, res) => {
//   // result =   object  inside mongo database

//   Article.findById(req.params.id)
//     .then((result) => {
//       res.render("details", { mytitle: "ARTICLE DETAILS", objArticle: result });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });



//  404 page not found !!
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});



// foreach make loop to print item for the array 

// const hafsi= ["h","hh",2, {
//   name: "ahmed",
//   forname: "hafsii"
// }]
// hafsi.forEach((item) => {
//   console.log(item.name)
// });
