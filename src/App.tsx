import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Styles/globalStyles';
import { theme } from './Styles/theme';
import { MainLayout } from './Layout/MainLayout';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Router/index.tsx';
// import { BackHeader } from './Components/Header/BackHeader.tsx';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainLayout>
        <Header />
        <RouterProvider router={Router} />
        <Footer />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
