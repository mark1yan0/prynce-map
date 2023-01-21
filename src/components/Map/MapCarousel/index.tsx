import React, { useState } from 'react';
import { IMapItem } from '../../../lib/interfaces';
import { mockItems } from '../../../lib/mock';
import Carousel from '../../Carousel';
import Article from '../Article';

const MapCarousel = () => {
  const [selected, setSelected] = useState<null | IMapItem>(null);
  return (
    <div className='absolute bottom-1 left-1 z-[1000]'>
      <Carousel
        items={mockItems}
        renderItems={item => (
          <Article item={item} selected={selected} setSelected={setSelected} />
        )}
      />
    </div>
  );
};

export default MapCarousel;
