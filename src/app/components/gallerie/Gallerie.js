"use client";

import React, { useEffect, useState } from "react";

const GallerieInstagram = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInstagramPhotos = async () => {
            try {
                const res = await fetch("/api/instagram");
                if (!res.ok) {
                    throw new Error(`Erreur API : ${res.status}`);
                }
                const data = await res.json();
                console.log("Photos Instagram :", data);
                if (data.error) {
                    throw new Error(`Erreur API Instagram : ${data.error}`);
                }
                setPhotos(data.data); // Les médias sont dans la propriété "data"
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchInstagramPhotos();
    }, []);

    if (loading) return <p className="text-white">Chargement des photos...</p>;
    if (error) return <p className="text-red-500">Erreur : {error}</p>;

    return (
        <section className="flex flex-col bg-sombre items-center justify-center w-full bg-sombre p-12 gap-8">
            <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-gold text-3xl">Notre Galerie Instagram</h2>
                <p className="text-white text-center">Découvrez nos plats et notre ambiance sur Instagram !</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo) => (
                    <a key={photo.id} href={photo.permalink} target="_blank" rel="noopener noreferrer" className="group">
                        <img src={photo.media_type === "VIDEO" ? photo.thumbnail_url : photo.media_url} alt={photo.caption || "Photo Instagram"} className="w-full h-auto rounded-lg transform transition-transform duration-300 group-hover:scale-105" />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default GallerieInstagram;
