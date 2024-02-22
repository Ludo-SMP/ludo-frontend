import ReactDOM from 'react-dom/client';
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
      <App />
    </StrictMode>,
  ),
);
// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );
