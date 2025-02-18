import TodosPage from '@/app/pages/todos-page/TodosPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/todos/')({
  component: TodosPage,
});
