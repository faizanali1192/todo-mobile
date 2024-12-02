import {StyleSheet} from 'react-native';
import {ss} from '../../../theme';
import {Theme} from '../../../theme/theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    tabBarStyle: {
      alignItems: 'center',
      borderTopRightRadius: theme.lineHeight.large,
      borderTopLeftRadius: theme.lineHeight.large,
      backgroundColor: theme.pallet.backgroundSecondary,
      height: 80,
    },
    activeLabel: {
      fontSize: ss(theme.fontSize.small),
      fontFamily: theme.fontFamily.primaryMedium,
    },
    inActiveLabel: {
      fontSize: ss(theme.fontSize.small),
    },
    tabBarIcon: {marginTop: 10},
  });
};
