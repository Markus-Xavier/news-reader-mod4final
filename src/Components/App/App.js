
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import MainPage from '../MainPage/MainPage';
import DetailPage from '../DetailPage/DetailPage';

function App() {
  return (
    <>
    <AppHeader />
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/:id' element={<DetailPage />}/>
    </Routes>
    </>
  );
}

export default App;
