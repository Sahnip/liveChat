export const getUsersForSidebar = async (req, res) =>{
    try{
        const loggedInUserId = req.user._id

        const allUsers = await User.find({
            _id: { $ne: loggedInUserId }
        }).select("-password")

    }catch(error){
        console.log("Error in get users for sidebar controller", error.message)
        res.status(500).json({ error: "Internal server error usercontroller"})
    }
}