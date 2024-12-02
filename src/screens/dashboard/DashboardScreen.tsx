import React, {useState} from 'react';
import CustomButton from '../../components/customButton/CustomButton';
import CustomFlatList from '../../components/customFlatList/CustomFlatlist';
import TodoCard from '../../components/todoCard/TodoCard';
import SafeAreaView from '../../components/safeAreaView/SafeAreaView';
import TextField from '../../components/textField/TextField';
import {useThemedStyle} from '../../theme';
import {styleProvider} from './Dashboard.style';
import {useDashboard} from './useDashboard';
import {View} from 'react-native';

const DashboardScreen = () => {
  const styles = useThemedStyle(styleProvider);
  const [value, setValue] = useState('');
  const {useTodosListing, useAddTodo, useDeleteTodo} = useDashboard();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isLoading,
  } = useTodosListing();

  const {mutateAsync: addTodoFun, isPending: addTodoLoading} = useAddTodo();
  const {mutateAsync: deleteTodoFun, isPending: deleteTodoLoading} =
    useDeleteTodo();

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleAddTodo = async () => {
    try {
      await addTodoFun({title: value});
      setValue('');
    } catch (error) {}
  };

  const handleDelete = (id: number) => {
    try {
      deleteTodoFun({id});
    } catch (error) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextField
        onChangeText={setValue}
        value={value}
        placeholder="Enter todo text"
      />
      <CustomButton
        title="Add Todo"
        onPress={handleAddTodo}
        style={styles.addBtn}
        loading={addTodoLoading}
      />

      <View style={styles.listingContainer}>
        <CustomFlatList
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          data={data?.pages.flatMap(page => page.data) ?? []}
          renderItem={({item}) => {
            return (
              <TodoCard
                loading={deleteTodoLoading}
                id={item.id}
                title={item.title}
                onPressDelete={handleDelete}
              />
            );
          }}
          keyExtractor={item => item.id.toString()}
          onRefresh={refetch}
          isLoadingMore={isFetchingNextPage}
          emptyListMessage="No items to display"
          contentContainerStyle={{padding: 16}}
          maintainVisibleContentPosition={{
            minIndexForVisible: 0,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
