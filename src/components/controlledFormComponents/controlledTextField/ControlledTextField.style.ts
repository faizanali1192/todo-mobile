import {StyleSheet} from 'react-native';
import {Theme} from '../../../theme/theme';
import {ss} from '../../../theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    errorInput: {
    //   borderColor: theme.pallet.error,
    },
    errorText: {
      color: theme.pallet.error,
      marginTop: 5,
      fontSize: ss(theme.fontSize.mediumLt),
    },
  });
};
