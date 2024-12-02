import axios from 'axios';
import {Alert} from 'react-native';
import Config from 'react-native-config';
import {store} from '../store/configureStore';
import {resetAuthReducer} from '../store/reducers/authReducer';

const BASE_URL = 'http://localhost:4000/api/';
console.log('Config.API_TOKEN', Config.API_TOKEN);
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
  },
});

axios.interceptors.response.use(
  response => response,
  async error => {
    console.log('error.response?.status', error.response?.status);
    if (error.response?.status === 401) {
      Alert.alert(
        'Authentication Error',
        'Your session has expired. Please log in again.',
        [
          {
            text: 'Logout',
            onPress: () => {
              store.dispatch(resetAuthReducer());
            },
          },
        ],
      );
    }
    return Promise.reject(error);
  },
);
