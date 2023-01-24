import { IMapItem } from '../../../lib/interfaces';
import Carousel from '../../Carousel';
import Article from '../Article';

const MapCarousel = ({ data }: { data: IMapItem[] }) => {
  return (
    <div className='absolute bottom-1 left-1 z-[1000]'>
      <Carousel items={data} renderItems={item => <Article item={item} />} />
    </div>
  );
};

export default MapCarousel;
