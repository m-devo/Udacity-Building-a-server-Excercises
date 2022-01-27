//my middleware

import express from "express";


const logger = (request: express.Request, response: express.Response, next:Function):void =>{
    let Url =request.url;
    console.log(`${Url} was visited`);
    next();
};

export default logger;