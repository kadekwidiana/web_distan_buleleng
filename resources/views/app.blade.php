<!DOCTYPE html>
<html lang="{{ str_replace("_", "-", app()->getLocale()) }}">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="https://distan.bulelengkab.go.id/public/assets/image/logo_buleleng_100.png" type="image/gif"
      sizes="16x16">
    <title inertia>SIG Distan Kab. Buleleng</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    {{-- fontawesome --}}
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet" />
    {{-- flowbite --}}
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
    {{-- leaflet css --}}
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />
    <!-- jquery CDN-->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <!-- leaflet draw CSS-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css" />

    <!-- SAEARCH GEOCODER -->
    <link rel="stylesheet" href="{{ asset("/src/assets/css-leaflet/leaflet-control-geocoder.Geocoder.css") }}">
    <!-- NAVIGASI BAR -->
    <link rel="stylesheet" href="{{ asset("/src/assets/css-leaflet/Leaflet.NavBar.css") }}">
    {{-- <link rel="stylesheet" href="css/sidebar.css"> --}}

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(["resources/js/app.tsx", "resources/js/Pages/{$page["component"]}.tsx"])
    @inertiaHead
  </head>

  <body class="font-sans antialiased bg-slate-100">
    @inertia
  </body>
  {{-- flowbite --}}
  <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>

  <!-- Leaflet CDN JS -->
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
  <!-- Plugin leaflet draw JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js"></script>
  <!-- turf and axios -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Turf.js/6.5.0/turf.min.js"></script>
  <!-- SEEARCH FEATURE -->
  <script src="{{ asset("/src/assets/js-leaflet/leaflet-control-geocoder.Geocoder.js") }}"></script>
  <!-- HASH IN URL -->
  <script src="{{ asset("/src/assets/js-leaflet/leaflet-hash.js") }}"></script>
  <!-- NAVIGASI BAR -->
  <script src="{{ asset("/src/assets/js-leaflet/Leaflet.NavBar.js") }}"></script>

</html>
