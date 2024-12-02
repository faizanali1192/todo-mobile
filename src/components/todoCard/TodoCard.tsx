import React from 'react';
import {ss, useTheme, useThemedStyle} from '../../theme';
import TextComponent from '../textComponent/TextComponent';
import {styleProvider} from './TodoCard.style';
import {TouchableOpacity, View} from 'react-native';
import CustomButton from '../customButton/CustomButton';
import {SVG} from '../../assets/svg/svgs';
import WithLoading from '../withLoading/WithLoading';

interface TodoCardProps {
  id: number;
  title: string;
  loading: boolean;
  onPressDelete: (id: number) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({
  id,
  title,
  loading = false,
  onPressDelete,
  ...rest
}) => {
  const styles = useThemedStyle(styleProvider);
  const {theme} = useTheme();

  return (
    <View style={styles.container}>
      {!!title && <TextComponent style={styles.title}>{title}</TextComponent>}

      <WithLoading loading={loading} size="small">
        <TouchableOpacity onPress={() => onPressDelete(id)}>
          <SVG.DeleteIcon
            height={ss(20)}
            width={ss(20)}
            fill={theme.pallet.error}
          />
        </TouchableOpacity>
      </WithLoading>
    </View>
  );
};

export default TodoCard;
