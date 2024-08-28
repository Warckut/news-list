import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '~/index.css';

import App from '~/components/App/App';
import { config } from '~/lifecycle/config';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={config.APP_BASE_URL}>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
