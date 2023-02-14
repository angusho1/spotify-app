import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Global, MantineProvider } from '@mantine/core';
import light from './fonts/CircularStd-Light.otf';
import book from './fonts/CircularStd-Book.otf';
import medium from './fonts/CircularStd-Medium.otf';
import bold from './fonts/CircularStd-Bold.otf';
import black from './fonts/CircularStd-Black.otf';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS
      theme={{ 
        primaryColor: 'green',
        fontFamily: 'Circular Std, sans-serif',
        headings: { fontFamily: 'Circular Std, sans-serif' },
      }}
    >
      <Global
        styles={[
          {
            '@font-face': {
              fontFamily: 'Circular Std',
              src: `url('${light}') format("opentype")`,
              fontWeight: 100,
              fontStyle: 'normal',
            },
          },
          {
            '@font-face': {
              fontFamily: 'Circular Std',
              src: `url('${book}') format("opentype")`,
              fontWeight: 400,
              fontStyle: 'normal',
            },
          },
          {
            '@font-face': {
              fontFamily: 'Circular Std',
              src: `url('${medium}') format("opentype")`,
              fontWeight: 500,
              fontStyle: 'normal',
            },
          },
          {
            '@font-face': {
              fontFamily: 'Circular Std',
              src: `url('${bold}') format("opentype")`,
              fontWeight: 700,
              fontStyle: 'normal',
            },
          },
          {
            '@font-face': {
              fontFamily: 'Circular Std',
              src: `url('${black}') format("opentype")`,
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
