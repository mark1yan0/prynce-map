import { useState } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import { IMapItem } from '../../lib/interfaces';
import SkeletonLoader from '../Loaders/Skeleton';
import CarouselButton from './Button';
import CarouselItem from './CarouselItem';

interface ICarouselProps {
  items: IMapItem[];
  renderItems: (item: IMapItem) => React.ReactElement;
  loading: boolean;
}

const Carousel: React.FC<ICarouselProps> = ({
  items,
  renderItems,
  loading,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isMobile, isTablet } = useWindowWidth();

  const getCarouselOffset = () => {
    if (isMobile) return 1;

    if (isTablet) return 1;

    return 3;
  };

  const handleNext = () => {
    if (currentIndex >= items.length - 1) {
      return setCurrentIndex(0);
    }

    setCurrentIndex(prev => prev + getCarouselOffset());
  };

  const handlePrev = () => {
    if (currentIndex <= 0) {
      return setCurrentIndex(0);
    }

    setCurrentIndex(prev => prev - getCarouselOffset());
  };

  const loadingNum = isMobile ? 1 : isTablet ? 2 : 3;

  return (
    <div className='relative'>
      <div
        className='grid overflow-hidden min-w-full gap-2 relative'
        style={{
          gridTemplateColumns: `repeat(${
            loading ? loadingNum : items.length
          }, 1fr)`,
        }}
      >
        {loading &&
          Array(loadingNum)
            .fill(true)
            .map((_, index) => (
              <CarouselItem currentIndex={currentIndex} key={index}>
                <SkeletonLoader />
              </CarouselItem>
            ))}

        {!loading &&
          items.map(item => (
            <CarouselItem currentIndex={currentIndex} key={item.slug}>
              {renderItems(item)}
            </CarouselItem>
          ))}
      </div>
      <CarouselButton onClick={handlePrev} type='prev' />
      <CarouselButton onClick={handleNext} type='next' />
    </div>
  );
};

export default Carousel;
