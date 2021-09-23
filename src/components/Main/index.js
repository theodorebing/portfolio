import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Section from './Section';

const Main = ({ sections }) => (
  <div className="main_fade">
    <main className="main">
      {sections.map((section) => (
        <Fade bottom key={section.name}>
          <Section section={section} />
        </Fade>
      ))}
    </main>
  </div>
);

Main.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
