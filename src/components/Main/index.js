import React from 'react';

import Section from './Section';

const Main = ({ sections }) => {
  console.log('test');
  return (
    <div className="main_fade">
      <main className="main">
        {sections.map((section) => (
          <Section key={section.name} section={section} />
        ))}
      </main>
    </div>
  );
};

export default Main;
