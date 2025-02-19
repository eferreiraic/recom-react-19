// Import the generated route tree
import ReactQueryProvider from '@/app/providers/react-query-provider';
import { AppRouterProvider } from '@/app/providers/app-router-provider';
import '@/lib/env';

export default function AppProvider() {
  return (
    <ReactQueryProvider>
      <AppRouterProvider />
    </ReactQueryProvider>
  );
}
