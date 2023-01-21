import { MapContainer, TileLayer } from 'react-leaflet';
import config from './lib/config/index';
import MapCarousel from './components/Map/MapCarousel';
import { SelectedContextProvider } from './Contexts/SelectedContext';
import MarkersList from './components/Map/MarkersList';
import { useState } from 'react';
import { LatLng } from 'leaflet';
import CurrentLocationButton from './components/Map/CurrentLocation/Button';
import LocationMarker from './components/Map/CurrentLocation/Marker';

function App() {
  const [myPosition, setMyPosition] = useState<LatLng | null>(null);
  return (
    <MapContainer
      center={config.center}
      zoom={config.zoom}
      scrollWheelZoom={config.scrollWheelZoom}
      markerZoomAnimation
      zoomAnimation
      fadeAnimation
    >
      <TileLayer attribution={config.attribution} url={config.mapUrl} />
      <SelectedContextProvider>
        <CurrentLocationButton setMyPosition={setMyPosition} />
        <MarkersList />
        <LocationMarker myPosition={myPosition} />
        <MapCarousel />
      </SelectedContextProvider>
    </MapContainer>
  );
}

export default App;
