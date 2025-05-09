"use client";

import { useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places", "marker"];

export function MapProvider({ children }) {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
        libraries,
    });

    if (loadError) return <p>Erreur lors du chargement de Google Maps</p>;
    if (!isLoaded) return <p>Chargement de la carte...</p>;

    return children;
}
