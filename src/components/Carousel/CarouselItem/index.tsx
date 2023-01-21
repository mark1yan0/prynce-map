const CarouselItem: React.FC<{
  children: React.ReactNode;
  currentIndex: number;
}> = ({ children, currentIndex }) => {
  return (
    <div
      className='transition-transform w-60'
      style={{
        transform: `translate(calc(-${
          currentIndex * 100
        }% - 0.5rem * ${currentIndex}))`,
      }}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
