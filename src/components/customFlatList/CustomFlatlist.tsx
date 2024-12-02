import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  FlatListProps,
  ListRenderItem,
  RefreshControl,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {useThemedStyle} from '../../theme';
import {styleProvider} from './CustomFlatList.style';

interface CustomFlatListProps<T>
  extends Omit<FlatListProps<T>, 'data' | 'renderItem'> {
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor?: (item: T, index: number) => string;
  onRefresh?: () => void;
  refreshing?: boolean;
  emptyListMessage?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  isLoadingMore?: boolean;
}

const CustomFlatList = <T extends any>({
  data,
  renderItem,
  keyExtractor = (_, index) => index.toString(),
  onRefresh,
  refreshing = false,
  emptyListMessage = 'No data available',
  contentContainerStyle,
  isLoadingMore = false,
  ...rest
}: CustomFlatListProps<T>) => {
  const styles = useThemedStyle(styleProvider);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text>{emptyListMessage}</Text>
        </View>
      }
      refreshControl={
        onRefresh ? (
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        ) : undefined
      }
      ListFooterComponent={
        isLoadingMore ? (
          <View>
            <ActivityIndicator size="large" color="black" />
          </View>
        ) : null
      }
      {...rest}
    />
  );
};

export default CustomFlatList;
