import React, { useEffect, useMemo } from 'react';
import useSidebar from '../../Contexts/SidebarContext';
import { twMerge } from 'tailwind-merge';
import config from '../../lib/config';
import { CloseIcon } from '../SvgIcons';
import useMapPosts from '../../hooks/useMapPosts';
import ErrorMessage from '../ErrorMessage';
import SkeletonLoader from '../Loaders/Skeleton';
import useSelectedContext from '../../Contexts/SelectedContext';
import useWindowWidth from '../../hooks/useWindowWidth';
import { IMapItem } from '../../lib/interfaces';
import { useMap } from 'react-leaflet';

const Sidebar = () => {
  const { isOpened, closeSidebar } = useSidebar();
  const { isMobile } = useWindowWidth();
  const map = useMap();

  useEffect(() => {
    if (isMobile) {
      if (isOpened) {
        map.dragging.disable();
      } else {
        map.dragging.enable();
      }
    }
  }, [isOpened, isMobile]);

  return (
    <div
      className={twMerge(
        'absolute h-full w-full p-2 sm:w-80 bg-gray-50 right-0 transition-all cursor-default',
        isOpened ? 'translate-x-0' : 'translate-x-full'
      )}
      style={{
        zIndex: config.topZindex + 10,
      }}
    >
      <div className='flex items-center justify-between mb-2'>
        <h3 className='text-black text-xl text-left'>I nostri partner</h3>
        <button className='text-black bg-transparent' onClick={closeSidebar}>
          <CloseIcon />
        </button>
      </div>
      <MapPostsList />
    </div>
  );
};
export default Sidebar;

const MapPostsList = () => {
  const { isLoading, isError, data } = useMapPosts();
  const { sidebarListRef } = useSelectedContext();
  return (
    <section
      ref={sidebarListRef}
      className='flex flex-col pb-10 gap-2 h-full overflow-y-scroll'
    >
      {isLoading && (
        <>
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </>
      )}

      {isError && <ErrorMessage />}

      {data?.map(item => (
        <MapPost item={item} key={item.name} />
      ))}
    </section>
  );
};

const MapPost = ({ item }: { item: IMapItem }) => {
  const { selected, handleSelectedPost } = useSelectedContext();
  const { isMobile } = useWindowWidth();
  const { closeSidebar } = useSidebar();
  const isSelected = useMemo(
    () => selected?.name === item.name,
    [selected?.slug]
  );

  return (
    <article
      className={twMerge(
        'h-full w-full p-2 rounded-md border border-stone-200 shadow-sm text-left cursor-pointer transition-all',
        isSelected ? 'bg-black hover:bg-gray-900' : 'bg-white hover:bg-gray-100'
      )}
      data-slug={item.slug}
      onClick={() => {
        handleSelectedPost(item);
        if (isMobile) {
          closeSidebar();
        }
      }}
    >
      <h3
        className={`text-sm md:text-lg leading-5 font-semibold transition-all mb-0 ${
          isSelected ? 'text-white' : 'text-black'
        }`}
        dangerouslySetInnerHTML={{ __html: item.name }}
      ></h3>
      <p
        className={`transition-all ${isSelected ? 'text-white' : 'text-black'}`}
      >
        {item.region}
      </p>
      <a
        href={item.link}
        target='_blank'
        rel='nofollow external noopener noreferrer'
        className={`transition-all ${
          isSelected ? 'text-white' : 'text-blue-300'
        }`}
      >
        {item.address}
      </a>
    </article>
  );
};
