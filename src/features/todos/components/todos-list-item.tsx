import { buttonVariants } from '@/components/ui/button';
import type { Todo } from '@/features/todos/types/todo';
import { Link } from '@tanstack/react-router';

export default function TodosListItem({ item }: { item: Todo }) {
  return (
    <div className="flex min-h-20 rounded-md border-2 border-neutral-500/50 gap-4">
      <div className="flex w-24 pl-4 justify-center items-center">
        <span className="text-3xl font-bold text-neutral-400">#{item.id}</span>
      </div>
      <div className="relative flex flex-col flex-1 h-full py-4 justify-center">
        <span className="text-xl capitalize">{item.title}</span>
        <span className="text-sm">
          <strong>User ID:</strong> {item.userId}
        </span>
      </div>
      <div className="px-4 flex items-center justify-center">
        <Link
          className={buttonVariants({ variant: 'outline' })}
          to="/todos/$todoId"
          params={{ todoId: String(item.id) }}
        >
          View
        </Link>
      </div>
    </div>
  );
}
