import { LatLngTuple } from 'leaflet';
import { IMapItem } from '../interfaces';

export function getMarkerPos(item: IMapItem): LatLngTuple {
  return [item.lat, item.lon];
}

// not fully correct. The best would be to use envs
export function isDev() {
  return window.location.hostname === 'localhost';
}
