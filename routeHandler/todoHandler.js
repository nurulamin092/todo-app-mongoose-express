const express = require('express');
const mongoose = require('mongoose');
const todoSchema = require('../schemas/todoSchema');
const router = express.Router();
const Todo = new mongoose.model("Todo",todoSchema);

// get all the todoS
router.get('/',async(req,res)=>{

});

//GET A TODO BY ID
router.get('/:id',async(req,res)=>{

});

//POST A TODO
router.post('/',async(req,res)=> {
    const newTodo = new Todo (req.body);
    await newTodo.save((err) => {
        if (err) {
            res.status(500).json({
                error: "There was a server side error"
            });
        } else {
            res.status(200).json({
                message: "Todo was inserted successfully"
            });
        }
    });

});

//POST MULTIPLE TODO-S
router.post('/all',async(req,res)=>{
    await Todo.insertMany(req.body,(err) => {
        if (err) {
            res.status(500).json({
                error:'There was server side error'
            });
        } else {
            res.status(200).json({
                Message:" Todo's were insert successfully"
            })
        }
    })

});

// PUT TODO
router.put('/:id',async(req,res)=>{
   await Todo.updateOne(
    {_id: req.params.id}, 
    {
    $set: {
        status: 'active',
    },
   }, (err) => {
    if (err) {
        res.status(500).json({
            error: 'There was server side error'
        });
    } else {
        res.status(200).json({
            message: " Todo was update successfully"
        });
    }
   });

});

// DELETE TODO
router.delete('/:id',async(req,res)=>{

});

// Export router 

module.exports = router;

