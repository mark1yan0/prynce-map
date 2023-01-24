import { LatLng } from 'leaflet';
import React, { useState } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';
import useSelectedContext from '../../../../Contexts/SelectedContext';
import config from '../../../../lib/config';
import RircularLoader from '../../../Loaders/Circular';
import { CurrentLocationIcon } from '../../../SvgIcons';

const CurrentLocationButton: React.FC<{
  setMyPosition: (pos: LatLng) => void;
}> = ({ setMyPosition }) => {
  const { setSelected } = useSelectedContext();
  const [locating, setLocating] = useState(false);
  const map = useMap();

  useMapEvents({
    locationfound(e) {
      setLocating(false);
      setMyPosition(e.latlng);
      map.flyTo(e.latlng, config.flyToZoom);
      setSelected(null);
    },
  });

  const clickHandler = () => {
    map.locate();
    setLocating(true);
  };

  return (
    <button
      className='absolute top-20 left-[10px] z-[1000] bg-white border-2 rounded p-1'
      style={{ borderColor: 'rgba(0,0,0,0.3)' }}
      onClick={clickHandler}
    >
      {locating && <RircularLoader />}

      {!locating && <CurrentLocationIcon />}
    </button>
  );
};

export default CurrentLocationButton;
