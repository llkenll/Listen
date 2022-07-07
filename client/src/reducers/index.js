import { combineReducers } from "redux";

import artists from './artists';
import profile from './profile';
import playlist from "./playlist";


export default combineReducers({artists, profile, playlist})