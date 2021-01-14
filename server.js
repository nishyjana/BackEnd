import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

import Post from './AddPost.js';
import Comments from './AddComment.js';




//App config
const app = express();
const port = process.env.PORT || 8001


//DB  O0X5reUhVRNALRCL
//const url ="mongodb+srv://admin:O0X5reUhVRNALRCL@cluster0.mymle.mongodb.net/pract?retryWrites=true&w=majority"
const connection_url = 'mongodb+srv://admin:R5F5V0M1nXspWcQE@cluster0.btawp.mongodb.net/practInterview?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})


//middleare 

app.use(express.json());
app.use(cors());

//api
app.post('/Posts', (req,res)=> {
    const PostDet = req.body;

    Post.create(PostDet,(err,data)=>{
        if(err){
            res.status(500).send(err)

        }else{
            res.status(201).send(data)

        }
    })
});
app.get('/Posts',(req,res)=>{
    Post.find((err,data)=>{
        if(err){
            res.status(500).send(err)

        }else{
            res.status(200).send(data)

        }
    })
})

app.get('/Comments',(req,res)=>{
    Comments.find((err,data)=>{
        if(err){
            res.status(500).send(err)

        }else{
            res.status(200).send(data)

        }
    })
})


app.post('/Comments', (req,res)=> {
    const Comment = req.body;

    Comments.create(Comment,(err,data)=>{
        if(err){
            res.status(500).send(err)

        }else{
            res.status(201).send(data)

        }
    })
});


//listerner
app.listen(port,()=> console.log("Server is runing on port 8001"));
    
