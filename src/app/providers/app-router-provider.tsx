import { routeTree } from '@/app/routeTree.gen';
import { useQueryClient } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';

const router = createRouter({
  routeTree,
  defaultPendingComponent: () => <div>loading...</div>,
  context: {
    queryClient: undefined!,
  },
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export function AppRouterProvider() {
  const queryClient = useQueryClient();

  return <RouterProvider router={router} context={{ queryClient }} />;
}
