import TodosListItem from '@/features/todos/components/todos-list-item';
import { getTodos } from '@/features/todos/queries/todos';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/todos/')({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(getTodos),
  component: TodosComponent,
});

function TodosComponent() {
  const { data } = useSuspenseQuery(getTodos);

  return (
    <div className="flex flex-col gap-3 mx-10">
      {data?.map((el) => (
        <TodosListItem key={el.id} item={el} />
      ))}
    </div>
  );
}
