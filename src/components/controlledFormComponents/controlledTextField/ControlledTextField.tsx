import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {useThemedStyle} from '../../../theme';
import TextComponent from '../../textComponent/TextComponent';
import TextField, {TextFieldProps} from '../../textField/TextField';
import {styleProvider} from './ControlledTextField.style';
import {StyleProp, View, ViewStyle} from 'react-native';

interface ControlledInputProps
  extends Pick<
    TextFieldProps,
    'containerStyle' | 'placeholder' | 'defaultValue'
  > {
  name: string;
  type?: 'text' | 'number' | 'password';
  containerStyle: StyleProp<ViewStyle>;
}

const ControlledInput = ({
  name,
  type = 'text',
  placeholder,
  defaultValue,
  containerStyle,
  ...restProps
}: ControlledInputProps) => {
  const styles = useThemedStyle(styleProvider);

  const {control} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({field, fieldState: {error}}) => {
        console.log('error', error);
        return (
          <View style={containerStyle}>
            <TextField
              inputStyle={error && styles.errorInput}
              placeholder={placeholder}
              value={field.value?.toString()}
              onChangeText={value =>
                field.onChange(type === 'number' ? Number(value) : value)
              }
              keyboardType={type === 'number' ? 'numeric' : 'default'}
              secureTextEntry={type === 'password'}
              {...restProps}
            />
            <TextComponent style={styles.errorText}>
              {error && error.message}
            </TextComponent>
          </View>
        );
      }}
    />
  );
};

export default ControlledInput;
