import Navbar from '@/Components/Backpage/Navbar'
import Sidebar from '@/Components/Backpage/Sidebar'
import { User } from '@/types'
import React, { PropsWithChildren, ReactNode, useState } from 'react'

export default function BackpageLayout({ children }: PropsWithChildren) {
    const [showSidebar, setShowSidebar] = useState(true);
    const [showSidebarMobile, setShowSidebarMobile] = useState(false);
    console.log('click', showSidebar);

    const handleShowSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    const handleShowSidebarMobile = () => {
        setShowSidebarMobile(!showSidebarMobile);
    }

    return (
        <>
            <Navbar showSidebar={showSidebar} handleShowSidebar={handleShowSidebar} showSidebarMobile={showSidebarMobile} handleShowSidebarMobile={handleShowSidebarMobile}></Navbar>
            <Sidebar showSidebar={showSidebar} handleShowSidebar={handleShowSidebar} showSidebarMobile={showSidebarMobile} handleShowSidebarMobile={handleShowSidebarMobile}></Sidebar>
            <div onClick={() => setShowSidebarMobile(false)} className={`py-10 px-6 transition-transform ${showSidebar && 'sm:ml-64'}`}>
                <div className="mt-14">
                    {children}
                </div>
            </div>
        </>
    )
}
