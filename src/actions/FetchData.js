import axios from "axios";
import { APIKEY } from "../../secrets";
import { FETCH_ERROR, FETCHING_DATA, FETCH_SUCCESS } from "./actionCreators";
export default function FetchData() {
  return dispatch => {
    dispatch({ type: FETCHING_DATA });

    return axios({
      method: "get",
      url:
        "http://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10",
      headers: {
        "X-CMC_PRO_API_KEY": APIKEY
      }
    })
      .then(res => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_ERROR, payload: err.data });
      });
  };
}
