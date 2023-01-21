import { useState } from 'react';

const Carousel: React.FC<{
  items: any[];
  renderItems: (item: any, currentIndex: number) => React.ReactElement;
}> = ({ items, renderItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex === items.length - 1) {
      return setCurrentIndex(0);
    }

    setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(0);
    }

    setCurrentIndex(prev => prev - 1);
  };

  return (
    <div className='flex flex-nowrap overflow-hidden min-w-full gap-2 relative '>
      {items.map(item => renderItems(item, currentIndex))}

      <button
        className='absolute left-0 bottom-0 bg-red-400 p-3'
        onClick={handlePrev}
      >
        prev
      </button>
      <button
        className='absolute left-10 bottom-0 bg-red-400 p-3'
        onClick={handleNext}
      >
        next
      </button>
    </div>
  );
};

export default Carousel;
