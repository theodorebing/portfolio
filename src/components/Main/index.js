import React from 'react';

import Fade from 'react-reveal/Fade';
import Section from './Section';

const Main = ({ sections }) => {
  console.log('test');
  return (
    <div className="main_fade">
      <main className="main">
        {sections.map((section) => (
          <Fade bottom>
            <Section key={section.name} section={section} />
          </Fade>
        ))}
      </main>
    </div>
  );
};

export default Main;
