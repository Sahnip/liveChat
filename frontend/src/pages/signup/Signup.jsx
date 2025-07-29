import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'



const Signup = () => {

  const [inputs, setInputs] = React.useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const {loading, signup } = useSignup()

  const handleCheckboxChange =(gender) =>{
    setInputs({...inputs, gender})
  }


  const handleSubmit = async (e) =>{
    e.preventDefault();
    await signup(inputs)
    console.log(inputs)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-12 rounded-lg shadow-md bg-gray-y-400 bg-clip-padding backdrop-filer backdrop-blur-lg bg-opacity-1 border border-gray-500'>
        <h1 className='text-3xl font-semibold text-center text-gray-100 '>
          Signup<br />
          <span className='dark:text-[#2DD4BF] text-[#25bca8]'>&#x269B; LiveChat </span>
        </h1>

        <form onSubmit={handleSubmit}>

          <div className='max-h-26 pt-9'>
            <input type="text" placeholder="Full name" className="input input-bordered h-10 rounded-lg border-y-gray-500"
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
             />
          </div>

          <div className='max-h-26 pt-8'>
            
            {/* <label className='label p-2 '>
              <span className='text-base label-text text-gray-500'>Username</span>
            </label> */}

            <label className="input validator rounded-lg border-y-gray-500 bg-opacity-5">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                
                placeholder="Username"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minLength="5"
                maxLength="30"
                title="Only letters, numbers or dash"
                value={inputs.username}
                onChange={(e) => setInputs({...inputs, username: e.target.value})}
              />
            </label>
            <p className="validator-hint">
              Must be 5 to 30 characters
              <br />containing only letters, numbers or dash
            </p>

          </div>


          <div>
            {/* <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label> */}

            <label className="input validator rounded-lg border-y-gray-500">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                  ></path>
                  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                </g>
              </svg>
              <input
                type="password"
                
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
            </p>

          </div>

          <div className='max-h-26 pt-8 mb-4'>
            {/* <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label> */}

            <label className="input validator rounded-lg border-y-gray-500">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                  ></path>
                  <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                </g>
              </svg>
              <input
                type="password"
                
                placeholder="Confirm password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
            </p>

          </div>

          <div className='ml-6'>
            <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
          </div>
          
          

          <div>
            <button type='submit' className='btn btn-block btn-md mt-10 hover:border-gray-400' disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span>: "Sign up"}
            </button>
          </div>

          <Link to="/login" className='text-sm no-underline hover:underline text-[#2DD4BF] hover:text-[#71c5b9] mt-2 inline-block'>
            {"Already"} have account ?
          </Link>

        </form>
      </div>

    </div>
  )
}

export default Signup






// STARTER CODE

// import React from 'react'
// import {Link} from 'react-router'
// import GenderCheckbox from './GenderCheckbox'

// const Signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-12 rounded-lg shadow-md bg-gray-y-400 bg-clip-padding backdrop-filer backdrop-blur-lg bg-opacity-1 border border-gray-100'>
//         <h1 className='text-3xl font-semibold text-center text-gray-100 '>
//           Signup
//           <span className='text-blue-500'>LiveChat </span>
//         </h1>

//         <form>

//           <div className='max-h-26 pt-9'>
//             <input type="text" placeholder="Full name" className="input input-bordered h-10 rounded-lg" />
//           </div>

//           <div className='max-h-26 pt-8'>
            
//             {/* <label className='label p-2 '>
//               <span className='text-base label-text text-gray-500'>Username</span>
//             </label> */}

//             <label className="input validator rounded-lg border-y-gray-400 bg-opacity-5">
//               <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <g
//                   strokeLinejoin="round"
//                   strokeLinecap="round"
//                   strokeWidth="2.5"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
//                   <circle cx="12" cy="7" r="4"></circle>
//                 </g>
//               </svg>
//               <input
//                 type="text"
//                 
//                 placeholder="Username"
//                 pattern="[A-Za-z][A-Za-z0-9\-]*"
//                 minlength="5"
//                 maxlength="30"
//                 title="Only letters, numbers or dash"
//               />
//             </label>
//             <p className="validator-hint">
//               Must be 5 to 30 characters
//               <br />containing only letters, numbers or dash
//             </p>

//           </div>


//           <div>
//             {/* <label className='label p-2'>
//               <span className='text-base label-text'>Password</span>
//             </label> */}

//             <label className="input validator rounded-lg border-y-gray-400">
//               <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <g
//                   strokeLinejoin="round"
//                   strokeLinecap="round"
//                   strokeWidth="2.5"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <path
//                     d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
//                   ></path>
//                   <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
//                 </g>
//               </svg>
//               <input
//                 type="password"
//                 
//                 placeholder="Password"
//                 minlength="8"
//                 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
//                 title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
//               />
//             </label>
//             <p className="validator-hint hidden">
//               Must be more than 8 characters, including
//               <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
//             </p>

//           </div>

//           <div className='max-h-26 pt-8 mb-4'>
//             {/* <label className='label p-2'>
//               <span className='text-base label-text'>Password</span>
//             </label> */}

//             <label className="input validator rounded-lg border-y-gray-400">
//               <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <g
//                   strokeLinejoin="round"
//                   strokeLinecap="round"
//                   strokeWidth="2.5"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <path
//                     d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
//                   ></path>
//                   <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
//                 </g>
//               </svg>
//               <input
//                 type="password"
//                 
//                 placeholder="Confirm password"
//                 minlength="8"
//                 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
//                 title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
//               />
//             </label>
//             <p className="validator-hint hidden">
//               Must be more than 8 characters, including
//               <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
//             </p>

//           </div>

//           <div className='ml-6'>
//             <GenderCheckbox />
//           </div>
          
          

//           <div>
//             <button className='btn btn-block btn-md mt-10 hover:border-gray-100'>Signup</button>
//           </div>

//           <a href="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//             {"Already"} have account ?
//           </a>
          
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Signup