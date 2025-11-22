import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import Sidebar from '../components/shared/Sidebar'
import { Outlet } from 'react-router'

const MainLayout = ({children}) => {
  return (
    <div className=''>
        <Navbar />
        <main className='min-h-screen container flex gap-[30px] my-[30px]'>
            <div className="flex-1">
                <Outlet />
            </div>
            <div className="max-w-[300px] flex-1">
                <Sidebar />
            </div>
        </main> 
        <Footer />
    </div>
  )
}

export default MainLayout