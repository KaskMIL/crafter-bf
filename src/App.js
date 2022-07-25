import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import BeerStylesPage from './components/BeerStyles/BeerStylesPage';
import BeerHopsPage from './components/BeerHops/BeerHopsPage';
import BeerYeastsPage from './components/BeerYeasts/BeerYeastsPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/styles' element={<BeerStylesPage />} />
        <Route path='/hops' element={<BeerHopsPage />} />
        <Route path='/yeasts' element={<BeerYeastsPage />} />
      </Routes>
    </div>
  );
}

export default App;
