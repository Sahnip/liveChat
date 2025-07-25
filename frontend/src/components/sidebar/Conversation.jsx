import useConversation from "../../zustand/useConversation"


const Conversation = ({conversation, lastIdx}) => {
    const {selectedConversation, setSelectedConversation} = useConversation()

    const isSelected = selectedConversation?._id === conversation._id

  return (
    <>
        <div className={`flex gap-4 items-center active:bg-gray-400 hover:bg-gray-400 rounded-md p-3 py-1 cursor-pointer
            ${isSelected ? "bg-gray-400" : ""}`}
            onClick={() => setSelectedConversation(conversation)}
        >
                
            <div className='avatar avatar-online'>
                <div className='w-12 rounded-full'>
                    <img src={conversation.profilePic} alt="user avatar" />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-4 justify-between'>
                    <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                    {/* <span className='text-xl'>Machiah now</span> */}
                </div>
            </div>
        </div>

        {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
    </>
  )
}

export default Conversation









// STARTER CODE FOR THIS FILE




// const Conversation = () => {
//   return (
//     <>
//         <div className='flex gap-4 items-center active:bg-gray-400 hover:bg-gray-400 rounder p-3 py-1 cursor-pointer'>
//             <div className='avatar avatar-online'>
//                 <div className='w-12 rounded-full'>
//                     <img src="https://avatar.iran.liara.run/public/41" alt="user avatar" />
//                 </div>
//             </div>

//             <div className='flex flex-col flex-1'>
//                 <div className='flex gap-4 justify-between'>
//                     <p className='font-bold text-gray-200'>Machiah now</p>
//                     {/* <span className='text-xl'>Machiah now</span> */}
//                 </div>
//             </div>
//         </div>

//         <div className='divider my-0 py-0 h-1'></div>
//     </>
//   )
// }

// export default Conversation