import Toast from 'react-native-toast-message';

export const showToast = (
  type: 'error' | 'success' = 'success',
  message: string,
) => {
  Toast.show({
    type: type,
    text1: message,
  });
};
