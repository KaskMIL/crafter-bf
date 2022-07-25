import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
