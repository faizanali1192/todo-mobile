import {useMutation, UseMutationResult} from '@tanstack/react-query';
import {showToast} from '../../helpers/helpers';
import {_logout, LogoutResponseType} from '../../services/api';

export const useLogout = (): UseMutationResult<
  LogoutResponseType,
  any,
  void
> => {
  return useMutation({
    mutationFn: () => _logout(),
    onSuccess: data => {
      console.log('Logout Successfully', data);
    },
    onError: error => {
      console.error('Error while Logout', error);
      showToast('error', error?.status);
    },
  });
};
