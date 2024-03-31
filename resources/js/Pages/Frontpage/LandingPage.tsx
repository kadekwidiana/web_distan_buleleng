import NavbarFrontpage from '@/Components/Frontpage/Navbar'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function LandingPage() {
    return (
        <>
            <Head title="Beranda" />
            <NavbarFrontpage></NavbarFrontpage>
            <section className="mt-12">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl">Selamat Datang Di Sistem Informasi Geografis Dinas Pertanian Kabupaten Buleleng</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum commodi totam ipsa inventore aperiam adipisci odit, aliquam quae excepturi earum quod! Expedita nemo iste consectetur quam numquam explicabo odit quasi ad asperiores! Accusamus, debitis non?</p>
                    <div className="flex flex-col gap-2 space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link href="/maps" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-3xl bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-blue-300">
                            Lihat Peta Geografis
                            <i className="ml-2 fa-solid fa-map-location-dot"></i>
                        </Link>
                        <Link href="/login" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-3xl bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300">
                            Login User
                            <i className="ml-2 fa-solid fa-right-to-bracket"></i>
                        </Link>
                    </div>
                    <div className="mt-10 flex flex-col gap-6 space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <img src="https://distan.bulelengkab.go.id/public/assets/image/logo_buleleng_100.png" className="w-24"
                            alt="Logo" />
                        <img src="https://distan.bulelengkab.go.id/public/assets/image/logo_buleleng_100.png" className="w-24"
                            alt="Logo" />
                    </div>
                </div>
            </section>
        </>
    )
}
