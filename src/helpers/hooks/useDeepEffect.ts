import {DependencyList, EffectCallback, useEffect} from 'react';
import {useDeepState} from './useDeepState';

export const useDeepEffect = (
  effect: EffectCallback,
  deps?: DependencyList,
) => {
  const [cachedDeps, setCachedDeps] = useDeepState(deps);

  useEffect(() => {
    setCachedDeps(deps);
  }, [deps]);

  useEffect(effect, cachedDeps);
};
