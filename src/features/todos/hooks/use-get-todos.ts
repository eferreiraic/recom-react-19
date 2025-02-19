import { todoKeys } from '@/features/todos/api/todo-keys';
import { fetchTodos } from '@/features/todos/api/todos';
import { useQuery } from '@tanstack/react-query';

export default function useGetTodos() {
  return useQuery({
    queryKey: todoKeys.lists(),
    queryFn: fetchTodos,
  });
}
