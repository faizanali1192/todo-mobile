import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import {loginValidationSchema} from '../../../validationSchema/validationSchema';
import ControlledInput from '../../components/controlledFormComponents/controlledTextField/ControlledTextField';
import CustomButton from '../../components/customButton/CustomButton';
import SafeAreaView from '../../components/safeAreaView/SafeAreaView';
import TextComponent from '../../components/textComponent/TextComponent';
import WithLoading from '../../components/withLoading/WithLoading';
import {AuthStackNavigationProp} from '../../navigation/stacks/AuthStack';
import {LoginRequestType} from '../../services/api';
import {useThemedStyle} from '../../theme';
import {RouteName} from '../../utilities/constants';
import {styleProvider} from './Signup.style';
import {useSignup} from './useSignup';

interface SignupPropTypes {}

const initialValues = {
  username: '',
  password: '',
};

const Signup: React.FC<SignupPropTypes> = () => {
  const styles = useThemedStyle(styleProvider);
  const navigation = useNavigation<AuthStackNavigationProp>();
  const {mutateAsync, isPending} = useSignup();

  const methods = useForm({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: initialValues,
  });

  const handleSubmit = () => {
    methods.handleSubmit(onSubmit as any)();
  };

  const onSubmit: SubmitHandler<LoginRequestType> = async data => {
    try {
      await mutateAsync(data);  
      navigation.navigate(RouteName.LOGIN);
      methods.reset(initialValues);
    } catch (error) {}
  };

  const navigationToSignUp = () => {
    navigation.navigate(RouteName.LOGIN);
  };

  return (
    <WithLoading loading={false}>
      <SafeAreaView>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.container}>
            <TextComponent style={styles.title}>Sign Up</TextComponent>
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
                title="Sign Up"
                disabled={isPending}
                loading={isPending}
              />

              <TextComponent style={styles.signupDesc}>
                Already have an account?
                <TextComponent
                  style={styles.signup}
                  onPress={navigationToSignUp}>
                  {' '}
                  Signin
                </TextComponent>
              </TextComponent>
            </FormProvider>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </WithLoading>
  );
};

export default Signup;
