import { createFileRoute, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/todos/$todoId/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { todoId } = useParams({ strict: false });
  return <div>Hello "/todos/$todoId/"!{todoId}</div>;
}
