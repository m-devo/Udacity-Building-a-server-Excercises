import express from "express";

const app = express();
const port = 3000;

//define a route handler for the dafault home page

app.get("/api",(request, response)=>{
response.send("server working");
})

//start the Express server
app.listen (port, ()=>{
    console.log(`server start at http://localhost:${port}`)
});