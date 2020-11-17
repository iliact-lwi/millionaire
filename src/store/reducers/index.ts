import { combineReducers } from "redux";

import configReducer from './configReducer';
import actionReducer from './actionReducer';

export default combineReducers({
    config: configReducer,
    action: actionReducer
});