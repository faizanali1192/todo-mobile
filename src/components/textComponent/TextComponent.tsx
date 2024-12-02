import {styleProvider} from './TextComponent.style';
import React, {forwardRef, PropsWithChildren} from 'react';
import {Text, TextProps} from 'react-native';
import {useThemedStyle} from '../../theme';

export const TextComponent = forwardRef<Text, PropsWithChildren<TextProps>>(
  ({children, style, ...props}, textRef) => {
    const styles = useThemedStyle(styleProvider);

    return (
      <Text ref={textRef} style={[styles.text, style]} {...props}>
        {children}
      </Text>
    );
  },
);

export default TextComponent;
