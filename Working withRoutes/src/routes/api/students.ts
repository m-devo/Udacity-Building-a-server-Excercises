import express from "express";
const students = express.Router();

students.get("/", (request, response)=>{
    response.send("Students Route")
});

export default students;