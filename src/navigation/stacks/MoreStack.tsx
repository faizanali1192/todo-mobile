import { createNativeStackNavigator } from '@react-navigation/native-stack';
import More from '../../screens/more/More';
import { RouteName } from '../../utilities/constants';

const Stack = createNativeStackNavigator();

export function MoreStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={RouteName.MORE}>
      <Stack.Screen name={RouteName.MORE} component={More} />
    </Stack.Navigator>
  );
}
