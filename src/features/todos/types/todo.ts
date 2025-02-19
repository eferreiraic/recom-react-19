import { z } from 'zod';

export const todoSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  completed: z.boolean(),
});
export type Todo = z.infer<typeof todoSchema>;

export const todoListResponseSchema = z.array(todoSchema);
export type TodoList = z.infer<typeof todoListResponseSchema>;
