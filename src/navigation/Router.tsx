import {NavigationContainer} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import {useSelector} from 'react-redux';
import {axiosInstance} from '../services/axiosConfiguration';
import {RootState} from '../store/configureStore';
import {AuthStack} from './stacks/AuthStack';
import {MainNavigationStack} from './stacks/MainNavigationStack';

interface RouterProps {}

export const Router: React.FC<PropsWithChildren<RouterProps>> = () => {
  const {sessionId, isAuthenticated} = useSelector(
    (state: RootState) => state?.auth,
  );

  axiosInstance.defaults.headers['session-id'] = sessionId;

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigationStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
