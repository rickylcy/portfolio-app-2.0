import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../App.css";
import { Icon } from "leaflet";
import { connect } from "react-redux";

function Map({ lat, long }) {
  return (
    <MapContainer center={[lat, long]} zoom={12} scrollWheelZoom={true}>
      <Marker position={[lat, long]} onClick={() => {}} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
}

export default Map;
