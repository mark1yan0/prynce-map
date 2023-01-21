import { mockItems } from '../../../lib/mock';
import Carousel from '../../Carousel';
import Article from '../Article';

const MapCarousel = () => {
  return (
    <div className='absolute bottom-1 left-1 z-[1000]'>
      <Carousel
        items={mockItems}
        renderItems={item => <Article item={item} />}
      />
    </div>
  );
};

export default MapCarousel;
