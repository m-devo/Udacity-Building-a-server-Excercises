import express from "express";
import logger from "../../utilities/logger";
const arab = express.Router();

arab.get("/", logger, (request, response)=>{
    response.send("success");
});

export default arab;
