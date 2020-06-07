import {
  FETCH_ERROR,
  FETCHING_DATA,
  FETCH_SUCCESS
} from "../actions/actionCreators";

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null
      });
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload.data,
        hasError: false,
        errorMessage: null
      });
    case FETCH_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: true,
        errorMessage: action.err
      });
    default:
      return state;
  }
}
