import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteName} from '../../utilities/constants';
import DashboardScreen from '../../screens/dashboard/DashboardScreen';

const Stack = createNativeStackNavigator();

export function DashboardStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={RouteName.DASHBOARD}>
      <Stack.Screen name={RouteName.DASHBOARD} component={DashboardScreen} />
    </Stack.Navigator>
  );
}
