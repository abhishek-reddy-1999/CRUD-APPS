import  express  from 'express'
import mongoose from 'mongoose';
import router from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser';
import Users from './model/user.js';
const app=express();
const port=8080;
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://kuppaniabhi97:1234@abhishek.jxez6ek.mongodb.net/abhi')
const db= mongoose.connection;
db.on('error',(err)=>{console.log('err')})
db.on('connected',()=>{console.log('connected')})
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',router)

app.listen(port,()=>{
    console.log('Server is running on port '+port);
})