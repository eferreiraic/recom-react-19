import { todoKeys } from '@/features/todos/api/todo-keys';
import { fetchTodoDetails, fetchTodos } from '@/features/todos/api/todos';
import { queryOptions } from '@tanstack/react-query';

export const getTodos = queryOptions({
  queryKey: todoKeys.lists(),
  queryFn: fetchTodos,
});

export const getTodoDetails = (todoId: string) =>
  queryOptions({
    queryKey: todoKeys.detail(todoId),
    queryFn: () => fetchTodoDetails(todoId),
  });
