import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/theme';
import {ss} from '../../theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    text: {
      fontFamily: theme.font.primary,
      color: theme.pallet.text,
      textAlign: 'left',
      fontSize: ss(theme.fontSize.largeLt),
    },
  });
};
