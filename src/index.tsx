import ReactDOM from 'react-dom/client';
import { Provider } from 'jotai';
import { StrictMode } from 'react';

import App from './App.tsx';

const enableMocking = async () => {
  if (import.meta.env.DEV === false) return;
  const { worker } = await import('./mocks/browser');
  return worker.start();
};

enableMocking().then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Provider>
        <App />
      </Provider>
    </StrictMode>,
  ),
);
