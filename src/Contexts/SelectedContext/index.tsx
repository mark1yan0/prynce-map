import { createContext, useContext, useState } from 'react';
import { useMap } from 'react-leaflet';
import config from '../../lib/config';
import { getMarkerPos } from '../../lib/helpers';
import { IMapItem } from '../../lib/interfaces';

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
  const [selected, setSelected] = useState<null | IMapItem>(null);
  const map = useMap();

  const zoomOnMarker = (item: IMapItem) => {
    setSelected(item);
    map.flyTo(getMarkerPos(item), config.flyToZoom);
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
