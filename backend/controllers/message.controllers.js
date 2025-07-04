import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
    try{
        const {message} = req.body
        const {id:receiverId} = req.params
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all:[senderId, receiverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:  [senderId, receiverId],
            })
        }


        const newMessage = new Message ({
            senderId,
            receiverId,
            message
        })


        if(newMessage){
            conversation.message.push(newMessage._id)
        }

        // SOCKET IO FUNCTIONNALITY
        
        // await conversation.save()
        // await newMessage.save()
        
        await Promise.all([conversation.save(), newMessage.save()])

        res.status(200).json({status:"success", message:"Message sent successfully", newMessage})

    }catch(error){
        console.log("Error in send message controller", error.message)
        res.status(500).json({ error: "Internal server error2"})
    }
}


export const getMessages = async (req, res) => {
    try{

        const {id:userToChatId} = req.params
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]}
        }).populate("message")

        if(!conversation) return res.status(200).json([])

        const messages = conversation.message

        res.status(200).json(messages)

    }catch(error){
        console.log("Error in send message controller", error.message)
        res.status(500).json({ error: "Internal server error3"})
    }
}