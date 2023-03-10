import { IReducer, IReducerState } from '../../lib/interfaces';

export const FETCH_INIT = 'FETCH_INIT';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';
const reducer = (state: IReducerState, action: IReducer): IReducerState => {
  switch (action.type) {
    case FETCH_INIT:
      return state;

    case FETCH_SUCCESS:
      return {
        data: action.payload ?? [],
        isLoading: false,
        hasErrors: false,
      };

    case FETCH_FAILED:
      return {
        data: [],
        isLoading: false,
        hasErrors: true,
      };

    default:
      return state;
  }
};

export default reducer;
