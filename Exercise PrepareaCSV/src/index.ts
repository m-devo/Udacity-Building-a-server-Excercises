import express from 'express';
import csv from 'csvtojson';
import {promises as fsprmises} from "fs";


const app = express();
const port = 3000;

const inputFile = "./users.csv";
const outputFile = "users.json";

app.get("/convert", (request, response)=>{
    response.send("converting!");
    csv()
    .fromFile(inputFile)
    .then((data)=>{
        let newData = data.map((item:{
           first_name:string;
           last_name:string;
           phone:string; 
        })=>{
            let first = item.first_name;
            let last = item.last_name;
            let phone = item.phone;
            if (item.phone=== "") {
                return "missing data";
            }
            return {first, last, phone};
        });
    fsprmises.writeFile(outputFile, JSON.stringify(newData));
    })
});



// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});