// App.js
import React from 'react';
import Navigation from './Navigation';
import EntrySection from './EntrySection';
import BrowseSection from './BrowseSection';
import HotelCard from './HotelCard';
import './App.css';

import Modal from 'react-modal';

function App() {
  return (
    <div className="App">
      <Navigation />
      <EntrySection />
      <BrowseSection />
      
      </div>
      
  );
}

export default App;
