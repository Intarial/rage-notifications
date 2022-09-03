import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/css/global.scss'
import Notifications from './Notifications/Notifications';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);

