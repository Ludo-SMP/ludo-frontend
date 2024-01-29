import ReactDOM from 'react-dom/client';
import { Provider } from 'jotai';
import { StrictMode } from 'react';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
