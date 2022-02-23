
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import MainPage from '../MainPage/MainPage';

function App() {
  return (
    <>
    <AppHeader />
    <Routes>
      <Route path='/' element={<MainPage />}/>
    </Routes>
    </>
  );
}

export default App;
