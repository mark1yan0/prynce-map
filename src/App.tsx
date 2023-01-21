import { MapContainer, TileLayer } from 'react-leaflet';
import config from './lib/config/index';
import MapCarousel from './components/Map/MapCarousel';
import { SelectedContextProvider } from './Contexts/SelectedContext';
import MarkersList from './components/Map/MarkersList';

function App() {
  return (
    <div className='relative w-[1000px] max-w-[1300px] max-h-[90vh] h-[90vh] grid place-items-center'>
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
          <MarkersList />
          <MapCarousel />
        </SelectedContextProvider>
      </MapContainer>
    </div>
  );
}

export default App;
