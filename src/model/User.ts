import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    }, 
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default: 'client'
    },
},
{timestamps:true}
);

export default mongoose.model('User', UserSchema);