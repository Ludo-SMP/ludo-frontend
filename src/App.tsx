import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Styles/globalStyles';
import { theme } from './Styles/theme';
import { MainLayout } from './Layout/MainLayout';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { RouterProvider } from 'react-router-dom';
import { RouterPath } from './Router/index.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { API } from './Apis/study.ts';

const Comp = () => {
  async function fn() {
    console.log('A');
    const { data } = await axios.post('http://localhost:3001/api/test', {});

    console.log(data);
  }

  useEffect(() => {
    fn();
  }, []);

  return <div>okokokokokokok</div>;
};

const App = () => {
  return (
    <Comp />
    // <ThemeProvider theme={theme}>
    //   <GlobalStyle />
    //   <MainLayout>
    //     <Router>
    //       <Header />
    //     </Router>
    //     <RouterProvider router={RouterPath} />
    //     <Footer />
    //   </MainLayout>
    // </ThemeProvider>
  );
};

export default App;
