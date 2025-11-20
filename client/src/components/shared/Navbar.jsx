import React from 'react'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-center items-center py-3">
            <img src={logo} alt="logo" />
        </div>

        <nav className='bg-gray-600 flex items-center justify-center'>
          <a className='text-xl font-semibold py-3 px-5 text-white hover:bg-amber-700 border-x' href="/">Home</a>
          <a className='text-xl font-semibold py-3 px-5 text-white hover:bg-amber-700 border-r' href="/politics">Politics</a>
          <a className='text-xl font-semibold py-3 px-5 text-white hover:bg-amber-700 border-r' href="/sports">Sports</a>
          <a className='text-xl font-semibold py-3 px-5 text-white hover:bg-amber-700 border-r' href="/technology">Technology</a>
          <a className='text-xl font-semibold py-3 px-5 text-white hover:bg-amber-700 border-r' href="/media">Media</a>
        </nav>
    </div>
  )
}

export default Navbar