import _ from 'lodash';
import {useState} from 'react';

export function useDeepState<S>(initialState: S): [S, (newState: S) => void] {
  const [state, _setState] = useState(initialState);

  const setState = (newState: S) => {
    if (!_.isEqual(state, newState)) {
      _setState(newState);
    }
  };

  return [state, setState];
}
