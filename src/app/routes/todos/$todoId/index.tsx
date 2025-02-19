import { getTodoDetails } from '@/features/todos/queries/todos';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/todos/$todoId/')({
  loader: ({ context: { queryClient }, params: { todoId } }) =>
    queryClient.ensureQueryData(getTodoDetails(todoId)),
  component: TodoDetailsComponent,
  errorComponent: () => <div>404 - Todo not found</div>,
});

function TodoDetailsComponent() {
  const { todoId } = useParams({ from: '/todos/$todoId/' });
  const { data } = useSuspenseQuery(getTodoDetails(todoId));

  return <div>{data.title}</div>;
}
