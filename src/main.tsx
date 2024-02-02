import ReactDOM from 'react-dom/client';
import { Provider } from 'jotai';
import { StrictMode } from 'react';

import App from './App.tsx';

// if (import.meta.env.DEV) {
//   const { worker } = await import('./mocks/browser');
//   worker.start();
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
