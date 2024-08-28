import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import theme from '~/theme/theme';
import { RouteType, ROUTES } from '~/const/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {ROUTES.map(({ path, getElement }: RouteType) => (
          <Route key={path} path={path} element={getElement()} />
        ))}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
