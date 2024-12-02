import {zodResolver} from '@hookform/resolvers/zod';
import React from 'react';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import {loginValidationSchema} from '../../../validationSchema/validationSchema';
import ControlledInput from '../../components/controlledFormComponents/controlledTextField/ControlledTextField';
import CustomButton from '../../components/customButton/CustomButton';
import SafeAreaView from '../../components/safeAreaView/SafeAreaView';
import TextComponent from '../../components/textComponent/TextComponent';
import WithLoading from '../../components/withLoading/WithLoading';
import {useThemedStyle} from '../../theme';
import {styleProvider} from './Login.style';
import {useLogin} from './useLogin';
import {LoginRequestType} from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import {RouteName} from '../../utilities/constants';
import {AuthStackNavigationProp} from '../../navigation/stacks/AuthStack';
import {useDispatch} from 'react-redux';
import {setAuthData} from '../../store/reducers/authReducer';

interface LoginPropTypes {}

const initialValues = {
  username: '',
  password: '',
};

const Login: React.FC<LoginPropTypes> = () => {
  const styles = useThemedStyle(styleProvider);
  const navigation = useNavigation<AuthStackNavigationProp>();
  const {mutateAsync, isPending} = useLogin();
  const dispatch = useDispatch();

  const methods = useForm({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: initialValues,
  });

  const handleSubmit = () => {
    methods.handleSubmit(onSubmit as any)();
  };

  const onSubmit: SubmitHandler<LoginRequestType> = async data => {
    console.log('data=====>', data);
    try {
      const res = await mutateAsync(data);
      dispatch(
        setAuthData({
          sessionId: res.data.sessionId,
          expiresAt: res.data.expiresAt,
          isAuthenticated: true,
        }),
      );
    } catch (error) {}
  };

  const navigationToSignUp = () => {
    navigation.navigate(RouteName.SIGNUP);
  };

  return (
    <WithLoading loading={false}>
      <SafeAreaView>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.container}>
            <TextComponent style={styles.title}>Login</TextComponent>
            <FormProvider {...methods}>
              <ControlledInput
                name="username"
                placeholder="Enter username..."
                containerStyle={styles.textField}
              />
              <ControlledInput
                name="password"
                type="password"
                placeholder="Enter password..."
                containerStyle={styles.textField}
              />
              <CustomButton
                onPress={handleSubmit}
                title="Login"
                disabled={isPending}
                loading={isPending}
              />

              <TextComponent style={styles.signupDesc}>
                Do you have an account?
                <TextComponent
                  style={styles.signup}
                  onPress={navigationToSignUp}>
                  {' '}
                  Sign Up
                </TextComponent>
              </TextComponent>
            </FormProvider>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </WithLoading>
  );
};

export default Login;
