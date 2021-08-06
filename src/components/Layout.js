import React from 'react';
import Navbar from './Navbar';
import '../styles/global.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        {/* content for each page */}
        {/* children takes the content inside the layout component and renders it */}
        {children}
      </div>
      <footer>
        <p>Copyright 2021</p>
      </footer>
    </div>
  );
}
