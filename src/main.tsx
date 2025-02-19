import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppProvider from '@/app/providers/app-provider';
import '@/index.css';

const rootElement = document.getElementById('root') as HTMLElement;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <AppProvider />
    </StrictMode>
  );
}
