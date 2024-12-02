import {StyleSheet} from 'react-native';
import {ss} from '../../theme';
import {Theme} from '../../theme/theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: ss(theme.spacing.h._1xSmall),
      marginTop: '40%',
    },
    textField: {
      marginBottom: 15,
    },
    title: {
      fontSize: theme.fontSize._2xLarge,
      textAlign: 'center',
      fontFamily: theme.fontFamily.primarySemiBold,
      marginBottom: ss(30),
    },
    signupDesc: {
      textAlign: 'center',
      marginTop: ss(20),
    },
    signup: {
      color: theme.pallet.buttonPrimary,
    },
  });
};
