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
      className={`h-full w-full p-2 ${
        isSelected() ? 'bg-black' : 'bg-white'
      } rounded-md border border-stone-200 shadow-sm text-left cursor-pointer transition-all hover:${
        isSelected() ? 'bg-gray-900' : 'bg-gray-100'
      }`}
      onClick={() => zoomOnMarker(item)}
    >
      <h3
        className={`text-lg leading-5 font-semibold transition-all mb-0 ${
          isSelected() ? 'text-white' : 'text-black'
        }`}
      >
        {item.name}
      </h3>
      <p
        className={`transition-all ${
          isSelected() ? 'text-white' : 'text-black'
        }`}
      >
        {item.region}
      </p>
      <a
        href={item.link}
        target='_blank'
        rel='nofollow external noopener noreferrer'
        className={`transition-all ${
          isSelected() ? 'text-white' : 'text-blue-300'
        }`}
      >
        {item.address}
      </a>
    </article>
  );
};

export default Article;
