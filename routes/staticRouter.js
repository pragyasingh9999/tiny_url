const express= require("express");
const router = express.Router();
const myURL = require("../models/url");

router.get("/", async(req,res)=>{
    const allUrl= await myURL.find({});
    return res.render("home",{
        allUrl: allUrl
    });
})

module.exports= router; 