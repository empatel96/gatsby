import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {/* content for each page */}
        {/* children takes the content inside the layout component and renders it */}
        {children}
      </div>
      <footer>Copyright 2021</footer>
    </div>
  );
}
