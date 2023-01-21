import { LatLng } from 'leaflet';
import React from 'react';
import { Marker, Popup } from 'react-leaflet';

const LocationMarker: React.FC<{
  myPosition: LatLng | null;
}> = ({ myPosition }) => {
  if (!myPosition) {
    return null;
  }

  return (
    <Marker position={myPosition}>
      <Popup>La tua posizione</Popup>
    </Marker>
  );
};

export default LocationMarker;
