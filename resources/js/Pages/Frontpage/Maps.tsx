import React from 'react'
import useScriptMapsFrontpage from '@/Utils/Frontpage/LoadScriptMaps';
import useScriptSidebarMaps from '@/Utils/Frontpage/LoadScriptSidebarMaps';
import { Head, Link } from '@inertiajs/react';
import NavbarFrontpage from '@/Components/Frontpage/Navbar';
import { SidebarAnalisis, SidebarBasemap, SidebarLayer, SidebarLegend } from '@/Components/Frontpage/Sidebar';

export default function MapsPage() {
    useScriptMapsFrontpage();
    // useScriptSidebarMaps();

    return (
        <>
            <Head title="Peta Geografis" />
            {/* Navbar component */}
            <NavbarFrontpage></NavbarFrontpage>

            {/* <!-- Sidebar basemap --> */}
            <SidebarBasemap></SidebarBasemap>

            {/* <!-- Sidebar layer --> */}
            <SidebarLayer></SidebarLayer>

            {/* <!-- Sidebar legend --> */}
            <SidebarLegend></SidebarLegend>

            {/* <!-- Sidebar analisis --> */}
            <SidebarAnalisis></SidebarAnalisis>

            {/* // <div className=""></div> */}
            <div id="maps-frontpage" className='maps-container'
            >
                {/* Maps */}
            </div>
        </>
    )
}
