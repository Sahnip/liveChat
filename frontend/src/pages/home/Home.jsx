import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[550px] md:h-[650px] rounded-lg overflow-hidden shadow-md bg-gray-y-400 bg-clip-padding backdrop-filer backdrop-blur-lg bg-opacity-1 border border-gray-500 bg-opacity-0'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home