import {useMutation, UseMutationResult} from '@tanstack/react-query';
import {showToast} from '../../helpers/helpers';
import {_login, LoginRequestType, LoginResponseType} from '../../services/api';

export const useLogin = (): UseMutationResult<
  LoginResponseType,
  any,
  LoginRequestType
> => {
  return useMutation({
    mutationFn: (addCustomerObj: LoginRequestType) => _login(addCustomerObj),
    onSuccess: data => {
      console.log('Login Success', data);
    },
    onError: error => {
      console.error('Error while login', error);
      showToast('error', error?.status);
    },
  });
};
