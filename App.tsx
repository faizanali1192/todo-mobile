import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import 'react-native-svg';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Router} from './src/navigation/Router';
import {ThemeProvider} from './src/theme/ThemeContext';
import {persistor, store} from './src/store/configureStore';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <ThemeProvider>
              <Router />
              <Toast />
            </ThemeProvider>
          </SafeAreaProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
