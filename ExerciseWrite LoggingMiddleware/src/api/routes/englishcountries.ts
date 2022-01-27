import express from "express";
const english = express.Router();

english.get("/", (request, response)=>{
    response.send("success")
});

export default english;