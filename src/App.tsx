import { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { IMapItem } from './lib/interfaces';
import { mockItems } from './lib/mock';
import config from './lib/config/index';
import { useState } from 'react';
import Carousel from './lib/components/Carousel';
import CarouselItem from './lib/components/Carousel/CarouselItem';

function App() {
  return (
    <div className='relative w-[1000px] max-w-[1300px] h-screen max-h-screen grid place-items-center'>
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

function getMarkerPos(item: IMapItem): LatLngExpression {
  return [item.lat, item.lon];
}

const MapCarousel = () => {
  return (
    <div className='absolute bottom-3 left-1 z-[1000]'>
      <Carousel
        items={mockItems}
        renderItems={(item, index) => (
          <CarouselItem key={item.name} currentIndex={index}>
            <article className='h-full w-52 p-2 bg-white rounded-md border border-stone-400 text-left cursor-pointer'>
              <h1 className='text-black text-lg leading-5 font-semibold'>
                {item.name}
              </h1>
              <p className='text-black'>{item.region}</p>
              <a
                href={item.link}
                target='_blank'
                rel='nofollow external noopener noreferrer'
              >
                {item.address}
              </a>
            </article>
          </CarouselItem>
        )}
      />
    </div>
  );
};
