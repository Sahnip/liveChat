import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversation'

const Conversations = () => {
  const { loading, conversations } = useGetConversations()

  return (
    <div className="py-2 flex flex-col overflow-auto">

      {conversations.map((conversation, idx) => (
        <Conversation
         key={conversation._id}
         conversation={conversation}
         lastIdx={idx === conversation.length - 1}
         />
      ))}

      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        
    </div>
  )
}

export default Conversations







// STARTER CODE


// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
        
//     </div>
//   )
// }

// export default Conversations