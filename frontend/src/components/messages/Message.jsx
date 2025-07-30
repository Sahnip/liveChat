import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'



const Message = ({ message }) => {

  const { authUser } = useAuthContext()
  const { selectedConversation } = useConversation()
  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilPic = fromMe ? authUser.profilePic: selectedConversation?.profilePic
  const bubbleBgColor = fromMe ? 'bg-teal-100 dark:bg-teal-800' : "bg-gray-100 dark:bg-gray-800"
  const textColor = fromMe ? 'text-black dark:text-white' : "text-black dark:text-white"
  const messageDate = new Date(message.createdAt)
  const options = {
    hour: '2-digit',
    minute: '2-digit'
  };
  /* const shakeClass = message.shouldShake ? "shake" : ""*/

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
        <div className={`chat-bubble flex justify-between items-end gap-3 ${textColor} ${bubbleBgColor} rounded-xl text-[14px] max-w-full`}>{message.message}<div className='chat-footer opacity text-xs flex gap-1 items-center text-[11px] dark:text-gray-300 text-gray-500'>{messageDate.toLocaleTimeString("fr-FR", options)}</div></div>
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



// `${new Date('2023-08-17 22:30:02').getHours()}
//  :${new Date('2023-08-17 22:30:02').getMinutes()}
//  :${new Date('2023-08-17 22:30:02').getSeconds()}`