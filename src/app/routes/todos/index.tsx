import TodosList from '@/features/todos/components/todos-list';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/todos/')({
  component: Todos,
});

function Todos() {
  return <TodosList />;
}
