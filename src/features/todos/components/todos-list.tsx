import useGetTodos from '@/features/todos/hooks/use-get-todos';
import { Link } from '@tanstack/react-router';

export default function TodosList() {
  const { data } = useGetTodos();
  return (
    <div>
      {data?.map((el) => (
        // <p key={el.id}>{el.title}</p>
        <div key={el.id} className="p-1.5">
          <Link to="/todos/$todoId" params={{ todoId: String(el.id) }}>
            {el.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
