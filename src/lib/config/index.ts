import { LatLngExpression } from 'leaflet';
import { isDev } from '../helpers';

const noLocalHostOrigin = isDev()
  ? 'https://www.staging19.prynce.it'
  : window.location.origin;

export default {
  center: {
    desktop: [44.30237, 11.012834] as LatLngExpression,
    tablet: [44.30237, 11.012834] as LatLngExpression,
    mobile: [44.30237, 10.012834] as LatLngExpression,
  },
  zoom: 5.5,
  flyToZoom: 12,
  scrollWheelZoom: false,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  mapUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  sources: {
    baseUrl: `${noLocalHostOrigin}/wp-json/wp`,
    dataPath: '/v2/prynce-map-entry',
  },
};
