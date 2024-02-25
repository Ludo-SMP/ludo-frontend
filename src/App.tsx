import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Styles/globalStyles';
import { theme } from './Styles/theme';
import { MainLayout } from './Layout/MainLayout';
<<<<<<< HEAD
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { RouterProvider } from 'react-router-dom';
import { RouterPath } from './Router/index.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { API } from './Apis/study.ts';

// const Comp = () => {
//   async function fn() {
//     console.log('A');
//     const { data } = await axios.post('http://localhost:3000/api/test', {
//       name: 'a',
//       email: 'a@aa.a',
//       title: '타이틀',
//     });

//     console.log(data);
//   }

//   useEffect(() => {
//     fn();
//   }, []);

//   return <div>okokokokokokok</div>;
// };

const App = () => {
  return (
    // <Comp />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainLayout>
        <Router>
          <Header />
        </Router>
        <RouterProvider router={RouterPath} />
        <Footer />
      </MainLayout>
    </ThemeProvider>
=======
import { RouterProvider } from 'react-router-dom';
import { RouterPath } from './Router/index.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import LoginProvider from './Components/LoginProvider/index.tsx';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LoginProvider>
          <MainLayout>
            <RouterProvider router={RouterPath} />
          </MainLayout>
        </LoginProvider>
      </ThemeProvider>
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
>>>>>>> 622a1649988450510ff9876a2c8500717f7d097b
  );
};

export default App;
