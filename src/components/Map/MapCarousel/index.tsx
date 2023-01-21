import React from 'react';
import { mockItems } from '../../../lib/mock';
import Carousel from '../../Carousel';

const MapCarousel = () => {
  return (
    <div className='absolute bottom-1 left-1 z-[1000]'>
      <Carousel
        items={mockItems}
        renderItems={item => (
          <article className='h-full w-full p-2 bg-white rounded-md border border-stone-400 text-left cursor-pointer'>
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
        )}
      />
    </div>
  );
};

export default MapCarousel;
