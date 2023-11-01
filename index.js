const express = require("express");
const path = require("path");

const {connectMongoDB}= require("./connection");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");

connectMongoDB("mongodb://127.0.0.1:27017/short_url")
.then(()=> console.log("MongoDB connected successfully"));

const app= express();
const PORT = 8000;

app.set('view engine', 'ejs'); //to let express know which tamplating engine we are using 
app.set("views", path.resolve("./views")) //set path to let express know where our ejs files are

app.use(express.json()); //middleware to read json data
app.use(express.urlencoded({extended: false})); // middleware to read form data

app.use("/url", urlRoute);
app.use("/", staticRoute);


app.listen(PORT, ()=> console.log(`App started on PORT: ${PORT}`));