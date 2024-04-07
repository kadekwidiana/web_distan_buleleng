const SidebarBasemap = () => {
    return (
        <div className="sidebar-basemap bg-gray-50 mt-0" id="sidebar-basemap">
            <h5 className="text-center">Basemap</h5>
            <div className="border mb-2"></div>
            <div className="flex-row">
                <div className="columns-2">
                    <div className="basemap-options">
                        <label htmlFor="">
                            <div className="">
                                <img src="/src/assets/icons/icon-basemap/openstreetmap_blackandwhite.png"
                                    alt="OpenStreetMap" className="w-32 h-28 object-cover border rounded-md border-gray-400" />
                                <input className="form-check-input" type="radio" name="basemap" value="openStreetMap" />
                                OSM
                            </div>
                        </label>
                        <label htmlFor="">
                            <div className="">
                                <img src="/src/assets/icons/icon-basemap/google-streets.png" alt="GoogleStreetMap"
                                    className="w-32 h-28 object-cover border rounded-md border-gray-400" />
                                <input className="form-check-input" type="radio" name="basemap" value="googleStreetMap" defaultChecked />
                                Street
                            </div>
                        </label>

                    </div>
                </div>

                <div className="columns-2">
                    <div className="basemap-options">
                        <label htmlFor="">
                            <div>
                                <img src="/src/assets/icons/icon-basemap/here_satelliteday.png" alt="Satellite "
                                    className="w-32 h-28 object-cover border rounded-md border-gray-400" />
                                <input className="form-check-input" type="radio" name="basemap" value="satelliteMap" />
                                Satelite
                            </div>
                        </label>
                        <label htmlFor="">
                            <div>
                                <img src="/src/assets/icons/icon-basemap/google-hibrid.png" alt="Satellite "
                                    className="w-32 h-28 object-cover border rounded-md border-gray-400" />
                                <input className="form-check-input" type="radio" name="basemap" value="googleHibridMap" />
                                Hibrid
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex-row">
                <div className="columns-2">
                    <div className="basemap-options">
                        <label htmlFor="">
                            <div>
                                <img src="/src/assets/icons/icon-basemap/esri-street.png" alt="Esri"
                                    className="w-32 h-28 object-cover border rounded-md border-gray-400" />
                                <input className="form-check-input" type="radio" name="basemap" value="esriWorldStreetMap" />
                                Esri Street
                            </div>
                        </label>
                        <label htmlFor="">
                            <div>
                                <img src="/src/assets/icons/icon-basemap/topo-map.png" alt="OpenTopoMap"
                                    className="w-32 h-28 object-cover border rounded-md border-gray-400" />
                                <input className="form-check-input" type="radio" name="basemap" value="openTopoMap" />
                                TopoMap
                            </div>
                        </label>
                    </div>
                </div>

                <div className="columns-2">
                    <div className="basemap-options">
                        <label htmlFor="">
                            <div>
                                <img src="/src/assets/icons/icon-basemap/esri-satelite.png" alt="Esri "
                                    className="w-32 h-28 object-cover border rounded-md border-gray-400" />
                                <input className="form-check-input" type="radio" name="basemap" value="esriSatelite" />
                                Esri Satelite
                            </div>
                        </label>
                        <label htmlFor="">
                            <div>
                                <img src="/src/assets/icons/icon-basemap/google-earth.png" alt="Thunderforest "
                                    className="w-32 h-28 object-cover border rounded-md border-gray-400" />
                                <input className="form-check-input" type="radio" name="basemap" value="googleEarth" />
                                Earth
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SidebarLayer = () => {
    return (
        <div className="sidebar-layer bg-white mt-0 pb-5" id="sidebar-layer">
            <h5 className="text-center">Layer</h5>
            <div className="border"></div>
            <div className="mt-4">
                <div className="border rounded">
                    {/* <!-- <div className="border-top"></div> --> */}
                    <p className="bg-secondary p-2 m-0 rounded-top fw-bold">Administrasi</p>
                    <div className="p-2">
                        <div className="form-check">
                            <input name="batas-kabupaten"
                                className="mr-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-0"
                                type="checkbox" value="" id="batas-kabupaten" data-layer="batas-kabupaten" />
                            <label className="form-check-label" htmlFor="batas-kabupaten">
                                Batas Kabupaten (null)
                            </label>
                        </div>
                        <div className="form-check">
                            <input name="batas-kecamatan"
                                className="mr-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-0"
                                type="checkbox" value="" id="batas-kecamatan" data-layer="batas-kecamatan" />
                            <label className="form-check-label" htmlFor="batas-kecamatan">
                                Batas Kecamatan
                            </label>
                        </div>
                        <div className="form-check">
                            <input name="batas-desa"
                                className="mr-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-0"
                                type="checkbox" value="" id="batas-desa" data-layer="batas-desa" />
                            <label className="form-check-label" htmlFor="batas-desa">
                                Batas Desa (null)
                            </label>
                        </div>
                    </div>

                    {/* <!-- Tambahkan item lain di sini --> */}
                </div>
                <div className="border rounded mt-4">
                    {/* <!-- <div className="border-top"></div> --> */}
                    <p className="bg-secondary p-2 m-0 rounded-top fw-bold">Pertanian</p>
                    <div className="p-2">
                        <div className="form-check">
                            <input name="kelompok-tani"
                                className="mr-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-0"
                                type="checkbox" value="" id="kelompok-tani" data-layer="kelompok-tani" />
                            <label className="form-check-label" htmlFor="kelompok-tani">
                                Kelompok Tani
                            </label>
                        </div>
                        <div className="form-check">
                            <input name="subak"
                                className="mr-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-0"
                                type="checkbox" value="" id="subak" data-layer="subak" />
                            <label className="form-check-label" htmlFor="subak">
                                Subak (null)
                            </label>
                        </div>
                        <div className="form-check">
                            <input name="layer_onther"
                                className="mr-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-0"
                                type="checkbox" value="" id="layer_onther" data-layer="layer_onther" />
                            <label className="form-check-label" htmlFor="layer_onther">
                                Layer Lainnya...
                            </label>
                        </div>

                    </div>

                    {/* <!-- Tambahkan item lain di sini --> */}
                </div>
            </div>

        </div>
    )
}

const SidebarLegend = () => {
    return (
        <div className="container sidebar-legend bg-white mt-0 pb-5" id="sidebar-legend">
            <h5 className="text-center">Legenda</h5>
            <div className="border mb-2"></div>
            <div className="col">
                <div className="border rounded mt-2">
                    {/* <!-- <div className="border-top"></div> --> */}
                    <p className="bg-secondary p-2 m-0 rounded-top fw-bold">Legenda Informasi Pertanian</p>
                    <div className="p-2">
                        <div className="flex justify-start gap-2">
                            <img className="rounded" src="/src/assets/icons/icon-marker/corn.png"
                                alt="" />
                            Jagung
                            {/* </label> */}
                        </div>
                        <div className="flex justify-start gap-2">
                            <img className="rounded" src="/src/assets/icons/icon-marker/paddy.png"
                                alt="" />
                            Padi
                            {/* </label> */}
                        </div>
                    </div>

                    {/* <!-- Tambahkan item lain di sini --> */}
                </div>
            </div>
        </div>
    )
}

const SidebarAnalisis = () => {
    return (
        <div className="container sidebar-analisis bg-white mt-0 pb-5" id="sidebar-analisis">
            <h5 className="text-center">Information</h5>
            <div className="border mb-2"></div>

        </div>
    )
}

export { SidebarBasemap, SidebarLayer, SidebarLegend, SidebarAnalisis };