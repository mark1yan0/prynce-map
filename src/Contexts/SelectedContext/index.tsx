import { createContext, useContext, useRef, useState } from 'react';
import { useMap } from 'react-leaflet';
import config from '../../lib/config';
import { getMarkerPos } from '../../lib/helpers';
import { IMapItem } from '../../lib/interfaces';
import useWindowWidth from '../../hooks/useWindowWidth';

interface Context {
  selected: null | IMapItem;
  setSelected: (item: IMapItem | null) => void;
  handleSelectedPost: (item: IMapItem, scrollList?: boolean) => void;
  sidebarListRef: React.Ref<HTMLElement>;
}

const SelectedContext = createContext<Context>({
  selected: null,
  setSelected: () => {},
  handleSelectedPost: () => {},
  sidebarListRef: null,
});

export const SelectedContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isMobile } = useWindowWidth();
  const sidebarListRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<null | IMapItem>(null);
  const map = useMap();

  const handleSelectedPost = (item: IMapItem, scrollList = false) => {
    setSelected(item);
    const [lat, lon] = getMarkerPos(item);
    const lonOffset = 0.05;

    const computedLon = isMobile ? lon : lon + lonOffset;
    map.flyTo([lat, computedLon], config.flyToZoom);

    if (!isMobile && scrollList && sidebarListRef.current) {
      const selectedNode = (
        Array.from(sidebarListRef.current.children) as HTMLElement[]
      ).find(n => n.dataset.slug === item.slug);

      if (selectedNode) {
        const selectedClientRect = selectedNode.getBoundingClientRect();
        sidebarListRef.current.scrollTo({
          top: selectedClientRect.top,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <SelectedContext.Provider
      value={{ selected, setSelected, handleSelectedPost, sidebarListRef }}
    >
      {children}
    </SelectedContext.Provider>
  );
};

const useSelectedContext = () => {
  return useContext(SelectedContext);
};

export default useSelectedContext;
