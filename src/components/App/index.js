// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

// == Composant
const App = () => {
  const sections = [
    'foreword',
    'skills',
    'realizations',
    'education',
    'cv',
  ];
  return (
    <div className="app">
      <Header sections={sections} />
      <Main sections={sections} />
      <Footer />
    </div>
  );
};

// == Export
export default App;
