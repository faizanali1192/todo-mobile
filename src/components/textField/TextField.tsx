import React from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';
import {useThemedStyle} from '../../theme';
import TextComponent from '../textComponent/TextComponent';
import {styleProvider} from './TextField.style';

export interface TextFieldProps extends TextInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  inputStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<TextStyle>;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  inputStyle,
  containerStyle,
  ...props
}) => {
  const styles = useThemedStyle(styleProvider);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <TextComponent style={styles.label}>{label}</TextComponent>}

      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

export default TextField;
