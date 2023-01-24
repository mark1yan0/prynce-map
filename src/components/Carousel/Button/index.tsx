import React from 'react';
import { ChevronNextIcon, ChevronPrevIcon } from '../../SvgIcons';

const CarouselButton: React.FC<{
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'next' | 'prev';
}> = ({ onClick, type }) => {
  return (
    <button
      className={`absolute -top-8 px-2 py-1 bg-transparent ${
        type === 'next' ? 'left-10' : 'left-0'
      }`}
      onClick={onClick}
    >
      {type === 'next' ? <ChevronNextIcon /> : <ChevronPrevIcon />}
    </button>
  );
};

export default CarouselButton;
