import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import Sidebar from '../components/shared/Sidebar'

const MainLayout = ({children}) => {
  return (
    <div className=''>
        <Navbar />
        <main className='min-h-screen container flex gap-5 my-[30px]'>
            <div className="flex-1">
                {children}
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