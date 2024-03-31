import MultiSelect from '@/Components/Backpage/Forms/MultiSelect';
import BackpageLayout from '@/Layouts/BackpageLayout'
import { useScriptButtonClick, useScriptInputPPL } from '@/Utils/LoadScriptBackpage';
import { Head, Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react'

export default function InputPPLPage() {
    useScriptInputPPL();
    // useScriptButtonClick();

    const [selectedOption, setSelectedOption] = useState<string>('');
    const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);
    const dateNow = new Date().toISOString().split('T')[0];

    const changeTextColor = () => {
        setIsOptionSelected(true);
    };

    return (
        <BackpageLayout>
            <Head title="PPL" />
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">

                <div className="flex flex-col gap-9">
                    <div className="rounded-sm border border-stroke bg-white shadow-default p-2 px-6">
                        <h1 className='font-semibold text-2xl'>Input Data</h1>
                    </div>
                    {/* other div */}
                </div>
                <div className="flex flex-col gap-9">
                </div>
                <div className="flex flex-col gap-9">
                    <div className="rounded-sm border border-stroke bg-white shadow-default">
                        <div className="flex flex-col gap-5 p-6">
                            <div>
                                <div>
                                    <label className="mb-3 block text-black dark:text-white">
                                        Nama Pegawai
                                    </label>
                                    <input
                                        defaultValue={'Kadek (010101)'}
                                        type="text"
                                        placeholder="Masukan nama user"
                                        className="w-full rounded-md bg-white border border-gray-400 py-3 px-5 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* other div */}
                </div>
                <div className="flex flex-col gap-9">
                    <div className="rounded-sm border border-stroke bg-white shadow-default">
                        <div className="flex flex-col gap-5 p-6">
                            <div>
                                <div>
                                    <label className="mb-3 block text-black dark:text-white">
                                        Tanggal Input
                                    </label>
                                    <input
                                        defaultValue={dateNow}
                                        type="date"
                                        placeholder="Masukan nama user"
                                        className="w-full rounded-md bg-white border border-gray-400 py-3 px-5 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* other div */}
                </div>

                <div className="flex flex-col gap-9">
                    {/* <!-- Input Fields --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default">
                        <div className="border-b border-gray-300 border-stroke py-4 px-6 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Kewilayahan
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Kecamatan
                                </label>

                                <div className="relative z-20 bg-white dark:bg-form-input">
                                    <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2 text-gray-600">
                                        <i className="fa-solid fa-globe"></i>
                                    </span>

                                    <select
                                        // value=''
                                        // onChange={(e) => {
                                        //     setSelectedOption(e.target.value);
                                        //     changeTextColor();
                                        // }}
                                        className={`relative z-20 w-full appearance-none rounded-md bg-transparent py-3 px-12 bg-white border border-gray-400 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500 ${isOptionSelected ? 'text-black dark:text-white' : ''
                                            }`}
                                    >
                                        <option value="" className="text-body">
                                            -- Pilih Kecamatan --
                                        </option>
                                        <option value="Buleleng" className="text-body">
                                            Buleleng
                                        </option>
                                        <option value="Sukasada" className="text-body">
                                            Sukasada
                                        </option>
                                        <option value="Gerokgak" className="text-body">
                                            Gerokgak
                                        </option>
                                        <option value="Kubutambahan" className="text-body">
                                            Kubutambahan
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Kelurahan/Desa
                                </label>

                                <div className="relative z-20 bg-white dark:bg-form-input">
                                    <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2 text-gray-600">
                                        <i className="fa-solid fa-globe"></i>
                                    </span>

                                    <select
                                        // value=''
                                        // onChange={(e) => {
                                        //     setSelectedOption(e.target.value);
                                        //     changeTextColor();
                                        // }}
                                        className={`relative z-20 w-full appearance-none rounded-md bg-transparent py-3 px-12 bg-white border border-gray-400 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500 ${isOptionSelected ? 'text-black dark:text-white' : ''
                                            }`}
                                    >
                                        <option value="" className="text-body">
                                            -- Pilih Kelurahan/Desa --
                                        </option>
                                        <option value="Desa 1" className="text-body">
                                            Desa 1
                                        </option>
                                        <option value="Desa 2" className="text-body">
                                            Desa 2
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Gabungan Kelompok Tani
                                </label>

                                <div className="relative z-20 bg-white dark:bg-form-input">
                                    <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2 text-gray-600">
                                        <i className="fa-solid fa-users-viewfinder"></i>
                                    </span>

                                    <select
                                        // value=''
                                        // onChange={(e) => {
                                        //     setSelectedOption(e.target.value);
                                        //     changeTextColor();
                                        // }}
                                        className={`relative z-20 w-full appearance-none rounded-md bg-transparent py-3 px-12 bg-white border border-gray-400 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500 ${isOptionSelected ? 'text-black dark:text-white' : ''
                                            }`}
                                    >
                                        <option value="" className="text-body">
                                            -- Pilih Gabungan Kelompok Tani --
                                        </option>
                                        <option value="Gabungan Kelompok Tani 1" className="text-body">
                                            Gabungan Kelompok Tani 1
                                        </option>
                                        <option value="Gabungan Kelompok Tani 2" className="text-body">
                                            Gabungan Kelompok Tani 2
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Kelompok Tani
                                </label>

                                <div className="relative z-20 bg-white dark:bg-form-input">
                                    <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2 text-gray-600">
                                        <i className="fa-solid fa-users-rays"></i>
                                    </span>

                                    <select
                                        // value=''
                                        // onChange={(e) => {
                                        //     setSelectedOption(e.target.value);
                                        //     changeTextColor();
                                        // }}
                                        className={`relative z-20 w-full appearance-none rounded-md bg-transparent py-3 px-12 bg-white border border-gray-400 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500 ${isOptionSelected ? 'text-black dark:text-white' : ''
                                            }`}
                                    >
                                        <option value="" className="text-body">
                                            -- Pilih Kelompok Tani --
                                        </option>
                                        <option value="Kelompok Tani 1" className="text-body">
                                            Kelompok Tani 1
                                        </option>
                                        <option value="Kelompok Tani 2" className="text-body">
                                            Kelompok Tani 2
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Subak
                                </label>

                                <div className="relative z-20 bg-white dark:bg-form-input">
                                    <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2 text-gray-600">
                                        <i className="fa-solid fa-people-roof"></i>
                                    </span>

                                    <select
                                        // value=''
                                        // onChange={(e) => {
                                        //     setSelectedOption(e.target.value);
                                        //     changeTextColor();
                                        // }}
                                        className={`relative z-20 w-full appearance-none rounded-md bg-transparent py-3 px-12 bg-white border border-gray-400 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500 ${isOptionSelected ? 'text-black dark:text-white' : ''
                                            }`}
                                    >
                                        <option value="" className="text-body">
                                            -- Pilih Subak --
                                        </option>
                                        <option value="Subak 1" className="text-body">
                                            Subak 1
                                        </option>
                                        <option value="Subak 2" className="text-body">
                                            Subak 2
                                        </option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* other div */}
                </div>
                <div className="flex flex-col gap-9">
                    {/* <!-- Input Fields --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default">
                        <div className="border-b border-gray-300 border-stroke py-4 px-6 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Potensi Pertanian
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">
                            <MultiSelect id="multiSelect" title='Komoditi' optionDatas={['Kacang', 'Padi', 'Sayur']} />
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Jenis Lahan
                                </label>

                                <div className="relative z-20 bg-white dark:bg-form-input">
                                    <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2 text-gray-600">
                                        <i className="fa-solid fa-wheat-awn"></i>
                                    </span>

                                    <select
                                        // value=''
                                        // onChange={(e) => {
                                        //     setSelectedOption(e.target.value);
                                        //     changeTextColor();
                                        // }}
                                        className={`relative z-20 w-full appearance-none rounded-md bg-transparent py-3 px-12 bg-white border border-gray-400 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500 ${isOptionSelected ? 'text-black dark:text-white' : ''
                                            }`}
                                    >
                                        <option value="" className="text-body">
                                            -- Pilih Jenis Lahan --
                                        </option>
                                        <option value="Lahan Basah" className="text-body">
                                            Lahan Basah
                                        </option>
                                        <option value="Lahan Kering" className="text-body">
                                            Lahan Kering
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Jumlah Perkiraan Panen (.kg)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Cth. 100"
                                    className="w-full rounded-md bg-white border border-gray-400 py-3 px-5 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Waktu Rata" Panen (bulan/hari)
                                </label>
                                <input
                                    type="text"
                                    placeholder="Cth. 4 Bulan 15 Hari"
                                    className="w-full rounded-md bg-white border border-gray-400 py-3 px-5 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                    {/* other div */}
                </div>

                <div className="flex flex-col gap-9">
                    {/* <!-- File upload --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default">
                        <div className="border-b border-stroke py-4 px-6 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Data Lahan
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5 p-6">
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Kepemilikan
                                </label>
                                <input
                                    type="text"
                                    placeholder="Masukan nama pemilik"
                                    className="w-full rounded-md bg-white border border-gray-400 py-3 px-5 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Alamat/Lokasi
                                </label>
                                <input
                                    id='address'
                                    type="text"
                                    placeholder="Masukan Alamat/Lokasi"
                                    className="w-full rounded-md bg-white border border-gray-400 py-3 px-5 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            {/* <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Altitude/Kemiringan
                                </label>
                                <input
                                    id='altitude'
                                    type="text"
                                    placeholder="Masukan Alamat/Lokasi"
                                    className="w-full rounded-md bg-white border border-gray-400 py-3 px-5 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div> */}
                            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Koordinat Latitude
                                    </label>
                                    <input
                                        disabled
                                        id='latitude'
                                        type="text"
                                        placeholder="Latitude"
                                        className="w-full rounded-md bg-white border border-gray-400 py-3 px-5 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div className="w-full xl:w-1/2">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Koordinat Longitude
                                    </label>
                                    <input
                                        disabled
                                        id='longitude'
                                        type="text"
                                        placeholder="Longitude"
                                        className="w-full rounded-md bg-white border border-gray-400 py-3 px-5 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Area
                                </label>
                                <textarea
                                    disabled
                                    id='aoi'
                                    rows={2}
                                    placeholder="Area.."
                                    className="w-full rounded-md bg-white border border-gray-400 py-3 px-5 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500"
                                ></textarea>
                            </div>
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Luas Lahan (meter persegi)
                                </label>
                                <input
                                    id='wide'
                                    type="text"
                                    placeholder="Cth. 300"
                                    className="w-full rounded-md bg-white border border-gray-400 py-3 px-5 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Gambar
                                </label>
                                <input
                                    type="file"
                                    className="w-full cursor-pointer rounded-md bg-white border border-gray-400 py-2 px-5 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Catatan
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Catatan.."
                                    className="w-full rounded-md bg-white border border-gray-400 py-3 px-5 text-black transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter focus:outline-none focus-visible:outline-none focus:ring-blue-500 focus:border-blue-500"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    {/* other div */}
                </div>

                <div className="flex flex-col gap-9">
                    {/* <!-- File upload --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default">
                        <div className="border-b border-stroke py-4 px-6 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Penentuan data lahan dalam maps (draw on maps)
                            </h3>
                        </div>
                        <div className="w-full h-96">
                            {/* <button className='buttonClick' id='buttonClick'>Click</button> */}
                            <div id='pplMaps' className="w-full h-full z-30"></div>
                        </div>
                    </div>
                    {/* other div */}
                </div>

                <div className="">
                    <Link
                        href="/ppl"
                        className="inline-flex items-center justify-center rounded-md bg-red-500 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        Cancel
                    </Link>
                    <Link
                        href="#"
                        className="ml-2 inline-flex items-center justify-center rounded-md bg-blue-500 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        Simpan Data
                    </Link>
                </div>
                {/* <div className="flex justify-end">
                    <Link
                        href="#"
                        className="inline-flex items-center justify-center rounded-md bg-blue-500 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        Button
                    </Link>
                    <Link
                        href="#"
                        className="ml-2 inline-flex items-center justify-center rounded-md bg-blue-500 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        Button
                    </Link>
                </div> */}
            </div>
        </BackpageLayout>
    )
}
