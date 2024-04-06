import { useEffect } from "react"
import useScriptSidebarMaps from "./Sidebar";
import useScriptDataMaps from "./DataMaps";

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

        useScriptDataMaps(map);

        useScriptSidebarMaps(map);

        // Navigasi bar control in left
        L.control.navbar().addTo(map);

        // Hash in URL
        const hash = new L.Hash(map);

        // Control skala in botomleft
        L.control.scale().addTo(map);
    }, [])
}

export default useScriptMapsFrontpage;