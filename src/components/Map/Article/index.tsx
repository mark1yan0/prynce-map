import React from 'react';
import { useMap } from 'react-leaflet';
import { getMarkerPos } from '../../../lib/helpers';
import { IMapItem } from '../../../lib/interfaces';

interface IArticleProps {
  item: IMapItem;
  selected: IMapItem | null;
  setSelected: (item: IMapItem) => void;
}

const Article: React.FC<IArticleProps> = ({ item, selected, setSelected }) => {
  const isSelected = () => selected?.name === item.name;

  const map = useMap();
  const zoomOnMarker = () => {
    setSelected(item);
    map.flyTo(getMarkerPos(item), 17);
  };

  return (
    <article
      className='h-full w-full p-2 bg-white rounded-md border border-stone-400 text-left cursor-pointer transition-all'
      style={{ backgroundColor: isSelected() ? 'black' : undefined }}
      onClick={zoomOnMarker}
    >
      <h1
        className='text-black text-lg leading-5 font-semibold transition-all'
        style={{ color: isSelected() ? 'white' : undefined }}
      >
        {item.name}
      </h1>
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
