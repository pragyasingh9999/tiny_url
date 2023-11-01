const express = require("express");
const {connectMongoDB}= require("./connection");

const urlRoute = require("./routes/url");
const byIdRoute= require("./routes/byId");

connectMongoDB("mongodb://127.0.0.1:27017/short_url")
.then(()=> console.log("MongoDB connected successfully"));

const app= express();
const PORT = 8000;

app.use(express.json());

app.use("/url", urlRoute);
app.use("/", byIdRoute);

app.listen(PORT, ()=> console.log(`App started on PORT: ${PORT}`));