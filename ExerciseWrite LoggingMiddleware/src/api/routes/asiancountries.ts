import express from "express";
import logger from "../../utilities/logger";
const asian = express.Router();

asian.get("/", logger, (request, response)=>{
    response.send("success");
});

export default asian;