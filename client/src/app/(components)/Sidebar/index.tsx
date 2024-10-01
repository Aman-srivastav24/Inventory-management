'use client'
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsSidebarCollasped } from '@/state';
import { Menu } from 'lucide-react';
import React from 'react'



const Sidebar = () => {
    const dispatch  = useAppDispatch();
    const isSidebarCollasped = useAppSelector((state)=>state.global.isSidebarCollasped);

    const toggleSidebar =()=>{
dispatch(setIsSidebarCollasped(!isSidebarCollasped))
    }

    const sidebarClassNames = `flex flex-col fixed ${isSidebarCollasped?"w-0 md:w-16":"w-72 md:w-64"} bg-white transition-all duration-300 overflow-hidden h-full z-40`
    return (
        <div className={sidebarClassNames}>
            {/* Top Logo */}
            <div className='flex gap-3 justify-between md:justify-normal items-center pt-8'>
                <h1 className='font-extrabold text-2xl'>DayStock</h1>
                <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={toggleSidebar}>
                    <Menu className='w-4 h-4'/>
                </button>
            </div>
            {/* Links */}
            <div className='flex-grow mt-8'>
                {/*links here*/}
            </div>
            {/* footer */}
            <div>
                <p className='text-center text-xs text-gray-500'>&copy; 2024 Daystock</p>
            </div>
        </div>
    )
}

export default Sidebar;