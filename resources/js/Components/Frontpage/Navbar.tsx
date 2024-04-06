import { Link } from '@inertiajs/react'
import React from 'react'

export default function NavbarFrontpage() {
    return (
        <nav className="navbar-top border-gray-200  sm:px-6 lg:px-2">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <Link href="/" className="flex items-center space-x-1 sm:space-x-3 rtl:space-x-reverse">
                    <img src="https://distan.bulelengkab.go.id/public/assets/image/logo_buleleng_100.png" className="h-12"
                        alt="Logo" />
                    <div className="flex flex-col gap-0">
                        <span className="self-start text-xs sm:text-lg sm:font-medium">Sistem Informasi
                            Geografis</span>
                        <span className="self-start sm:text-2xl font-semibold">Dinas
                            Pertanian Kab. Buleleng</span>
                    </div>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button"
                    className="inline-flex items-center p-1 w-8 h-8 justify-center rounded-lg lg:hidden focus:outline-none focus:ring-1 focus:ring-gray-300"
                    aria-controls="navbar-default" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </button>
                <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
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
