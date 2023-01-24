import { LatLng } from 'leaflet';
import React, { useState } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';
import useSelectedContext from '../../../../Contexts/SelectedContext';
import config from '../../../../lib/config';
import RircularLoader from '../../../Loaders/Circular';

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
      style={{ borderColor: 'rgba(0,0,0,0.4)' }}
      onClick={clickHandler}
    >
      {locating && <RircularLoader />}

      {!locating && (
        <svg
          fill='#000000'
          height='22px'
          width='22px'
          version='1.1'
          viewBox='0 0 188.111 188.111'
        >
          <g>
            <path d='M94.052,0C42.19,0.001,0,42.194,0.001,94.055c0,51.862,42.191,94.056,94.051,94.057 c51.864-0.001,94.059-42.194,94.059-94.056C188.11,42.193,145.916,0,94.052,0z M94.052,173.111 c-43.589-0.001-79.051-35.465-79.051-79.057C15,50.464,50.462,15.001,94.052,15c43.593,0,79.059,35.464,79.059,79.056 C173.11,137.646,137.645,173.11,94.052,173.111z'></path>{' '}
            <path d='M94.053,50.851c-23.821,0.002-43.202,19.384-43.202,43.204c0,23.824,19.381,43.206,43.203,43.206 c23.823,0,43.205-19.382,43.205-43.205C137.259,70.232,117.877,50.851,94.053,50.851z M94.054,122.261 c-15.551,0-28.203-12.653-28.203-28.206c0-15.55,12.652-28.203,28.203-28.204c15.553,0,28.205,12.653,28.205,28.205 C122.259,109.608,109.606,122.261,94.054,122.261z'></path>{' '}
            <circle cx='94.055' cy='94.056' r='16.229'></circle>
          </g>
        </svg>
      )}
    </button>
  );
};

export default CurrentLocationButton;
