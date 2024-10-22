import React, { useState } from 'react'
import LockIcon from '../assets/Icons/lock.png'
import EmailIcon from '../assets/Icons/email.png'
import ShowPassword from '../assets/Icons/show-password.png'
import HidePassword from '../assets/Icons/hide-password.png'
import GoogleIcon from '../assets/logos/google.png'
import { Link } from 'react-router-dom'

const Login = () => {
  const [showPassword, setShowPassword] = useState(HidePassword)
  return (
    <div className='px-5 sm:px-10'>
      <form className='flex flex-col mx-auto w-2/6 p-5 text-lg gap-3 border-2 border-black rounded-lg mt-20'>
        <button className='w-full p-3 bg-white rounded-lg flex justify-center gap-2 items-center'><img src={GoogleIcon} alt="google" className='w-7' />Continue with Google</button>
        <span className='text-center'>or</span>
        <div className='flex justify-center items-center bg-white py-1 px-2 rounded-lg w-full'>
          <img src={EmailIcon} alt="user" className='w-7' />
          <input type="email" name='email' placeholder='Email' className='w-full p-2 outline-none' />
        </div>
        <div className='flex justify-center items-center bg-white py-1 px-2 rounded-lg w-full'>
          <img src={LockIcon} alt="user" className='w-7' />
          <input type={showPassword ? 'password' : 'text'} name='password' placeholder='Password' className='w-full p-2 outline-none' />
          <img src={showPassword ? ShowPassword : HidePassword} alt="password" className='w-6 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />
        </div>
        <p className='flex justify-end text-[16px]'>Forgot Password?</p>
        <button className='w-full p-3 bg-white rounded-lg'>Login</button>
        <p className='mx-auto text-[16px]'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  )
}

export default Login