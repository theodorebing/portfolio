// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import sections from '../../data/data';

// == Composant
const App = () => (
  <div className="app">
    <Header sections={sections} />
    <Main sections={sections} />
    <Footer />
  </div>
);

// == Export
export default App;
