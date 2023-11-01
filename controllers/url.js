const shortID= require("shortid");
const myURL = require("../models/url");

async function handleGenerateShortID(req,res){
    const body= req.body;
    
    if(!body.url) return res.status(400).json({error: "URL required"});

    const shortId=  shortID();
    console.log(shortId);
    console.log(body.url);
    
    await myURL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: []
    });

    return res.json({id: shortId});
}

async function handleNumberOfClicks(req,res){
    const shortId= req.params.shortId;
    const result= await myURL.findOne({shortId});
    console.log(result);
    return res.json({totalClicks: result.visitHistory.length, analytics: result.visitHistory});
}

module.exports= {
    handleGenerateShortID,
    handleNumberOfClicks
}