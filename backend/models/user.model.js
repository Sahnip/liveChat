import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    confirmPassword:{
        type:String,
        required:false,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    }
    // createdAt, updatedAt => message.createdAt : 15:30
}, {timestamps:true})

const User = mongoose.model("User", userSchema)

export default User