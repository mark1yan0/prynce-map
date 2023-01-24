export interface IMapItem {
  name: string;
  region: string;
  address: string;
  lat: number;
  lon: number;
  link: string;
  slug: string;
}

export interface IReducerState {
  data: IMapItem[] | [];
  isLoading: boolean;
  hasErrors: boolean;
}

export interface IReducer {
  type: 'FETCH_INIT' | 'FETCH_SUCCESS' | 'FETCH_FAILED';
  payload?: IMapItem[];
}
