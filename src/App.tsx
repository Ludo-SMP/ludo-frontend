import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Styles/globalStyles';
import { theme } from './Styles/theme';
import { MainLayout } from './Layout/MainLayout';
import { RouterProvider } from 'react-router-dom';
import { RouterPath } from './Router/index.tsx';
import LoginProvider from './Providers/LoginProvider/index.tsx';
import ReactQueryProvider from './Providers/QueryProvider/index.tsx';

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./Mocks/browser');

  worker.start({
    onUnhandledRequest: 'bypass',
  });
}

const App = () => {
  return (
    <ReactQueryProvider showDevTools>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LoginProvider>
          <MainLayout>
            <RouterProvider router={RouterPath} />
          </MainLayout>
        </LoginProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
};

export default App;
