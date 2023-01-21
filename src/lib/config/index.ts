import { LatLngExpression } from 'leaflet';

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
};
