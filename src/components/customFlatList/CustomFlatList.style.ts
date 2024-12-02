import { StyleSheet } from 'react-native';
import { Theme } from '../../theme/theme';

export const styleProvider = (theme: Theme) => {
  return StyleSheet.create({
    container: {flexGrow: 1},
    emptyContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  });
};
