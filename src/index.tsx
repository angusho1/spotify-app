import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Global, MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS
      theme={{ 
        primaryColor: 'green',
        fontFamily: 'Circular Std',
        headings: { fontFamily: 'Circular Std' },
      }}
    >
      <Global
        styles={[
          {
            '@font-face': {
              fontFamily: 'Circular Std',
              src: `url('./fonts/CircularStd-Light.otf') format("opentype")`,
              fontWeight: 100,
              fontStyle: 'normal',
            },
          },
          {
            '@font-face': {
              fontFamily: 'Circular Std',
              src: `url('./fonts/CircularStd-Book.otf') format("opentype")`,
              fontWeight: 300,
              fontStyle: 'normal',
            },
          },
          {
            '@font-face': {
              fontFamily: 'Circular Std',
              src: `url('./fonts/CircularStd-Medium.otf') format("opentype")`,
              fontWeight: 400,
              fontStyle: 'normal',
            },
          },
          {
            '@font-face': {
              fontFamily: 'Circular Std',
              src: `url('./fonts/CircularStd-Bold.otf') format("opentype")`,
              fontWeight: 700,
              fontStyle: 'normal',
            },
          },
          {
            '@font-face': {
              fontFamily: 'Circular Std',
              src: `url('./fonts/CircularStd-Black.otf') format("opentype")`,
              fontWeight: 900,
              fontStyle: 'normal',
            },
          },
        ]}
      />
      <App />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
