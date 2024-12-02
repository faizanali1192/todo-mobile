import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/theme';
import {ss} from '../../theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: ss(theme.spacing.h._1xSmall),
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};
