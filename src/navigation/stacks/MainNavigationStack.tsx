import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RouteName} from '../../utilities/constants';
import {BottomTabsStack} from './bottomTabs/BottomTabsStack';

const Stack = createNativeStackNavigator();

export const MainNavigationStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={RouteName.BOTTOM_TAB_HOME}
          component={BottomTabsStack}
        />
      </Stack.Navigator>
    </>
  );
};
