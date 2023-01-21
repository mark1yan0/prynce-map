import { LatLngExpression } from 'leaflet';

export default {
  center: [43.30237, 13.012834] as LatLngExpression,
  zoom: 5.5,
  flyToZoom: 12,
  scrollWheelZoom: false,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  mapUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
};
