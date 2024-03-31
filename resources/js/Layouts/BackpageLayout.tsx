import Navbar from '@/Components/Backpage/Navbar'
import Sidebar from '@/Components/Backpage/Sidebar'
import { User } from '@/types'
import React, { PropsWithChildren, ReactNode } from 'react'

export default function BackpageLayout({ children }: PropsWithChildren) {

    return (
        <>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div className="py-10 px-6 sm:ml-64">
                <div className="mt-14">
                    {children}
                </div>
            </div>
        </>
    )
}
