import { LOAD_SAMPLE_SUCCESS } from '../actions/actionTypes';
import { Action } from '../models/action';
import initialState from './initialState';

export function sampleReducer(state = initialState.samples, action: Action) {
  switch (action.type) {
    case LOAD_SAMPLE_SUCCESS:
      return action.samples;
    default:
      return state;
  }
}
