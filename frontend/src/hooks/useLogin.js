import React from 'react'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from "../context/AuthContext"



function useLogin() {
    const [loading, setLoading] = useState(false)

    const {authUser, setAuthUser} = useAuthContext()



    const login = async (username, password) =>{
        // const success = handleInputErrors({username, password})
        // if(!success) return;
    

    setLoading(true)
    try{
        const res = await fetch("/api/auth/login",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        })

        const data = await res.json()
        console.log(data)

        if(data.error){
            throw new Error(data.error)
        }

        //localStorage
        localStorage.setItem("chat-user", JSON.stringify(data))
        setAuthUser(data)
         
    }catch(error){
        toast.error(error.message)
     }finally{
        setLoading(false)
     }

    }

    return { loading, login }
}

export default useLogin

// function handleInputErrors({username, password}){
//     if(!username || !password){
//         toast.error('Please fill in all fields.')
//         return false
//     }

//     if(username !== dataGlobal.username){
//         toast.error('Username or password is incorrect.')
//         return false
//     }

//     return true
// }