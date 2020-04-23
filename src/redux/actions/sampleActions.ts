import { LOAD_SAMPLE_SUCCESS } from './actionTypes';

export function loadSampleSuccess(samples: any[]) {
  return { type: LOAD_SAMPLE_SUCCESS, samples };
}

export function loadSample() {
  return (dispatch: any, getState: any) => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((samples) => {
        dispatch(loadSampleSuccess(samples));
      })
      .catch((err) => {
        dispatch(loadSampleSuccess([]));
      });
  };
}
