import { MapContainer, TileLayer } from 'react-leaflet';
import config from './lib/config/index';
import MapCarousel from './components/Map/MapCarousel';
import { SelectedContextProvider } from './Contexts/SelectedContext';
import MarkersList from './components/Map/MarkersList';
import { useState } from 'react';
import { LatLng } from 'leaflet';
import CurrentLocationButton from './components/Map/CurrentLocation/Button';
import LocationMarker from './components/Map/CurrentLocation/Marker';
import useWindowWidth, { IBreakpoints } from './hooks/useWindowWidth';

function App() {
  const [myPosition, setMyPosition] = useState<LatLng | null>(null);
  const breakpoints = useWindowWidth();

  return (
    <MapContainer
      center={getResponsiveCenter(breakpoints)}
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

const getResponsiveCenter = (breakpoints: IBreakpoints) => {
  if (breakpoints.isMobile) return config.center.mobile;
  if (breakpoints.isTablet) return config.center.tablet;

  return config.center.desktop;
};
