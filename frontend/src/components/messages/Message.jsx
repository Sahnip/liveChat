import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'



const Message = ({ message }) => {

  const { authUser } = useAuthContext()
  const { selectedConversation } = useConversation()
  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilPic = fromMe ? authUser.profilPic: selectedConversation?.profilPic
  const bubbleBgColor = fromMe ? 'bg-blue-600' : ""

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img
            alt='Chat bubble component'
            src={profilPic}
          />
        </div>
      </div>
      <div>
        <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor} rounded-xl text-[13px]`}>{message.message}</div>
        <div className='chat-footer opacity text-xs flex gap-1 items-center'>08:26</div>
      </div>
    </div>
  )
}

export default Message;


// STERTER CODE


// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//       <div className='chat-image avatar'>
//         <div className='w-10 rounded-full'>
//           <img
//             alt='Chat bubble component'
//             src={"https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"}

//           />
//         </div>
//       </div>
//       <div>
//         <div className={`chat-bubble text-white bg-blue-500 rounded-xl text-[13px]`}>Test maintenant</div>
//         <div className='chat-footer opacity text-xs flex gap-1 items-center'>08:26</div>
//       </div>
//     </div>
//   )
// }

// export default Message;