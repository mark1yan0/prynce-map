import React from 'react';

const CarouselButton: React.FC<{
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'next' | 'prev';
}> = ({ onClick, type }) => {
  return (
    <button
      className={`absolute -top-8 px-2 py-1 ${
        type === 'next' ? 'left-10' : 'left-0'
      }`}
      onClick={onClick}
    >
      {type === 'next' ? <ChevronNextIcon /> : <ChevronPrevIcon />}
    </button>
  );
};

export default CarouselButton;

const ChevronNextIcon = () => {
  return (
    <svg width='20' height='20' style={{ transform: 'scale(1.2)' }}>
      <path d='M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z' />
    </svg>
  );
};

const ChevronPrevIcon = () => {
  return (
    <svg
      width='20'
      height='20'
      style={{ transform: 'rotate(-180deg) scale(1.2)' }}
    >
      <path d='M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z' />
    </svg>
  );
};
