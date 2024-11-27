// src/app/layout.tsx
import React, { ReactNode } from 'react';
import './globals.css';
import Header from './components/header';

interface LayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Açaí Frut Mix</title>
        <meta name="description" content="Your app description here" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;