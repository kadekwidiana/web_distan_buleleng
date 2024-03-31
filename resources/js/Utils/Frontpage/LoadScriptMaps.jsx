import { useEffect } from "react"

const useScriptMapsFrontpage = () => {
    useEffect(() => {
        // BASEMAP
        const atributeName = '© SIG Distan Kab. Buleleng';
        let openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: atributeName,
        });

        let googleStreetMap = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
            attribution: atributeName,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            maxZoom: 20
        });

        let satelliteMap = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            attribution: atributeName,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            maxZoom: 20
        });

        let googleHibridMap = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}', {
            attribution: atributeName,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            maxZoom: 20
        });

        let openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',

        });
        let esriSatelite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '© <a href="https://www.esri.com">Esri</a>',
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            maxZoom: 20
        });
        let esriWorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
            attribution: '© <a href="https://www.esri.com">Esri</a>',
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            maxZoom: 20
        });
        let googleEarth = L.tileLayer('https://storage.googleapis.com/global-surface-water/tiles2021/transitions/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.thunderforest.com/maps/landscape/">Thunderforest</a>',
        });

        // INIT MAP
        // Initialize the map with the default basemap
        const coorBali = [-8.198517680287658, 115.10051848149178];

        let map = L.map('maps-frontpage', {
            layers: [googleStreetMap],
            center: coorBali,
            zoom: 10,
            minZoom: 5,
            zoomControl: false
        });


        // custom marker Baresoil
        let baresoilIcon = L.icon({
            iconUrl: 'assets/icons/icon-marker/baresoil.png',
            iconSize: [25, 32], // ukuran ikon
            iconAnchor: [16, 32], // anchor point pada ikon
            popupAnchor: [0, -32]
        });
        // custom marker Cassava
        let cassavaIcon = L.icon({
            iconUrl: 'assets/icons/icon-marker/cassava.png',
            iconSize: [25, 32], // ukuran ikon
            iconAnchor: [16, 32], // anchor point pada ikon
            popupAnchor: [0, -32]
        });

        // LAYER GROUP
        // const baresoil = L.layerGroup();
        const crop = L.layerGroup();
        const paddy = L.layerGroup();

        // Custom zoom control
        let customZoomControl = L.control.zoom({
            position: 'bottomright'  // Set the position to bottom right
        });
        // Add the custom zoom control to the map
        map.addControl(customZoomControl);


        // Fungsi untuk mengganti basemap
        function changeBasemap(newBasemap) {
            map.eachLayer(function (layer) {
                map.removeLayer(layer);
            });
            newBasemap.addTo(map);
        }

        // GET ELEMENT CONTROL BASEMAP
        // Event listener untuk pilihan basemap OpenStreetMap
        document.querySelector('input[value="openStreetMap"]').addEventListener('change', function () {
            changeBasemap(openStreetMap);
        });

        // Event listener untuk pilihan basemap GoogleStreet
        document.querySelector('input[value="googleStreetMap"]').addEventListener('change', function () {
            changeBasemap(googleStreetMap);
        });

        // Event listener untuk pilihan basemap Satellite
        document.querySelector('input[value="satelliteMap"]').addEventListener('change', function () {
            changeBasemap(satelliteMap);
        });

        // Event listener untuk pilihan basemap Hibrid
        document.querySelector('input[value="googleHibridMap"]').addEventListener('change', function () {
            changeBasemap(googleHibridMap);
        });

        // Event listener untuk pilihan basemap open topo
        document.querySelector('input[value="openTopoMap"]').addEventListener('change', function () {
            changeBasemap(openTopoMap);
        });
        // Event listener untuk pilihan basemap open topo
        document.querySelector('input[value="esriWorldStreetMap"]').addEventListener('change', function () {
            changeBasemap(esriWorldStreetMap);
        });
        // Event listener untuk pilihan basemap open topo
        document.querySelector('input[value="esriSatelite"]').addEventListener('change', function () {
            changeBasemap(esriSatelite);
        });
        // Event listener untuk pilihan basemap open topo
        document.querySelector('input[value="googleEarth"]').addEventListener('change', function () {
            changeBasemap(googleEarth);
        });

        // Memilih semua gambar basemap
        let basemapImages = document.querySelectorAll('.sidebar-basemap img');

        // Menambahkan event listener pada setiap gambar basemap
        basemapImages.forEach(function (image) {
            image.addEventListener('click', function () {
                let radio = this.closest('label').querySelector('input[type="radio"]');
                radio.checked = true;

                let selectedBasemap = radio.value;

                map.eachLayer(function (layer) {
                    map.removeLayer(layer);
                });

                switch (selectedBasemap) {
                    case 'openStreetMap':
                        openStreetMap.addTo(map);
                        break;
                    case 'googleStreetMap':
                        googleStreetMap.addTo(map);
                        break;
                    case 'satelliteMap':
                        satelliteMap.addTo(map);
                        break;
                    case 'googleHibridMap':
                        googleHibridMap.addTo(map);
                        break;
                    case 'openTopoMap':
                        openTopoMap.addTo(map);
                        break;
                    case 'esriWorldStreetMap':
                        esriWorldStreetMap.addTo(map);
                        break;
                    case 'esriSatelite':
                        esriSatelite.addTo(map);
                        break;
                    case 'googleEarth':
                        googleEarth.addTo(map);
                        break;
                    default:
                        break;
                }

            });
        });

        function onEachFeature(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.popupContent) {
                layer.bindPopup(feature.properties.popupContent);
            }
        }

        const bataKecamatan = L.layerGroup();
        const kelompokTani = L.layerGroup();

        // Event for checkbox
        function checkboxEventListener(checkboxId, layer) {
            document.getElementById(checkboxId).addEventListener("change", function () {
                if (this.checked) {
                    layer.addTo(map); // Dislay layer to map
                    // console.log("tes");
                } else {
                    layer.removeFrom(map); // Remove layer
                }
            });
        }

        checkboxEventListener("batas-kecamatan", bataKecamatan);
        checkboxEventListener("kelompok-tani", kelompokTani);

        // batas kecamatan
        const getDataBatasKec = async () => {
            try {
                const response = await fetch('/src/data-spasial/batas-kec-buleleng.geojson', {
                    method: 'GET'
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                L.geoJSON(data.features, {
                    style: function (feature) {
                        return {
                            color: 'black',
                            weight: 2,
                            opacity: 1
                        };
                    },
                    onEachFeature: onEachFeature
                }).addTo(bataKecamatan);
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        }
        getDataBatasKec();


        // kelompok tani
        const getDataKelompokTani = async () => {
            try {
                const response = await fetch('/src/data-spasial/kelompok-tani.geojson', {
                    method: 'GET'
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data.features[0].properties.name);

                L.geoJSON(data.features, {
                    onEachFeature: function (feature, layer) {
                        layer.bindPopup(`
                            <div class="w-32 popup-container">
                                <div class="md:pb-2">
                                    <div class="relative bg-dark dark:bg-black">
                                        <div class="flex items-center justify-between md:pt-2 md:pb-2 border-b rounded-t dark:border-gray-600">
                                            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                                                Data Kelompok Tani
                                            </h3>
                                        </div>
                                        <div class="space-y-4 overflow-y-auto">
                                            <div class="relative overflow-x-auto">
                                                <table class="w-full text-sm text-left rtl:text-right text-gray-600 dark:text-gray-400 table-fixed">
                                                    <tbody>
                                                        <tr class='border-b border-t'>
                                                            <td class='px-0 py-2 w-36'>Nama Kelompok Tani</td>
                                                            <td class='px-0 py-2'>: </td>
                                                            <td class='px-0 py-2'>${feature.properties.name}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `);
                    }
                }).addTo(kelompokTani);
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        };
        getDataKelompokTani();

        // SIDEBAR
        // get width sreen
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        // Determines the sidebar width based on the screen width
        let sidebarWidthLeft = 450;
        let sidebarWidthRight = 250;

        if (screenWidth <= 480) {
            // if width screen HP
            sidebarWidthLeft = 250;
            sidebarWidthRight = 200;
        }

        // START JS SIDEBAR RIGHT
        // Adjust the position control sidebar right
        function adjustPositionControlSidebarRight(sidebarClass) {
            const sidebarWidth = document.querySelector(sidebarClass + '.active') ? sidebarWidthRight : 0; // Adjust the width based on sidebar visibility

            // Set position control leaflet
            const controlContainersLeaflet = document.querySelectorAll('.leaflet-control-zoom, .leaflet-control-attribution');
            controlContainersLeaflet.forEach(function (controlContainerLeaflet) {
                controlContainerLeaflet.style.right = sidebarWidth + 'px';
            });

            // Set position control basemap, layer, legend, street view, legend GEE
            const controlContainers = document.querySelectorAll('.container-control-basemap, .container-control-layer, .container-control-legend,.container-control-street-view, .control-legend-gee');
            controlContainers.forEach(function (controlContainer) {
                controlContainer.style.right = sidebarWidth + 'px';
            });
        }
        // func close basemap sidebar
        function closeBasemapSidebar() {
            const basemapSidebar = document.getElementById("sidebar-basemap");
            if (basemapSidebar.classList.contains("active")) {
                basemapSidebar.classList.remove("active");
                adjustPositionControlSidebarRight('.sidebar-basemap'); // Call the function to adjust control positions
                const basemapButton = document.querySelector('.container-control-basemap button');
                basemapButton.classList.remove("active"); // Remove active class from the button
            }
        }

        // Function to close layer sidebar and adjust icons
        function closeLayerSidebar() {
            const layerSidebar = document.getElementById("sidebar-layer");
            if (layerSidebar.classList.contains("active")) {
                layerSidebar.classList.remove("active");
                adjustPositionControlSidebarRight('.sidebar-layer'); // Call the function to adjust control positions
                const layerButton = document.querySelector('.container-control-layer button');
                layerButton.classList.remove("active"); // Remove active class from the button
            }
        }

        // Function to close legend sidebar and adjust icons
        function closeLegendSidebar() {
            const layerSidebar = document.getElementById("sidebar-legend");
            if (layerSidebar.classList.contains("active")) {
                layerSidebar.classList.remove("active");
                adjustPositionControlSidebarRight('.sidebar-legend'); // Call the function to adjust control positions
                const layerButton = document.querySelector('.container-control-legend button');
                layerButton.classList.remove("active"); // Remove active class from the button
            }
        }

        // Control button basemaps
        const customControlBasemap = L.Control.extend({
            options: {
                position: 'topright'
            },

            onAdd: function () {
                const container = L.DomUtil.create('div', 'container-control-basemap');
                const button = L.DomUtil.create('button', 'button-control-basemap', container);
                const image = document.createElement('img');
                image.src = '/src/assets/icons/icon-control/icon-basemap.png';
                image.className = 'custom-image';
                button.appendChild(image);

                container.addEventListener("click", function () {
                    closeLayerSidebar(); // Close layer sidebar if open
                    closeLegendSidebar(); // Close layer sidebar if open
                    if (screenWidth <= 480) {
                        closeAnalisisSidebar();
                    }
                    document.getElementById("sidebar-basemap").classList.toggle("active");
                    adjustPositionControlSidebarRight('.sidebar-basemap'); // Call the function to adjust control positions
                    const basemapButton = document.querySelector('.container-control-basemap button');
                    basemapButton.classList.toggle("active"); // Toggle active class on the button
                });

                return container;
            }
        });
        // Add the custom button to the map
        map.addControl(new customControlBasemap());

        // Control button layer
        const customControlLayer = L.Control.extend({
            options: {
                position: 'topright'
            },

            onAdd: function () {
                const container = L.DomUtil.create('div', 'btn btn-light btn-outline-secondary container-control-layer');
                const button = L.DomUtil.create('button', 'button-control-layer', container);
                const image = document.createElement('img');
                image.src = '/src/assets/icons/icon-control/icon-layer.png';
                image.className = 'custom-image';
                button.appendChild(image);


                container.addEventListener("click", function () {
                    closeBasemapSidebar(); // Close basemap sidebar if open
                    closeLegendSidebar(); // Close basemap sidebar if open
                    if (screenWidth <= 480) {
                        closeAnalisisSidebar();
                    }
                    document.getElementById("sidebar-layer").classList.toggle("active");
                    adjustPositionControlSidebarRight('.sidebar-layer'); // Call the function to adjust control positions
                    const layerButton = document.querySelector('.container-control-layer button');
                    layerButton.classList.toggle("active"); // Toggle active class on the button
                });

                return container;
            }
        });
        // Add the custom button to the map
        map.addControl(new customControlLayer());

        // Control button legend
        const customControlLegend = L.Control.extend({
            options: {
                position: 'topright'
            },

            onAdd: function () {
                const container = L.DomUtil.create('div', 'btn btn-light btn-outline-secondary container-control-legend');
                const button = L.DomUtil.create('button', 'button-control-legend', container);
                const icon = L.DomUtil.create('i', 'fa-solid fa-list fa-xl');
                button.appendChild(icon);

                container.addEventListener("click", function () {
                    closeBasemapSidebar(); // Close basemap sidebar if open
                    closeLayerSidebar(); // Close basemap sidebar if open
                    if (screenWidth <= 480) {
                        closeAnalisisSidebar();
                    }
                    document.getElementById("sidebar-legend").classList.toggle("active");
                    adjustPositionControlSidebarRight('.sidebar-legend'); // Call the function to adjust control positions
                    const layerButton = document.querySelector('.container-control-legend button');
                    layerButton.classList.toggle("active"); // Toggle active class on the button
                });

                return container;
            }
        });
        // Add the custom button to the map
        map.addControl(new customControlLegend());

        // END SIDEBAR RIGTH

        // START SIDEBAR LEFT
        // Adjust the position control sidebar left
        function adjustPositionControlSidebarLeft(sidebarClass) {
            const sidebarWidth = document.querySelector(sidebarClass + '.active') ? sidebarWidthLeft : 0; // Adjust the width based on sidebar visibility

            // Set position control leaflet
            const controlContainersLeaflet = document.querySelectorAll('.leaflet-control-scale, .leaflet-control-geocoder, .leaflet-control-navbar, .leaflet-draw ');
            controlContainersLeaflet.forEach(function (controlContainerLeaflet) {
                controlContainerLeaflet.style.left = sidebarWidth + 'px';
            });

            // Set position control analisis
            const controlContainers = document.querySelectorAll('.container-control-analisis');
            controlContainers.forEach(function (controlContainer) {
                controlContainer.style.left = sidebarWidth + 'px';
            });
        }

        // Function to close basemap sidebar and adjust icons
        function closeAnalisisSidebar() {
            const basemapSidebar = document.getElementById("sidebar-analisis");
            if (basemapSidebar.classList.contains("active")) {
                basemapSidebar.classList.remove("active");
                adjustPositionControlSidebarLeft('.sidebar-analisis.active'); // Call the function to adjust control positions
                const basemapButton = document.querySelector('.container-control-analisis button');
                basemapButton.classList.remove("active"); // Remove active class from the button
            }
        }


        // Control button analisis
        const customControlAnalisis = L.Control.extend({
            options: {
                position: 'topleft'
            },

            onAdd: function () {
                const container = L.DomUtil.create('div', 'btn btn-light btn-outline-secondary container-control-analisis');
                const button = L.DomUtil.create('button', 'button-control-analisis', container);
                const icon = L.DomUtil.create('i', 'fa-solid fa-magnifying-glass-chart');
                button.appendChild(icon);

                container.addEventListener("click", function () {
                    if (screenWidth <= 480) {
                        closeBasemapSidebar();
                        closeLayerSidebar();
                        closeLegendSidebar();
                    }
                    document.getElementById("sidebar-analisis").classList.toggle("active");
                    adjustPositionControlSidebarLeft('.sidebar-analisis.active'); // Call the function to adjust control positions
                    const layerButton = document.querySelector('.container-control-analisis button');
                    layerButton.classList.toggle("active"); // Toggle active class on the button
                });

                return container;
            }
        });
        // Add the custom button to the map
        map.addControl(new customControlAnalisis());

        // Navigasi bar control in left
        L.control.navbar().addTo(map);

        // Hash in URL
        const hash = new L.Hash(map);

        // Control skala in botomleft
        L.control.scale().addTo(map);

    }, [])
}

export default useScriptMapsFrontpage;