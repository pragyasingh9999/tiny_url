const shortID= require("shortid");
const myURL = require("../models/url");

async function handleGenerateShortID(req,res){
    const body= req.body;
    
    if(!body.url) return res.status(400).json({error: "URL required"});

    const shortId=  shortID();
    
    await myURL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: []
    });

    return res.render("home", {
        id:shortId,
    });

}

async function handleGetUrlById(req,res){
    const shortId= req.params.shortId;
   
    const entry= await myURL.findOneAndUpdate(
        {shortId}, {$push:{visitHistory: {timestamp : Date.now()},},}
    );
    
    res.redirect(entry.redirectUrl);
}

async function handleNumberOfClicks(req,res){
    const shortId= req.params.shortId;
    const result= await myURL.findOne({shortId});
    console.log(result);
    return res.json({totalClicks: result.visitHistory.length, analytics: result.visitHistory});
}

module.exports= {
    handleGenerateShortID,
    handleNumberOfClicks,
    handleGetUrlById
}