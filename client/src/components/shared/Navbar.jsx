import React from 'react'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-center items-center py-3">
            <img src={logo} alt="logo" />
        </div>

        <nav className='bg-gray-600 flex items-center justify-center'>
          <a className='text-xl font-semibold py-3 px-5 hover:bg-amber-700' href="/">Home</a>
          <a className='text-xl font-semibold py-3 px-5 hover:bg-amber-700' href="/politics">Politics</a>
          <a className='text-xl font-semibold py-3 px-5 hover:bg-amber-700' href="/sports">Sports</a>
          <a className='text-xl font-semibold py-3 px-5 hover:bg-amber-700' href="/technology">Technology</a>
          <a className='text-xl font-semibold py-3 px-5 hover:bg-amber-700' href="/media">Media</a>
        </nav>
    </div>
  )
}

export default Navbar