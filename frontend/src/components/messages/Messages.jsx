
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'

export default function Messages() {

  const {messages, loadind} = useGetMessages()
  console.log("Messages :", messages)
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loadind ? (
        <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      ) : (
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))
      )}
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

