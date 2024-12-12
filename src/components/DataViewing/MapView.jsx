import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Component to handle map view updates
function MapUpdater({ center }) {
    const map = useMap();   
    useEffect(() => {
        map.setView(center, map.getZoom());
    }, [center, map]);
    return null;
}

const MapView = ({ data }) => {
    const CountryCoordinates = [20.5937, 78.9629];

    // Get coordinates based on state name
    const center =data.coordinates && Object.values(data.coordinates) || CountryCoordinates;

    return (
        <div style={{ height: '400px', width: '100%', marginTop: '20px' }}>
            <MapContainer
                center={center}
                zoom={data.state === 'Countrywide' ? 6 : 10}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}>
                    <Popup>
                        <div>
                            <h3>{data.state}</h3>
                            <p>Total Cases: {data.totalCases.toLocaleString()}</p>
                            <p>Active Cases: {data.activeCases.toLocaleString()}</p>
                            <p>Recovered: {data.recovered.toLocaleString()}</p>
                            <p>Deaths: {data.deaths.toLocaleString()}</p>
                        </div>
                    </Popup>
                </Marker>
                <MapUpdater center={center} />
            </MapContainer>
        </div>
    );
};

export default MapView; 