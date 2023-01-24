import React from 'react';
import useSelectedContext from '../../../Contexts/SelectedContext';
import { IMapItem } from '../../../lib/interfaces';

interface IArticleProps {
  item: IMapItem;
}

const Article: React.FC<IArticleProps> = ({ item }) => {
  const { selected, zoomOnMarker } = useSelectedContext();
  const isSelected = () => selected?.name === item.name;

  return (
    <article
      className='h-full w-full p-2 bg-white rounded-md border border-stone-200 shadow-sm text-left cursor-pointer transition-all hover:bg-gray-100'
      style={{ backgroundColor: isSelected() ? 'black' : undefined }}
      onClick={() => zoomOnMarker(item)}
    >
      <h3
        className='text-black text-lg leading-5 font-semibold transition-all'
        style={{ color: isSelected() ? 'white' : undefined }}
      >
        {item.name}
      </h3>
      <p
        className='text-black transition-all'
        style={{ color: isSelected() ? 'white' : undefined }}
      >
        {item.region}
      </p>
      <a
        href={item.link}
        target='_blank'
        rel='nofollow external noopener noreferrer'
        className='text-blue-400'
        style={{ color: isSelected() ? 'white' : undefined }}
      >
        {item.address}
      </a>
    </article>
  );
};

export default Article;
