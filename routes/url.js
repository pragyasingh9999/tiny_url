const express= require("express");
const router = express.Router();

const {handleGenerateShortID, handleNumberOfClicks, handleGetUrlById}= require("../controllers/url");

router.post('/', handleGenerateShortID);
router.get("/:shortId", handleGetUrlById);
router.get("/analytics/:shortId", handleNumberOfClicks )

module.exports= router; 