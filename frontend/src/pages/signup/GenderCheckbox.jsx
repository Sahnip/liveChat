import React from 'react'

function GenderCheckbox() {
  return (
    <div className='flex'>
        <div className='form-control mr-4'>
            <div className={`label gap-2 cursor-pointer`}>
                <span className='label-text text-gray-700'>Male</span>
                <input type='checkbox' className='checkbox checkbox-neutral border-slate-900'/>
            </div>
        </div>
        <div className='form-control'>
            <div className={`label gap-2 cursor-pointer`}>
                <span className='label-text text-gray-700'>Female</span>
                <input type='checkbox' className='checkbox checkbox-neutral border-slate-900'/>
            </div>
        </div>
    </div>
  )
}

export default GenderCheckbox








// STARTER CODE




// import React from 'react'

// function GenderCheckbox() {
//   return (
//     <div className='flex'>
//         <div className='form-control mr-4'>
//             <div className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text text-gray-700'>Male</span>
//                 <input type='checkbox' className='checkbox checkbox-neutral border-slate-900'/>
//             </div>
//         </div>
//         <div className='form-control'>
//             <div className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text text-gray-700'>Female</span>
//                 <input type='checkbox' className='checkbox checkbox-neutral border-slate-900'/>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox