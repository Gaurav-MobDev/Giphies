import Axios from 'axios';
import {URL} from '../utility';
const {BASE_URL, GIPHY_URL} = URL;
const returnAPIKey = () => {
  const api = 'BFDXOBO9OwUpXILuyaWPRkFERLBoVJfY';
  return () => api;
};

export const getApi = async () => {
  const url = BASE_URL + GIPHY_URL + returnAPIKey()();
  const response = await Axios.get(url);
  return response;
};
