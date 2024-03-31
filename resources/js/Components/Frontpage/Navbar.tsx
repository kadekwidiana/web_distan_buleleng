import { Link } from '@inertiajs/react'
import React from 'react'

export default function NavbarFrontpage() {
    return (
        <nav className="navbar-top border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <Link href="/" className="flex items-center space-x-1 sm:space-x-3 rtl:space-x-reverse">
                    <img src="https://distan.bulelengkab.go.id/public/assets/image/logo_buleleng_100.png" className="h-12"
                        alt="Logo" />
                    <div className="flex flex-col gap-0">
                        <span className="self-start text-xs sm:text-lg sm:font-medium dark:text-white">Sistem Informasi
                            Geografis</span>
                        <span className="self-start sm:text-2xl font-semibold dark:text-white">Dinas
                            Pertanian Kab. Buleleng</span>
                    </div>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul
                        className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                        <li>
                            <Link href="/" className={`block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 ${route().current('landing-page') && 'underline underline-offset-4 font-semibold'}`}
                                aria-current="page">Beranda</Link>
                        </li>
                        <li>
                            <Link href="/maps" className={`block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 ${route().current('maps-frontpage') && 'underline underline-offset-4 font-semibold'}`}
                                aria-current="page">Peta Geografis</Link>
                        </li>
                        <li>
                            <Link href="#" className={`block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0`}
                                aria-current="page">Tentang Kami</Link>
                        </li>
                        <li>
                            <Link href="#" className={`block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0`}
                                aria-current="page">Informasi<i className="ml-1 fa-solid fa-chevron-down"></i></Link>
                        </li>
                        <li>
                            <Link href="/login" className={`block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0`}
                                aria-current="page">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
