
import Messages from '../messages/Messages'
import MessageInput from '../messages/MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useEffect } from 'react';
import {useAuthContext} from '../../context/AuthContext'
import { useSocketContext } from '../../context/SocketContext';



export default function MessageContainer({conversation}){
  const {selectedConversation, setSelectedConversation} = useConversation()
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers && onlineUsers.includes(conversation._id)
  const profilPic = selectedConversation?.profilePic

  useEffect(() => {

    // cleanup function (unmounts)
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
      <div className='md:min-w-[650px] flex flex-col'>
        {!selectedConversation ? <NoChatSelected/> : (
          <>
          {/* Header */}
            <div className='inline-flex items-center gap-2 px-4 py-2 mb-2 bg-gray-y-400 border border-gray-400 font-bold'>
              <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
                  <div className='w-9 rounded-full'>
                      <img src={profilPic} alt="user avatar" />
                  </div>
              </div>
              <span className='label-text text-white'>{selectedConversation.fullName}</span>
            </div>
            
  
            <Messages/>
            <MessageInput/>
          </>
        )}
      </div>
    
  )
}



const NoChatSelected = () => {
  const {authUser} = useAuthContext()
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-smibld flex flex-col items-center gap-2'>
        <p className='text-3xl font-bold'>Welcome <span className='text-[#2DD4BF]'>{authUser.fullName}</span></p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center"/>
      </div>
    </div>
  )
}



// STARTER CODE



// import Messages from '../messages/Messages'
// import MessageInput from '../messages/MessageInput'


// export default function MessageContainer(/*{avatar, name}*/){
//   return (
//       <div className='md:min-w-[650px] flex flex-col'>
//         <>
//         {/* Header */}
//           <div className='inline-flex items-center gap-2 px-4 py-2 mb-2 bg-gray-y-400 border border-gray-400 font-bold'>
//             {/* <span className=''>{avatare}</span> */}
//             <div className='avatar avatar-online'>
//                 <div className='w-9 rounded-full'>
//                     <img src="https://avatar.iran.liara.run/public/41" alt="user avatar" />
//                     {/* <img src={avatar.img} alt="user avatar" /> */}
//                 </div>
//             </div>
//             <span className='label-text'>{/* {name} */} sah</span>
//           </div>
          

//           <Messages/>
//           <MessageInput/>
//         </>
//       </div>
    
//   )
// }

