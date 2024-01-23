import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Styles/globalStyles';
import { theme } from './Styles/theme';
import { Main } from './Pages/Main';
import { MainLayout } from './Layout/MainLayout';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
// import { BackHeader } from './Components/Header/BackHeader';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainLayout>
        {/* <BackHeader /> */}
        <Header />
        <Main />
        <Footer />
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
