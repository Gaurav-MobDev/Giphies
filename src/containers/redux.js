const SET_GIPHY_DATA = 'GET_GIPHY_DATA';
const ADD_FAVOURITE_GIPHY = 'ADD_FAVOURITE_GIPHY';
const REMOVE_FAVOURITE_GIPHY = 'REMOVE_FAVOURITE_GIPHY';
const GET_GIPHIES = 'GET_GIPHIES';

export const getGiphyAction = payload => ({
  type: GET_GIPHIES,
  payload,
});

export const setGiphyAction = payload => ({
  type: SET_GIPHY_DATA,
  payload,
});

export const setFavouriteAction = payload => ({
  type: ADD_FAVOURITE_GIPHY,
  payload,
});

export const removeFavouriteAction = payload => ({
  type: REMOVE_FAVOURITE_GIPHY,
  payload,
});

let initialState = {
  details: {},
  favourites: [],
  giphies: [],
  selectedIndex: null,
};

export const GiphyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GIPHIES:
      return {
        ...state,
        giphies: action.payload,
      };
    case SET_GIPHY_DATA:
      return {
        ...state,
        details: action.payload.details,
        selectedIndex: action.payload.index,
      };
    case ADD_FAVOURITE_GIPHY:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case REMOVE_FAVOURITE_GIPHY:
      return {
        ...state,
        favourites: state.favourites.filter(id => id !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};
