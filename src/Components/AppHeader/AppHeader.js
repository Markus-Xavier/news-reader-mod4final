import React from 'react';
import { Link } from 'react-router-dom';
import './AppHeader.css';

export default function AppHeader() {
  return (
    <header className="app-header_display"><Link className="app-header_link-style" to="/">news reader</Link></header>
  )
}