import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      marginTop: 'auto',
      fontFamily: theme.fontFamily.primary,
      fontWeight: 500,
      padding: 20,
      fontSize: theme.fontSize.large,
      width: '80%',
    },
    delete: {
      flex: 1,
      backgroundColor: theme.pallet.error,
      marginLeft: 'auto',
    },
  });
};
