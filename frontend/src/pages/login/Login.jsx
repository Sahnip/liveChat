import {useState} from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin.js'



const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const {loading, login } = useLogin()



  const handleSubmit = async (e) =>{
    e.preventDefault();
    await login(username, password)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-12 rounded-lg shadow-md bg-gray-y-400 bg-clip-padding backdrop-filer backdrop-blur-lg bg-opacity-1 border border-gray-500'>
        <h1 className='text-3xl font-semibold text-center text-gray-100 '>
          Login
          <span className='text-blue-500'>LiveChat </span>
        </h1>

        <form onSubmit={handleSubmit}>

          <div className='max-h-26 pt-9'>
            
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
                required
                placeholder="Username"
                // pattern="[A-Za-z][A-Za-z0-9\-]*"
                // minlength="5"
                // maxlength="30"
                title="Only letters, numbers or dash"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                required
                placeholder="Password"
                // minlength="8"
                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                // title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 10 characters, including
              <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
            </p>

          </div>

          <div>
            <button className='btn btn-block btn-md mt-10 hover:border-gray-500' disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span>: "Login"}
            </button>
          </div>

          <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            {"Don't"} have account ?
          </Link>

        </form>
      </div>
    </div>
  )
}

export default Login









// STARTER CODE


// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-12 rounded-lg shadow-md bg-gray-y-400 bg-clip-padding backdrop-filer backdrop-blur-lg bg-opacity-1 border border-gray-100'>
//         <h1 className='text-3xl font-semibold text-center text-gray-100 '>
//           Login
//           <span className='text-blue-500'>LiveChat </span>
//         </h1>

//         <from>
//           <div className='max-h-26 pt-9'>
            
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
//                 required
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
//                 required
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

//           <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//             {"Don't"} have account ?
//           </a>

//           <div>
//             <button className='btn btn-block btn-md mt-10 hover:border-gray-100'>Login</button>
//           </div>
//         </from>
//       </div>
//     </div>
//   )
// }

// export default Login