'use client';

import { GoogleMap } from '@react-google-maps/api';
import { useRef, useEffect } from 'react';

const defaultMapContainerStyle = {
	width: '100%',
	height: '30vh',
	borderRadius: '15px',
};

const center = {
	lat: 43.607915618225846,
	lng: 1.4387099761088795,
};

const mapId = '1662f7b63c33ea22d43192b2';

const MapComponent = () => {
	const mapRef = useRef(null);

	const handleMapLoad = (map) => {
		mapRef.current = map;

		const loadMarker = async () => {
			const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

			new AdvancedMarkerElement({
				map: mapRef.current,
				position: center,
				title: 'Le Saint Correct',
			});
		};

		loadMarker();
	};

	return (
		<div className="w-full lg:h-1/2">
			<GoogleMap mapContainerStyle={defaultMapContainerStyle} center={center} zoom={15} options={{ mapId }} onLoad={handleMapLoad} />
		</div>
	);
};

export default MapComponent;
