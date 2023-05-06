const express =require('express');
const body_parser = require('body-parser');
const userRouter = require('./routers/user_router')
const activitiesRouter = require('./routers/activities_router')
const app= express(); // making use of this const variable to import our express model  



app.use(body_parser.json()); // for req body

app.use('/',activitiesRouter)
app.use('/',userRouter);
module.exports =app; // export app.js so we use it in other files in the project

