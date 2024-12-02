import React from 'react';
import {StatusBar, StyleProp, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTheme} from '../../theme';

interface SafeAreaViewProps {
  ignoreBottomInsets?: boolean;
  ignoreTopInsets?: boolean;
  style?: StyleProp<ViewStyle>;
}

const SafeAreaView: React.FC<React.PropsWithChildren<SafeAreaViewProps>> = ({
  children,
  style,
  ignoreBottomInsets,
  ignoreTopInsets,
}) => {
  const {theme} = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />

      <View
        style={[
          {
            flex: 1,
            paddingTop: ignoreTopInsets ? 0 : insets.top,
            paddingBottom: ignoreBottomInsets ? 0 : insets.bottom,
            backgroundColor: theme.pallet.backgroundPrimary,
          },
          style,
        ]}>
        {children}
      </View>
    </>
  );
};

export default SafeAreaView;
