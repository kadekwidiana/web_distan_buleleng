import React, { useState } from 'react'
import Dropdown from '../Dropdown';

export default function Navbar() {
    const [showDropdownUser, setShowDropdownUser] = useState(false)

    const toggleShowDropdown = () => {
        setShowDropdownUser(!showDropdownUser);
    }

    return (
        <nav className="fixed top-0 z-40 w-full bg-white border-b shadow-md border-gray-200">
            <div className="px-3 py-4 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end sm:hidden">
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
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex items-center justify-start rtl:justify-end sm:ml-64 sm:block">
                            <a href="/" className="flex ms-2 md:me-24">
                                <span className="self-center text-lg font-semibold  whitespace-nowrap">
                                    {route().current('index.dashboard') ?
                                        'Dashboard' :
                                        route().current('index.ppl') ?
                                            'Dashboard/PPL'
                                            : route().current('input.ppl')
                                            && 'Dashboard/PPL/Input'
                                    }
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ms-3">
                            <div>
                                <button onClick={toggleShowDropdown} type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-2 focus:ring-gray-300 :focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                </button>
                            </div>
                            <div className={`z-50 ${showDropdownUser ? '' : 'hidden list-none'} my-4 text-base bg-white divide-y divide-gray-100 rounded shadow`} id="dropdown-user">
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm text-gray-900" role="none">
                                        User
                                    </p>
                                    <p className="text-sm font-medium text-gray-900 truncate" role="none">
                                        user@gmail.com
                                    </p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Menu</a>
                                    </li>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
