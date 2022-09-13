import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

function MyComponent() {
  const map = useMap();
  return null;
}

import L from "leaflet";

const MyIcon = L.icon({
  iconUrl: "../../images/icon-location.svg",
  iconSize: [48, 56],
  iconAnchor: [36, 36],
});

function Map({ data }: any) {
  return (
    <article className="TheMap">
      <MapContainer center={[data.location.lat, data.location.lng]} zoom={13}>
        <MyComponent />
      </MapContainer>
      <MapContainer
        id="map"
        center={[data.location.lat, data.location.lng]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[data.location.lat, data.location.lng]} icon={MyIcon}>
          <Popup>
            You are here <br /> broh
          </Popup>
        </Marker>
      </MapContainer>
    </article>
  );
}
export default Map;
