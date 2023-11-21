import React from "react";
import './map.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'; 
import abc from "../../images/icons/placeholder_684908.png"

const position = [28.598630, -81.295430]

const customIcon = new Icon({
  iconUrl: abc, // Replace with the path to your custom marker icon
  iconSize: [32, 32], // Adjust the size of the icon
  iconAnchor: [16, 32], // Adjust the anchor point of the icon
  popupAnchor: [0, -32], // Adjust the popup anchor point
});


export default function Map() {
    return (
<MapContainer center={position} zoom={13} scrollWheelZoom={false} className="map">

  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position} icon={customIcon}>
    
    <Popup>
      Open from 8 AM to 6PM <br /> We look foward to you vist 😁
    </Popup>
  </Marker>
</MapContainer>
    )
}