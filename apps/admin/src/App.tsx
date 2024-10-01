import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';

import GlobalStyle from 'theme/globalStyles';
import { createCustomTheme } from './theme';
import { THEMES } from './theme/theme';
import routes from './constant/routes';

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
