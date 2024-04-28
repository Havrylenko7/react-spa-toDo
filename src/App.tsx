import React from 'react';
import './index.scss';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import All from './components/All';
import Deleted from './components/Deleted';

const App: React.FC = () => {
  return (
    <div className="appWrapper">
      <Navigation />
      <Routes>
        <Route path="/" element={<All />}/>
        <Route path="/deleted" element={<Deleted />}/>
      </Routes>
    </div>
  )
}

export default App
