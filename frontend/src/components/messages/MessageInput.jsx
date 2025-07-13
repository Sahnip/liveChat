
import { TbSend2 } from "react-icons/tb";

function MessageInput() {
  return (
    <form action="" className='px-4 my-3'>
        <div className='w-full flex items-center justify-between gap-2'>
            <input type="text"
                className='border text-sm rounded-full block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
                placeholder='Send a message'
             />
             <button type='submit' className='inset-y-0 end-0 flex items-center pe-3 --primary btn btn-primary'>
                <TbSend2 size={26}/>
             </button>
        </div>
    </form>
  )
}

export default MessageInput








// STARTER CODE

// import React from 'react'
// import { TbSend2 } from "react-icons/tb";

// function MessageInput() {
//   return (
//     <form action="" className='px-4 my-3'>
//         <div className='w-full flex items-center justify-between gap-2'>
//             <input type="text"
//                 className='border text-sm rounded-full block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
//                 placeholder='Send a message'
//              />
//              <button type='submit' className='inset-y-0 end-0 flex items-center pe-3 --primary btn btn-primary'>
//                 <TbSend2 size={26}/>
//              </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput