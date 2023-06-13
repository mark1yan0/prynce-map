import { Marker } from 'react-leaflet';
import useSelectedContext from '../../../Contexts/SelectedContext';
import { getMarkerPos } from '../../../lib/helpers';
import useMapPosts from '../../../hooks/useMapPosts';

const MarkersList = () => {
  const { isLoading, isError, data } = useMapPosts();
  const { zoomOnMarker } = useSelectedContext();

  if (isLoading) {
    return null;
  }

  if (isError) {
    return null;
  }

  return (
    <>
      {data?.map(item => (
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
