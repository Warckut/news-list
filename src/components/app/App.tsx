import { Route, Routes } from 'react-router-dom';
import { RouteType, ROUTES } from '~/const/routes';

function App() {
  return (
    <Routes>
      {ROUTES.map(({ path, Element, props }: RouteType, index) => (
        <Route key={index} path={path} element={<Element {...props} />} />
      ))}
    </Routes>
  );
}

export default App;
