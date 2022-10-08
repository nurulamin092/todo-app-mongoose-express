const express = require('express');
const mongoose = require('mongoose');

//express initialization
const app = express();
app.use(express.json());

//database connection with mongoose


//application router
mongoose.connect('mongodb://localhost/todo_s')
.then(()=> console.log('Connection Success'))
.catch((err) => console.log(err))

const errorHandler =(err,req,res,next) => {
    if (res.headersSent) {
        return next(err); 
    } else {
        res.status(500).json({error:err});
    }
}

app.listen(3000,()=> {
    console.log(`Listening port at 3000`);
});