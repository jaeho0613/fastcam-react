import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TvPage from './pages/TvPage';
import MovieDetail from './pages/MovieDetail';
import TvDetail from './pages/TvDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/tv'} element={<TvPage />} />
        <Route path={'/movie/:id'} element={<MovieDetail />} />
        <Route path={'/tv/:id'} element={<TvDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
