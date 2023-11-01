const express= require("express");
const router = express.Router();

const {handleGenerateShortID, handleNumberOfClicks}= require("../controllers/url");

router.post('/', handleGenerateShortID);
router.get("/analytics/:shortId", handleNumberOfClicks )

module.exports= router; 