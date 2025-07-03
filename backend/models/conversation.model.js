import mongoose from "mongoose"


const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    ],
    message:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",
            default:[]
        }
    ]
    // createdAt, updatedAt => message.createdAt : 15:30
}, {timestamps:true})


const Conversation = mongoose.model("Conversation", conversationSchema)

export default Conversation