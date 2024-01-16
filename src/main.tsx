// import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'jotai';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Router/index.tsx';
// import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <BrowserRouter>
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // </BrowserRouter>,
  <StrictMode>
    <Provider>
      <RouterProvider router={Router} />
    </Provider>
  </StrictMode>,
);
