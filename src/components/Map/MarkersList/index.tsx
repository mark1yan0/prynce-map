import { Marker } from 'react-leaflet';
import useSelectedContext from '../../../Contexts/SelectedContext';
import { getMarkerPos } from '../../../lib/helpers';
import { mockItems } from '../../../lib/mock';

const MarkersList = () => {
  const { zoomOnMarker } = useSelectedContext();

  return (
    <>
      {mockItems.map(item => (
        <Marker
          position={getMarkerPos(item)}
          key={item.name}
          eventHandlers={{
            click: () => zoomOnMarker(item),
          }}
        />
      ))}
    </>
  );
};
export default MarkersList;
