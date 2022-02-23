
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
      <Route path='/:id' element={<h1>Hi id</h1>}/>
    </Routes>
    </>
  );
}

export default App;
