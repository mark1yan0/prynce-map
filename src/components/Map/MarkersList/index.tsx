import { Marker } from 'react-leaflet';
import useSelectedContext from '../../../Contexts/SelectedContext';
import { getMarkerPos } from '../../../lib/helpers';
import useMapPosts from '../../../hooks/useMapPosts';

const MarkersList = () => {
  const { isLoading, isError, data } = useMapPosts();
  const { handleSelectedPost } = useSelectedContext();

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
            click: () => handleSelectedPost(item, true),
          }}
        />
      ))}
    </>
  );
};
export default MarkersList;
