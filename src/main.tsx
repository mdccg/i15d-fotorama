import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FontStyles } from './assets/fonts/fonts';
import './i18n/i18next';

const rootHtmlElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootHtmlElement);

root.render(
  <BrowserRouter>
    <FontStyles />
    <App />
  </BrowserRouter>
);