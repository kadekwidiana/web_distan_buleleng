import NavbarFrontpage from '@/Components/Navbars/NavbarFrontpage'
import React, { PropsWithChildren } from 'react'

export default function FrontpageLayout({ children }: PropsWithChildren) {
    return (
        <>
            <NavbarFrontpage></NavbarFrontpage>
            <div className="mt-[64px] sm:mt-[76px] w-screen h-full">
                {children}
            </div>
        </>
    )
}