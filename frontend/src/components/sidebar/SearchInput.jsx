import { useState } from 'react'
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversation'
import toast from 'react-hot-toast'


const SearchInput = () => {

  const [search, setSearch] = useState('')
  const { setSelectedConversation } = useConversation()
  const { conversations } = useGetConversations()

  const handleSubmit= (e) => {
    e.preventDefault()
    if(!search) return;
    if(search.length < 3){
      return toast.error('Search term must be at least 3 characters long')
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation)
      setSearch('')
    }else{
      toast.error('No conversation found')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <label className="input rounded-lg dark:bg-[#364153] dark:text-white">
            {/* <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
                >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg> */}
            <input 
              type="search" 
              className="grow" placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* <kbd classclassName="kbd kbd-sm">⌘</kbd>
            <kbd classclassName="kbd kbd-sm">K</kbd> */}
        </label>

        <button type='submit' className=''>
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="currentColor"
                >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
        </button>
    </form>
  )
}

export default SearchInput









// STARTER CODE 




// import React from 'react'

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <label class="input rounded-lg ">
//             <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <g
//                 stroke-linejoin="round"
//                 stroke-linecap="round"
//                 stroke-width="2.5"
//                 fill="none"
//                 stroke="currentColor"
//                 >
//                 <circle cx="11" cy="11" r="8"></circle>
//                 <path d="m21 21-4.3-4.3"></path>
//                 </g>
//             </svg>
//             <input type="search" class="grow" placeholder="Search" />
//             <kbd class="kbd kbd-sm">⌘</kbd>
//             <kbd class="kbd kbd-sm">K</kbd>
//         </label>

//         <button type='submit' className='btn btn-circle bg-blue-500 text-white'>
//         <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <g
//                 stroke-linejoin="round"
//                 stroke-linecap="round"
//                 stroke-width="2.5"
//                 fill="none"
//                 stroke="#FFFFFF"
//                 >
//                 <circle cx="11" cy="11" r="8"></circle>
//                 <path d="m21 21-4.3-4.3"></path>
//                 </g>
//             </svg>
//         </button>
//     </form>
//   )
// }

// export default SearchInput