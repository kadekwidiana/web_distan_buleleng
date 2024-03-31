import { useEffect } from "react"

const useScript = () => {
    useEffect(() => {
        
        // BASEMAP
        let openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© SIG Distan Kab. Buleleng',
        });

        // INIT MAP
        // Initialize the map with the default basemap
        const coorBali = [-8.198517680287658, 115.10051848149178];

        const map = L.map('pplMaps', {
            layers: [openStreetMap],
            center: coorBali,
            zoom: 10,
            minZoom: 5,
            zoomControl: false
        });
    }, [])
}

export default useScript;