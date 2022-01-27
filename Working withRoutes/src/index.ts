//my server//
import express from "express";
import routes from "./routes/index"

const app = express();
const port = 5000;

//define a route handler for the dafault home page

app.use("/api", routes);


//start the Express server
app.listen (port, ()=>{
    console.log(`server start at http://localhost:${port}`)
});