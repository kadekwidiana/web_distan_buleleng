import React, { useState } from 'react'
import DropdownLaravel from '../Dropdown';
import { Dropdown } from 'flowbite-react';

interface Props {
    showSidebar: boolean,
    handleShowSidebar: () => void,
    showSidebarMobile: boolean,
    handleShowSidebarMobile: () => void
}

export default function Navbar({ showSidebar, showSidebarMobile, handleShowSidebar, handleShowSidebarMobile }: Props) {
    return (
        <nav className="fixed top-0 z-40 w-full bg-white border-b shadow-sm border-gray-200">
            <div className="px-3 py-4 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    {/* <div className="flex items-center justify-start rtl:justify-end sm:hidden">
                        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                        <a href="/" className="flex ms-2 md:me-24">
                            <img src="https://distan.bulelengkab.go.id/public/assets/image/logo_buleleng_100.png" className="w-10 me-3" alt="Logo" />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">SIG Distan</span>
                        </a>
                    </div> */}
                    <div className="block">
                        <div className={`flex items-center justify-start sm:justify-center rtl:justify-end transition-transform ${showSidebar && 'sm:ml-64'} `}>
                            <button className='hidden sm:block' onClick={handleShowSidebar}>
                                <i className="fa-solid fa-bars fa-xl"></i>
                            </button>
                            <button className='block sm:hidden' onClick={handleShowSidebarMobile}>
                                <i className="fa-solid fa-bars fa-xl"></i>
                            </button>
                            <a href="/" className="flex ms-2 md:me-24">
                                <span className="self-center text-base sm:text-lg font-semibold  whitespace-nowrap">
                                    {route().current('index.dashboard') ?
                                        'Dashboard' :
                                        route().current('index.ppl') ?
                                            'PPL'
                                            : route().current('input.ppl')
                                            && <div className="flex items-center">
                                                PPL
                                                <svg className="w-3 mx-1.5 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                                                </svg>
                                                Input Data
                                            </div>
                                    }
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ms-3">
                            <span className='px-2 text-gray-800 text-sm'>Kadek</span>
                            <Dropdown label="" dismissOnClick={false} renderTrigger={() =>
                                <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-2 focus:ring-gray-300 :focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                </button>
                            }>
                                <Dropdown.Item>Kadek</Dropdown.Item>
                                <Dropdown.Item>user@gmail.com</Dropdown.Item>
                                <Dropdown.Item>
                                    <DropdownLaravel.Link href={route('logout')} method="post" as="button">
                                        <i className="fa-solid fa-arrow-left mr-2"></i>
                                        Log Out
                                    </DropdownLaravel.Link>
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
