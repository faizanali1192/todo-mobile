import React from 'react';
import {useDispatch} from 'react-redux';
import CustomButton from '../../components/customButton/CustomButton';
import SafeAreaView from '../../components/safeAreaView/SafeAreaView';
import {resetAuthReducer} from '../../store/reducers/authReducer';
import {useThemedStyle} from '../../theme';
import {styleProvider} from './More.style';
import {useLogout} from './useLogout';

const Media = () => {
  const styles = useThemedStyle(styleProvider);
  const {mutateAsync, isPending} = useLogout();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await mutateAsync();
      dispatch(resetAuthReducer());
    } catch (error) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomButton onPress={handleLogout} title="Logout" loading={isPending} />
    </SafeAreaView>
  );
};

export default Media;
