import {StyleSheet} from 'react-native';
import {ss} from '../../theme';
import {Theme} from '../../theme/theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: ss(theme.spacing.h._1xSmall),
    },
    addBtn: {
      marginTop: 10,
    },
    listingContainer: {
      flex: 1,
    },
  });
};
