import {
  keepPreviousData,
  useInfiniteQuery,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import {
  _addTodo,
  _deleteTodo,
  _todosList,
  DeleteTodoRequestType,
  DeleteTodoResponseType,
  TodoListingResponseType,
  TodoRequestType,
  TodoResponseType,
} from '../../services/api';
import {showToast} from '../../helpers/helpers';

const queryClient = useQueryClient();

export const useDashboard = () => {
  const useTodosListing = () => {
    return useInfiniteQuery<TodoListingResponseType, Error>({
      queryKey: ['todosListing'],
      queryFn: ({pageParam = 1}: any) => _todosList(pageParam),
      getNextPageParam: lastPage => {
        return lastPage?.pagination.currentPage &&
          lastPage.pagination.currentPage < lastPage.pagination.totalPages
          ? lastPage.pagination.currentPage + 1
          : undefined;
      },
      placeholderData: keepPreviousData,
      initialPageParam: 1,
    });
  };

  const useAddTodo = (): UseMutationResult<
    TodoResponseType,
    any,
    TodoRequestType
  > => {
    return useMutation({
      mutationFn: (addTodoObj: TodoRequestType) => _addTodo(addTodoObj),
      onSuccess: data => {
        console.log('todo added successfully', data);
        showToast('success', 'Todo added successfully');
      },
      onError: error => {
        console.error('Error while adding new todo', error);
        showToast('error', error?.status);
      },
      onSettled: () => {
        //refetching list after delete todo
        queryClient.invalidateQueries({queryKey: ['todosListing']});
      },
    });
  };

  const useDeleteTodo = (): UseMutationResult<
    DeleteTodoResponseType,
    any,
    DeleteTodoRequestType
  > => {
    return useMutation({
      mutationFn: (addTodoObj: DeleteTodoRequestType) =>
        _deleteTodo(addTodoObj),
      onSuccess: data => {
        console.log('todo deleted successfully', data);
        showToast('success', 'Todo deleted successfully');
      },
      onError: error => {
        console.error('Error while adding deleting todo', error);
        showToast('error', error?.status);
      },
      onSettled: () => {
        //refetching list after delete todo
        queryClient.invalidateQueries({queryKey: ['todosListing']});
      },
    });
  };

  return {useTodosListing, useAddTodo, useDeleteTodo};
};
