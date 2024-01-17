import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import { theme } from './styles/theme';
import { Main } from './Pages/Main';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
};

export default App;
