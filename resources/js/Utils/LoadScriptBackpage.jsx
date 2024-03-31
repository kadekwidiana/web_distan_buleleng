import { useEffect } from "react"

const useScriptInputPPL = () => {
    useEffect(() => {

        // Maps Leaflet
        // List Basemap
        const openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '©OpenStreetMap Contributors',
        });

        const satelliteMap = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            attribution: '©Google Satellite Map',
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            maxZoom: 20
        });

        const googleHibridMap = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}', {
            attribution: '©Google Hybrid Map',
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            maxZoom: 20
        });

        const googleTerrain = L.tileLayer('https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            attribution: '©Google Terrain'
        });

        const googleTraffic = L.tileLayer('http://{s}.google.com/vt/lyrs=m,traffic&hl=en&x={x}&y={y}&z={z}&s=Ga', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            attribution: '©Google Traffic'
        });


        // INIT MAP
        // Initialize the map with the default basemap
        const coorBali = [-8.198517680287658, 115.10051848149178];

        const map = L.map('pplMaps', {
            layers: [openStreetMap],
            center: coorBali,
            zoom: 10,
            // minZoom: ,
            zoomControl: false
        });

        const baseMaps = {
            "OpenStreetMap": openStreetMap,
            "Google Satelite": satelliteMap,
            "Google Hibrid": googleHibridMap,
            "Google Terrain": googleTerrain,
            "Google Traffic": googleTraffic,
        };

        const layerControl = L.control.layers(baseMaps).addTo(map);

        // Custom zoom control
        const customZoomControl = L.control.zoom({
            position: 'bottomright'
        });
        // Add the custom zoom control to the map
        map.addControl(customZoomControl);

        // get altitude
        function getAltitude(lat, lng) {
            $.ajax({
                url: `https://api.opentopodata.org/v1/srtm90m?locations=${lat},${lng}`,
                method: 'GET',
                dataType: 'json',
                success: function (response) {
                    const altitude = response.display_name;
                    $('#altitude').val(altitude);
                },
                error: function (error) {
                    console.error(error);
                }
            });

            // $.ajax({
            //     url: '/get-altitude',
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'X-CSRF-TOKEN': '{{ csrf_token() }}',
            //     },
            //     data: JSON.stringify({
            //         latitude: lat,
            //         longitude: lng,
            //     }),
            //     dataType: 'json',
            //     success: function(data) {
            //         $('#altitude').val(data.altitude)
            //         // console.log('Altitude:', data.altitude);
            //     },
            //     error: function(error) {
            //         console.error('Error:', error);
            //     }
            // });
        }

        // get address
        function getAddress(lat, lng) {
            $.ajax({
                url: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
                method: 'GET',
                dataType: 'json',
                success: function (response) {
                    const address = response.display_name;
                    $('#address').val(address);
                },
                error: function (error) {
                    console.error(error);
                }
            });

            // USE THIS IF PROBLEM CROSS ORIGIN
            // $.ajax({
            //     url: '/get-address',
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'X-CSRF-TOKEN': '{{ csrf_token() }}',
            //     },
            //     data: JSON.stringify({
            //         latitude: lat,
            //         longitude: lng,
            //     }),
            //     dataType: 'json',
            //     success: function(data) {
            //         $('#address').val(data.address);
            //         console.log(data);
            //         // console.log('Altitude:', data.altitude);
            //     },
            //     error: function(error) {
            //         console.error('Error:', error);
            //     }
            // });
        }

        // Layer draw
        const drawnItems = new L.FeatureGroup(); //For save the elemen in draw
        map.addLayer(drawnItems); //Added fitur grup to maps
        const drawControl = new L.Control.Draw({
            position: 'topleft',
            draw: {
                polygon: {
                    shapeOptions: {
                        color: 'green', // Color border polygon
                        fillColor: 'rgba(0, 0, 0, 0.5)' // Fill color blue tranparant
                    },
                    allowIntersection: false,
                    drawError: {
                        color: 'orange',
                        timeout: 1000 //= 1 second
                    },
                    showArea: true, //Show polygon area when draw
                    metric: false,
                    repeatMode: true
                },
                // Fitur non aktif
                polyline: false,
                circlemarker: false, //circlemarker type has been disabled.
                rect: false,
                circle: false,
                rectangle: false
            },
            edit: {
                featureGroup: drawnItems
            }
        });
        map.addControl(drawControl); //Add to map

        // Create data geojson when draw element
        map.on('draw:created', function (e) {
            const type = e.layerType,
                layer = e.layer;
            // Remove only elements of the appropriate type
            if (type === 'marker') {
                drawnItems.eachLayer(function (existingLayer) {
                    if (existingLayer instanceof L.Marker) {
                        drawnItems.removeLayer(existingLayer);
                    }
                });
            } else if (type === 'polygon') {
                drawnItems.eachLayer(function (existingLayer) {
                    if (existingLayer instanceof L.Polygon) {
                        drawnItems.removeLayer(existingLayer);
                    }
                });
            }
            // Add new elements draw
            drawnItems.addLayer(layer);

            // Condition type marker
            if (type === 'marker') {
                // Take coordinate from draw element
                const coordinates = layer.getLatLng();
                const lat = coordinates.lat;
                const lng = coordinates.lng;

                // call the func getAltitude & getAddress
                // getAltitude(lat, lng);
                getAddress(lat, lng);

                $('#latitude').val(lat);
                $('#longitude').val(lng);
            }
            // Condition type polygon
            if (type == 'polygon') {
                // Take coordinate from draw element on JSON format
                const aoi = layer.toGeoJSON().geometry;
                $('#aoi').val(JSON.stringify(aoi));

                //Calculate and display the wide area
                const area = turf.area(layer.toGeoJSON());
                $('#wide').val(area.toFixed(2));
            }
        });

        // Edit data geojson
        map.on('draw:edited', function (e) {
            const editedLayers = e.layers;
            editedLayers.eachLayer(function (layer) {
                const type = layer instanceof L.Marker ? 'marker' :
                    'polygon'; // Determine the edited shape type

                if (type === 'marker') {
                    // Extract coordinates from the layer options
                    const coordinates = layer.getLatLng();
                    const lat = coordinates.lat;
                    const lng = coordinates.lng;

                    // call the func getAltitude & getAddress
                    // getAltitude(lat, lng);
                    getAddress(lat, lng);

                    $('#latitude').val(lat);
                    $('#longitude').val(lng);
                }

                // Condition type polygon
                if (type == 'polygon') {
                    // Take coordinate from draw element on JSON format
                    const aoi = layer.toGeoJSON().geometry;
                    $('#aoi').val(JSON.stringify(aoi));

                    //Calculate and display the area
                    const area = turf.area(layer.toGeoJSON());
                    $('#wide').val(area.toFixed(2));
                }
            });
        });

        // Delete data geojson
        map.on('draw:deleted', function (e) {
            const deletedLayers = e.layers;
            deletedLayers.eachLayer(function (layer) {
                $('#latitude').val('');
                $('#longitude').val('');
                $('#altitude').val('');
                $('#address').val('');
                $('#aoi').val('');
                $('#wide').val('');
            });
        });
    }, [])
}

const useScriptButtonClick = () => {
    useEffect(() => {
        // Mengambil elemen tombol dengan ID 'buttonClick'
        const button = document.getElementById('buttonClick');

        // Menambahkan event listener untuk menangani klik pada tombol
        button.addEventListener('click', () => {
            // Menampilkan pesan di konsol ketika tombol diklik
            console.log('Tombol diklik!');
        });
    }, [])
}

export { useScriptInputPPL, useScriptButtonClick };