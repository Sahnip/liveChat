
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from "../skeleton/MessageSkeleton"
import { useEffect, useRef } from 'react'
import useListenMessages from '../../hooks/useListenMessages'


export default function Messages() {
  const {messages = [], loading} = useGetMessages()
  useListenMessages()
  const lastMessageRef = useRef()
  
  
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }, [messages])

  // console.log("Messages :", messages)
  return (
    <div className="px-4 flex-1 overflow-auto">

      {!loading && messages.length > 0 && messages.map((message, index) => {
        if (index === messages.length - 1) {
          return <div ref={lastMessageRef} key={message._id}><Message message={message} /></div>
        }
        return <Message key={message._id} message={message} />
      })}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      
      {!loading && (!messages || messages.length === 0) && <p className='text-center'>Send a message to start the conversation</p>}

    </div>
  )
}





// STARTER CODE



// import Message from './Message'

// export default function Messages() {
//   return (
//     <div className="px-4 flex-1 overflow-auto">
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//     </div>
//   )
// }

