const router = require('express').Router();

const TodoItemModel = require('../models/todomodel');

router.post('/post',async (req,res)=>{
    try{
        const newItem = new TodoItemModel({
            item: req.body.item
        })
        const saveItem = await newItem.save();
        res.status(200).json(saveItem);

    }catch(err){
        res.json(err);
    }
});

router.get('/get',async (req,res)=>{
    
    try{
        const allTodoItems = await TodoItemModel.find({});
        res.status(200).json(allTodoItems);
        

    }catch(err){
        res.json(err);
    }    
})

router.put('/put/:id',async(req,res)=>{
    try{
        const updateItem= await TodoItemModel.findByIdAndUpdate(req.params.id,{$set: req.body});
        res.status(200).json(updateItem);

    }catch(err){
        res.json(err);
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try{
        const deleteItem = await TodoItemModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');
    }catch(err){
        res.json(err);
    }
});



module.exports= router;