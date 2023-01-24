import { Marker } from 'react-leaflet';
import useSelectedContext from '../../../Contexts/SelectedContext';
import { getMarkerPos } from '../../../lib/helpers';
import { IMapItem } from '../../../lib/interfaces';

const MarkersList = ({ data }: { data: IMapItem[] }) => {
  const { zoomOnMarker } = useSelectedContext();

  return (
    <>
      {data.map(item => (
        <Marker
          position={getMarkerPos(item)}
          key={item.slug}
          eventHandlers={{
            click: () => zoomOnMarker(item),
          }}
        />
      ))}
    </>
  );
};
export default MarkersList;
