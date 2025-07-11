import React from 'react'
import Messages from '../messages/Messages'
import MessageInput from '../messages/MessageInput'


export default function MessageContainer({avatar, name}){
  return (
      <div className='md:min-w-[450px] flex flex-col'>
        <>
        {/* Header */}
          <div className='inline-flex items-center gap-2 px-4 py-2 mb-2 bg-gray-y-400 border border-gray-400 font-bold'>
            {/* <span className=''>{avatare}</span> */}
            <div className='avatar avatar-online'>
                <div className='w-9 rounded-full'>
                    <img src="https://avatar.iran.liara.run/public/41" alt="user avatar" />
                    {/* <img src={avatar.img} alt="user avatar" /> */}
                </div>
            </div>
            <span className='label-text'>{name} sah</span>
          </div>


          <Messages/>
          <MessageInput/>
        </>
      </div>
    
  )
}

