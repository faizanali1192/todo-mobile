import {ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Login from '../../screens/login/Login';
import Signup from '../../screens/signup/Signup';
import {RouteName} from '../../utilities/constants';

interface AuthStackParamList extends ParamListBase {
  [RouteName.LOGIN]: undefined;
  [RouteName.SIGNUP]: undefined;
}
export type AuthStackNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={RouteName.LOGIN}>
      <Stack.Screen name={RouteName.LOGIN} component={Login} />
      <Stack.Screen name={RouteName.SIGNUP} component={Signup} />
    </Stack.Navigator>
  );
}
