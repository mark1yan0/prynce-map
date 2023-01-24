import { IReducerState } from '../../../lib/interfaces';
import Carousel from '../../Carousel';
import ErrorMessage from '../../ErrorMessage';
import Article from '../Article';

const MapCarousel = ({ state }: { state: IReducerState }) => {
  if (state.hasErrors) {
    return <ErrorMessage />;
  }

  return (
    <div className='absolute bottom-1 left-1 z-[1000]'>
      <Carousel
        items={state.data}
        loading={state.isLoading}
        renderItems={item => <Article item={item} />}
      />
    </div>
  );
};

export default MapCarousel;
