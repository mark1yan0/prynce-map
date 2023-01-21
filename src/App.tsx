import { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { IMapItem } from './lib/interfaces';
import { mockItems } from './lib/mock';
import config from './lib/config/index';
import MapCarousel from './components/Map/MapCarousel';
import { getMarkerPos } from './lib/helpers';

function App() {
  return (
    <div className='relative w-[1000px] max-w-[1300px] max-h-[90vh] h-[90vh] grid place-items-center'>
      <MapContainer
        center={config.center}
        zoom={config.zoom}
        scrollWheelZoom={config.scrollWheelZoom}
      >
        <TileLayer attribution={config.attribution} url={config.mapUrl} />
        {mockItems.map(item => (
          <Marker position={getMarkerPos(item)} key={item.name} />
        ))}
        <MapCarousel />
      </MapContainer>
    </div>
  );
}

export default App;
