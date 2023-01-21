import { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { IMapItem } from './lib/interfaces';
import { mockItems } from './lib/mock';
import config from './lib/config/index';

function App() {
  return (
    <div className='relative w-[1000px] max-w-[1300px] h-screen grid place-items-center'>
      <MapContainer center={config.center} zoom={5.5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {mockItems.map(item => (
          <Marker position={getMarkerPos(item)} key={item.name}>
            <Popup>
              <h1>{item.name}</h1>
              <p>{item.region}</p>
              <a
                href={item.link}
                target='_blank'
                rel='nofollow external noopener noreferrer'
              >
                {item.address}
              </a>
            </Popup>
          </Marker>
        ))}
        <div className='w-full absolute bottom-1 left-1 h-[20px] bg-blue-300 z-[1000]'>
          list
        </div>
      </MapContainer>
    </div>
  );
}

export default App;

function getMarkerPos(item: IMapItem): LatLngExpression {
  return [item.lat, item.lon];
}
