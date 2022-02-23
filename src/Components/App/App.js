
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import { getStories } from '../../Services/API/api';

function App() {
  getStories('home')
    .then(response => console.log(response))
  return (
    <>
    <AppHeader />
    <Routes>
      <Route path='/' element={<h1>Home</h1>}/>
    </Routes>
    </>
  );
}

export default App;
