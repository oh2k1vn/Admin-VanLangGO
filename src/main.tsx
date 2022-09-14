import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Hook
import { ModalsProvider } from '@mantine/modals';

// Thư viện 
import { BrowserRouter as Router } from 'react-router-dom';
import { NotificationsProvider } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';
import { ThemeContextProvider } from './contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Router>
        <MantineProvider withNormalizeCSS withGlobalStyles>
          <NotificationsProvider>
            <ModalsProvider>
              <App />
            </ModalsProvider>
          </NotificationsProvider>
        </MantineProvider>
      </Router>
    </ThemeContextProvider>
  </React.StrictMode>,
);
