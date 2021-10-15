import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from "./routes/user.js";

const app = express();

app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(cors());


app.use('/user',userRoutes);
app.use('/posts',postRoutes);

const CONNECTION_URL = 'mongodb+srv://admin:PKBpJkqp5ZuZTzTT@cluster0.fuqv1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{
useNewUrlParser: true, useUnifiedTopology: true
})
.then(()=>app.listen(PORT,()=>console.log
(`server running on port:http://localhost:${PORT}`)))
.catch((error)=>console.log(`${error} did not connect`));
