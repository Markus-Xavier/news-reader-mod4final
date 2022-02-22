import React from 'react';
import { Link } from 'react-router-dom';
import './AppHeader.css';

export default function AppHeader() {
  return (
    <header><Link to="/">news reader</Link></header>
  )
}