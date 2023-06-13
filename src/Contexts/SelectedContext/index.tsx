import { createContext, useContext, useState } from 'react';
import { useMap } from 'react-leaflet';
import config from '../../lib/config';
import { getMarkerPos } from '../../lib/helpers';
import { IMapItem } from '../../lib/interfaces';
import useWindowWidth from '../../hooks/useWindowWidth';

interface Context {
  selected: null | IMapItem;
  setSelected: (item: IMapItem | null) => void;
  zoomOnMarker: (item: IMapItem) => void;
}

const SelectedContext = createContext<Context>({
  selected: null,
  setSelected: () => {},
  zoomOnMarker: () => {},
});

export const SelectedContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isMobile } = useWindowWidth();
  const [selected, setSelected] = useState<null | IMapItem>(null);
  const map = useMap();

  const zoomOnMarker = (item: IMapItem) => {
    setSelected(item);
    const [lat, lon] = getMarkerPos(item);
    const lonOffset = 0.05;

    const computedLon = isMobile ? lon : lon + lonOffset;
    map.flyTo([lat, computedLon], config.flyToZoom);
  };

  return (
    <SelectedContext.Provider value={{ selected, setSelected, zoomOnMarker }}>
      {children}
    </SelectedContext.Provider>
  );
};

const useSelectedContext = () => {
  return useContext(SelectedContext);
};

export default useSelectedContext;
