import { useEffect, useReducer } from 'react';
import { getPosts } from '../../api';
import { IMapItem } from '../../lib/interfaces';
import reducer, { FETCH_FAILED, FETCH_INIT, FETCH_SUCCESS } from './reducer';

const initialValues = {
  data: [],
  isLoading: true,
  hasErrors: false,
};

const useFetchData = () => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  useEffect(() => {
    (async () => {
      dispatch({ type: FETCH_INIT });
      const data = await getPosts({
        onError: err => {
          dispatch({ type: FETCH_FAILED });
        },
      });

      const mappedData: IMapItem[] = data.map((item: any) => ({
        name: item.title.rendered,
        region: item.acf.region,
        address: item.acf.address,
        lat: item.acf.lat,
        lon: item.acf.lon,
        link: item.acf.link,
        slug: item.slug,
      }));
      console.log(mappedData);
      dispatch({ type: FETCH_SUCCESS, payload: mappedData });
    })();
  }, []);

  return state;
};

export default useFetchData;
