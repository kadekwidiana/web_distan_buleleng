import { Link } from '@inertiajs/react'
import React, { useState } from 'react'

export default function Sidebar() {
    const [showDropdown, setShowDropdown] = useState(false);
    // console.log(showDropdown);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-50 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
                <div className="my-6 mx-2">
                    <Link href="/" className="text-gray-50 text-3xl font-semibold uppercase flex justify-start items-center">
                        <img src="https://distan.bulelengkab.go.id/public/assets/image/logo_buleleng_100.png" width={100} height={100} alt="Picture of the author" className='w-24' />
                    </Link>
                    <p className="mt-2 text-gray-50 font-semibold text-xl">Selamat Datang,</p>
                    <p className="text-gray-50 font-semibold text-xl">Di Dashboard</p>
                </div>
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link href="/dashboard" className={`flex items-center p-2 text-gray-50 rounded-sm hover:bg-gray-700 group ${route().current('index.dashboard') &&
                            'bg-gray-700'
                            }`}>
                            <i className="fa-solid fa-gauge"></i>
                            <span className="ms-3 text-gray-50">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <button onClick={toggleDropdown} type="button" className={`flex items-center w-full p-2 text-base text-gray-50 transition duration-75 rounded-sm hover:bg-gray-700 group ${route().current('index.ppl') ?
                            'bg-gray-700'
                            : route().current('input.ppl') && 'bg-gray-700'
                            }`} aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <i className="fa-solid fa-note-sticky"></i>
                            <span className="flex-1 ms-3 text-gray-50 text-left rtl:text-right whitespace-nowrap">PPL</span>
                            <i className={`fa-solid ${showDropdown ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        </button>
                        <ul id="dropdown-example" className={`${showDropdown ? '' : 'hidden'} py-2 space-y-2`}>
                            <li>
                                <Link href="/ppl" className={`flex items-center w-full p-2 text-gray-50 transition duration-75 pl-11 rounded-sm hover:bg-gray-700 group`}>Index</Link>
                            </li>
                            {/* <li>
                                <a href="#" className="flex items-center w-full p-2 text-gray-50 transition duration-75 pl-11 rounded-sm hover:bg-gray-700 group">Penyuluhan</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center w-full p-2 text-gray-50 transition duration-75 pl-11 rounded-sm hover:bg-gray-700 group">Kegiatan</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center w-full p-2 text-gray-50 transition duration-75 pl-11 rounded-sm hover:bg-gray-700 group">Laporan</a>
                            </li> */}
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
