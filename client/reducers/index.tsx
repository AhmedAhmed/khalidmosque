import {combineReducers} from "redux";
import { routerReducer as routing } from 'react-router-redux';
import trips from './trips';
import deals from './deals';

const rootReducer = combineReducers({
  trips,
  deals
});

export default rootReducer;
