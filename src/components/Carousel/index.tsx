import { useState } from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import { IMapItem } from '../../lib/interfaces';
import CarouselButton from './Button';
import CarouselItem from './CarouselItem';

const Carousel: React.FC<{
  items: IMapItem[];
  renderItems: (item: IMapItem) => React.ReactElement;
}> = ({ items, renderItems }) => {
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

  return (
    <div className='relative'>
      <div
        className='grid overflow-hidden min-w-full gap-2 relative'
        style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}
      >
        {items.map(item => (
          <CarouselItem currentIndex={currentIndex} key={item.name}>
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
