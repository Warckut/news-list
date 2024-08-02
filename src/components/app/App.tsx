import { Route, Routes } from 'react-router-dom';
import { RouteType, ROUTES } from '~/const/routes';

function App() {
  return (
    <Routes>
      {ROUTES.map(({ path, getElement }: RouteType) => (
        <Route key={path} path={path} element={getElement()} />
      ))}
    </Routes>
  );
}

export default App;
