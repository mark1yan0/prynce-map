import { getPosts } from '../../api';
import { IMapItem, IMapPostsState } from '../../lib/interfaces';
import { useQuery } from 'react-query';

const useMapPosts = (): IMapPostsState => {
  const { data, isError, isLoading } = useQuery('map-posts', getPosts);

  const mappedData: IMapItem[] = data?.map((item: any) => ({
    name: item.title.rendered,
    region: item.acf.region,
    address: item.acf.address,
    lat: item.acf.lat,
    lon: item.acf.lon,
    link: item.acf.link,
    slug: item.slug,
  }));

  return {
    data: mappedData,
    isError,
    isLoading,
  };
};

export default useMapPosts;
