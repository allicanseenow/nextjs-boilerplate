import { combineReducers } from 'redux';
import { sampleReducer } from './sample';

const rootReducer = combineReducers({
  samples: sampleReducer,
});

export default rootReducer;
