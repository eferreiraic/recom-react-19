import { axiosClient } from '@/clients/axios-client';
import {
  todoListResponseSchema,
  todoSchema,
} from '@/features/todos/types/todo';
import { validateAPISchema } from '@/lib/api-validator';

export const fetchTodos = async () => {
  const { data } = await axiosClient.get<unknown>('/todos');
  return validateAPISchema(
    data,
    todoListResponseSchema,
    'todoListResponseSchema - getTodos - todos.ts'
  );
};

export const fetchTodoDetails = async (todoId: string) => {
  const { data } = await axiosClient.get<unknown>(`/todos/${todoId}`);
  return validateAPISchema(
    data,
    todoSchema,
    'todoSchema - fetchTodoDetails - todos.ts'
  );
};
