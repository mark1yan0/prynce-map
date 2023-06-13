export interface IMapItem {
  name: string;
  region: string;
  address: string;
  lat: number;
  lon: number;
  link: string;
  slug: string;
}

export interface IMapPostsState {
  data: IMapItem[];
  isLoading: boolean;
  isError: boolean;
}
