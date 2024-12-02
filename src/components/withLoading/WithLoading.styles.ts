import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.pallet.backgroundPrimary,
    },
  });
};
