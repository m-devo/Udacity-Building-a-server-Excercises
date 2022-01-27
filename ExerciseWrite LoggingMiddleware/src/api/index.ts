//my routes as amiddleware
import express from "express";
import english from "./routes/englishcountries";
import arab from "./routes/arabcountries";
import asian from "./routes/asiancountries";

const routes =express.Router();




routes.get("/", (request, response)=>{
    response.send("main api route");
    });

routes.use("/english", english);
routes.use("/asian", asian);
routes.use("/arab", arab);

export default routes;