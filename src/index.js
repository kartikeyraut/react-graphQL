import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './custom.scss'
import App from './App'

// This is the ID of the div in your index.html file

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);