import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from '../utils/generatToken.js'

export const signup = async (req, res) =>{
    try{
        const {fullName, username,password,confirmPassword,gender} = req.body

        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords do not match"})
        }

        const user = await User.findOne({username})

        if(user){
            return res.status(400).json({error:"Username already exists"})
        }
        
        // HASH PASSWORD
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        //placeholder avatar https://avatar-placeholder.iran.liara.run/
        const boyProfilPic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilPic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        
        const profilePic = gender === "male" ? boyProfilPic : girlProfilPic
        
        const newUser = await User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic
        })
        
        if(newUser){
            // Generate JWT token
            generateTokenAndSetCookie(newUser._id, res)
            console.log(newUser)
            await newUser.save()

            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                username:newUser.username,
                gender:newUser.gender,
                profilePic:newUser.profilePic
            })
        }else{
            res.status(400).json({ error: "Invalid user data" })
        }
    }catch(error){
        console.log(error)
        res.status(500).json({error:"Internal Server Error "})
    }
}


export const login = async (req, res) =>{
    try{
        const { username, password } = req.body
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(400).json({ error: "Invalid username or password"})
        }

        generateTokenAndSetCookie(user._id, res)

        if(user){
            res.status(200).json({
                _id:user._id,
                fullName:user.fullName,
                username:user.username,
                gender:user.gender,
                profilePic:user.profilePic
            })
        }
    }catch(error){
        console.log("Error in login controller", error.message)
        res.status(500).json({ error:" Internal server Error" })
    }
}

export const logout = (req, res) =>{
    try{
        res.cookie('jwt', "", {maxAge:0})
        res.status(200).json({message : "Logged out seccessfully"})

    } catch (error){
        console.log("Error in logout controller", error.message)
        res.status(500).json({ error:" Internal server Error" })
    }
}


export default {signup, login, logout}