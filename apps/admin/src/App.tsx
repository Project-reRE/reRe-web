import { useRoutes } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';
import GlobalStyle from 'theme/globalStyles';

import routes from './constant/routes';
import { createCustomTheme } from './theme';
import { THEMES } from './theme/theme';

function App() {
  const routing = useRoutes(routes);
  const theme = createCustomTheme({
    theme: THEMES.LIGHT,
  });

  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyle />
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
}

export default App;
