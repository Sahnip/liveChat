import React from 'react'

const Conversation = () => {
  return (
    <>
        <div className='flex gap-4 items-center active:bg-gray-400 hover:bg-gray-400 rounder p-3 py-1 cursor-pointer'>
            <div className='avatar avatar-online'>
                <div className='w-12 rounded-full'>
                    <img src="https://avatar.iran.liara.run/public/41" alt="user avatar" />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-4 justify-between'>
                    <p className='font-bold text-gray-200'>Machiah now</p>
                    {/* <span className='text-xl'>Machiah now</span> */}
                </div>
            </div>
        </div>

        <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Conversation









// STARTER CODE FOR THIS FILE


// import React from 'react'

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