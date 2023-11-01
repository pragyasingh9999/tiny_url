const express= require("express");
const router = express.Router();

const {handleGetUrlById}= require("../controllers/byId");


router.get("/:shortId",handleGetUrlById);

module.exports= router;
