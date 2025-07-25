import './App.css'
import Home from './pages/home/Home'
import { Navigate, Routes, Route } from 'react-router-dom'
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext.jsx'

function App() {
{/* h-screen  in className */}
const { authUser } = useAuthContext()
authUser ? console.log(`le user actuel est '${authUser.username}'`) : console.log("Pas de user connecté")
  
  return (
    <div className='p-4 flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser ? <Home /> :<Navigate to ={"/login"} /> } />
        <Route path='/login' element={authUser ? <Navigate to ="/" /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to ="/" /> : <Signup />} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
