const myURL = require("../models/url");

async function handleGetUrlById(req,res){
    const shortId= req.params.shortId;
   
    const entry= await myURL.findOneAndUpdate(
        {shortId}, {$push:{visitHistory: {timestamp : Date.now()},},}
    );
    
    res.redirect(entry.redirectUrl);
}

module.exports= {handleGetUrlById}; 