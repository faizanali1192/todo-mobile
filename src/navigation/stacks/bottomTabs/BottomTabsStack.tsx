import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {SVG} from '../../../assets/svg/svgs';
import {ss, useThemedStyle} from '../../../theme';
import {colors} from '../../../theme/colors';
import {NavConst} from '../../../utilities/constants';
import {DashboardStack} from '../DashboardStack';
import {MoreStack} from '../MoreStack';
import {styleProvider} from './BottomTabsStack.style';

const Tab = createBottomTabNavigator();

const TabBarIcons = {
  [NavConst.DASHBOARD]: SVG.DashboardIcon,
  [NavConst.MORE]: SVG.MoreIcon,
};

export const BottomTabsStack = () => {
  const styles = useThemedStyle(styleProvider);

  const getTabIcon = (routeName: string, focused: boolean) => {
    const IconComponent = TabBarIcons[routeName];
    const fillColor = focused ? colors.backgroundPrimary : colors.textSecondary;
    return <IconComponent fill={fillColor} height={ss(18)} width={ss(18)} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({focused}) => getTabIcon(route.name, focused),
        tabBarItemStyle: styles.tabBarIcon,
        tabBarActiveTintColor: colors.backgroundPrimary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarLabelStyle: TabBarIcons[route.name]
          ? styles.activeLabel
          : styles.inActiveLabel,
      })}>
      <Tab.Screen name={NavConst.DASHBOARD} component={DashboardStack} />
      <Tab.Screen name={NavConst.MORE} component={MoreStack} />
    </Tab.Navigator>
  );
};
