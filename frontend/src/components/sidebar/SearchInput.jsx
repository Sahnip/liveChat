import React from 'react'

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <label class="input rounded-lg ">
            <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
            <input type="search" class="grow" placeholder="Search" />
            <kbd class="kbd kbd-sm">⌘</kbd>
            <kbd class="kbd kbd-sm">K</kbd>
        </label>

        <button type='submit' className='btn btn-circle bg-blue-500 text-white'>
        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2.5"
                fill="none"
                stroke="#FFFFFF"
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