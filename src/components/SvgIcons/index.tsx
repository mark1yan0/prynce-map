export const ChevronNextIcon = () => {
  return (
    <svg width='20' height='20' style={{ transform: 'scale(1.2)' }}>
      <path d='M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z' />
    </svg>
  );
};

export const ChevronPrevIcon = () => {
  return (
    <svg
      width='20'
      height='20'
      style={{ transform: 'rotate(-180deg) scale(1.2)' }}
    >
      <path d='M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z' />
    </svg>
  );
};

export const CurrentLocationIcon = () => {
  return (
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
  );
};

export const Circular = ({ className }: { className: string }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      width='22px'
      height='22px'
      fill='none'
      className={className}
    >
      <path
        d='M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612'
        stroke='#000000'
        strokeWidth='2'
        strokeLinecap='round'
      ></path>
    </svg>
  );
};