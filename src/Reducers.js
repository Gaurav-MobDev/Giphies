import {combineReducers} from 'redux';
import {GiphyReducer} from './containers/redux';

const rootReducer = combineReducers({
  giphyReducer: GiphyReducer,
});
export default rootReducer;
