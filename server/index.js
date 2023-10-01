const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors= require('cors');


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use(cors());

const TodoItemRoutes = require('./Routes/todoroutes');


mongoose.connect(process.env.databaseUrl)
.then(()=> console.log("Database Connected"))
.catch(err=> console.log(err));






app.use('/',TodoItemRoutes);

app.listen(PORT,()=>console.log("Server Connected"));