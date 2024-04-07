import React, { useEffect } from 'react'
import useScriptMapsFrontpage from '@/utils/maps-frontpage/main-maps';
import { Head } from '@inertiajs/react';
import NavbarFrontpage from '@/Components/Navbars/NavbarFrontpage';
import { SidebarAnalisis, SidebarBasemap, SidebarLayer, SidebarLegend } from '@/Components/Sidebars/SidebarFrontpage';
import FrontpageLayout from '@/Layouts/FrontpageLayout';

export default function MapsPage() {
    useScriptMapsFrontpage();

    return (
        <>
            <Head title="Peta Geografis" />
            {/* Navbar component */}
            <FrontpageLayout>
                {/* <!-- Sidebar basemap --> */}
                <SidebarBasemap></SidebarBasemap>

                {/* <!-- Sidebar layer --> */}
                <SidebarLayer></SidebarLayer>

                {/* <!-- Sidebar legend --> */}
                <SidebarLegend></SidebarLegend>

                {/* <!-- Sidebar analisis --> */}
                <SidebarAnalisis></SidebarAnalisis>

                {/* // <div className=""></div> */}
                <div id="maps-frontpage" className='w-full h-[91vh] sm:h-[90vh] z-0'>
                    {/* Maps */}
                </div>
            </FrontpageLayout>
        </>
    )
}
