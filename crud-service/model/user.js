import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const userschema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Username:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    }
})

autoIncrement.initialize(mongoose.connection)
userschema.plugin(autoIncrement.plugin,'users')

const Users= mongoose.model('users',userschema)
export default Users;