// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

// == Export
export default App;
