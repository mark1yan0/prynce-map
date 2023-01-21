import { LatLngExpression } from 'leaflet';
import { IMapItem } from '../interfaces';

export function getMarkerPos(item: IMapItem): LatLngExpression {
  return [item.lat, item.lon];
}
