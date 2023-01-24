import { Marker } from 'react-leaflet';
import useSelectedContext from '../../../Contexts/SelectedContext';
import { getMarkerPos } from '../../../lib/helpers';
import { IReducerState } from '../../../lib/interfaces';

const MarkersList = ({ state }: { state: IReducerState }) => {
  const { zoomOnMarker } = useSelectedContext();

  if (state.isLoading) {
    return null;
  }

  if (state.hasErrors) {
    return null;
  }

  return (
    <>
      {state.data.map(item => (
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
