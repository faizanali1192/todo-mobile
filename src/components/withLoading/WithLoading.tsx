import React, {ReactNode} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useTheme, useThemedStyle} from '../../theme';
import {styleProvider} from './WithLoading.styles';

interface WithLoadingProps {
  loading?: boolean;
  children?: ReactNode;
  size?: 'large' | 'small';
}

const WithLoading: React.FC<WithLoadingProps> = React.memo(
  ({loading = false, children, size = 'large'}) => {
    const styles = useThemedStyle(styleProvider);
    const {theme} = useTheme();

    return (
      <>
        {!!loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator
              size={size}
              color={theme.pallet.backgroundSecondary}
            />
          </View>
        ) : (
          children
        )}
      </>
    );
  },
);

export default WithLoading;
