import express from "express";
const teachers = express.Router();

teachers.get("/", (request, response)=>{
    response.send("Teachers Route")
});

export default teachers;