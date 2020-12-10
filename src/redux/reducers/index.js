import { combineReducers } from 'redux';

import rate from './rate';
import appReducer from './app';


const rootReducer = combineReducers({
    rate,
    appReducer
});
  
export default rootReducer;