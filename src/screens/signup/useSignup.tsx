import {useMutation, UseMutationResult} from '@tanstack/react-query';
import {showToast} from '../../helpers/helpers';
import {
  _signup,
  SignupRequestType,
  SignupResponseType,
} from '../../services/api';

export const useSignup = (): UseMutationResult<
  SignupResponseType,
  any,
  SignupRequestType
> => {
  return useMutation({
    mutationFn: (addCustomerObj: SignupRequestType) => _signup(addCustomerObj),
    onSuccess: data => {
      console.log('Login Success', data);
      showToast('success', 'Account created successfully.');
    },
    onError: error => {
      console.error('Error while login', error);
      showToast('error', error?.status);
    },
  });
};
