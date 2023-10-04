import React from 'react'
import Button from '../components/Elements/Buttons'
import { Link } from 'react-router-dom'
const home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link to={'\products'} >
        <Button content="Product" className="bg-cyan-700 text-white font-sans font-bold ms-2 px-6 py-2 shadow-lg rounded-lg"/>
      </Link>
      <Link to={'/login'}>
        <Button content="Login" className="bg-orange-500 text-white font-sans font-bold ms-2 px-6 py-2 shadow-lg rounded-lg" />
      </Link>
        <Link to={'/register'}>
          <Button content="Register" className="bg-cyan-700 text-white font-sans font-bold ms-2 px-6 py-2 shadow-lg rounded-lg" />
        </Link>
    </div>
  )
}

export default home