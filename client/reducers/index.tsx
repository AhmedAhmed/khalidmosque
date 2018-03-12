import {combineReducers} from "redux";
import { routerReducer as routing } from 'react-router-redux';
import user from './user';
import wp_posts from './wp_posts'

const rootReducer = combineReducers({
  user,
  wp_posts
});

export default rootReducer;
