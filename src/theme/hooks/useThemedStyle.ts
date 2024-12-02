import {StyleSheet} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from './useTheme';
import {Theme} from '../theme';
import {useDeepMemo} from '../../helpers/hooks/useDeepMemo';

export const useThemedStyle = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
  U extends Record<string, any>,
>(
  styleProvider: (theme: Theme, insets: EdgeInsets, extra?: U) => T,
  extra?: U,
) => {
  const {theme} = useTheme();
  const insets = useSafeAreaInsets();

  return useDeepMemo(
    () => styleProvider(theme, insets, extra),
    [theme, insets, extra],
  );
};
