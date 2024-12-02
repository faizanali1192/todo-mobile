import {DependencyList, useEffect, useMemo} from 'react';
import {useDeepState} from './useDeepState';

export function useDeepMemo<T>(factory: () => T, deps: DependencyList) {
  const [cachedDeps, setCachedDeps] = useDeepState(deps);

  useEffect(() => {
    setCachedDeps(deps);
  }, [deps]);

  return useMemo(factory, cachedDeps);
}
