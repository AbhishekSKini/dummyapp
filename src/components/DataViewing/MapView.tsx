import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { CovidDataItem, Coordinates } from "../../types/type";
// Fix for default marker icon

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
// Props for MapUpdater
interface MapUpdaterProps {
  center: [number, number];
}
// Component to handle map view updates
const MapUpdater: React.FC<MapUpdaterProps> = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
};
// Props for the component
interface MapViewProps {
  data: CovidDataItem; // Accept an array or a single item
}
const MapView: React.FC<MapViewProps> = ({ data }) => {
  const CountryCoordinates: [number, number] = [20.5937, 78.9629];

  // Get coordinates based on state name
  const center: [number, number] = data.coordinates
    ? [data.coordinates.lat, data.coordinates.lng]
    : CountryCoordinates;

  return (
    <div className="h-[520px] w-full bg-white p-4 rounded-lg shadow-md mx-auto mt-2">
      <h1 className="text-gray-700 text-lg font-normal flex justify-center ">
        Map View of &nbsp;<span>{data.state}</span>&nbsp; for COVID-19
      </h1>
      <div className=" h-[440px] mt-5">
        <MapContainer
          center={center}
          zoom={data.state === "Countrywide" ? 6 : 10}
          className="h-full w-full"
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
    </div>
  );
};

export default MapView;
