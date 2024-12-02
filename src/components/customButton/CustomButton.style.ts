import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/theme';
import {ss} from '../../theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    button: {
      backgroundColor: theme.pallet.buttonPrimary,
      borderColor: theme.pallet.buttonPrimary,
      borderWidth: 1,
      paddingVertical: ss(10),
      paddingHorizontal: ss(72),
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    disabledButton: {
      backgroundColor: '#A9A9A9',
    },
    text: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      marginLeft: 8, // Space between icon and text
      fontFamily: theme.fontFamily.primaryMedium,
    },
  });
};
