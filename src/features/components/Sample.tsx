import { FC, useCallback } from 'react';
import { Button } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import { loadSample } from '../../redux/actions/sampleActions';

const selectSample = createSelector(
  (state: any) => state.samples,
  (samples) => samples
);

export const Sample: FC<any> = ({ userAgent }) => {
  const samples = useSelector(selectSample);
  const dispatch = useDispatch();

  const fetchSamples = useCallback(bindActionCreators(loadSample, dispatch), [dispatch]);

  return (
    <div>
      <h1>Hello world! - user agent: {userAgent}</h1>
      <Button variant="contained" color="primary" onClick={fetchSamples}>
        Material UI button
      </Button>
      {samples?.length > 0 && (
        <div>
          Samples: {JSON.stringify(samples)}
        </div>
      )}
    </div>
  );
};
