import React from 'react';

import Section from './Section';

const Main = ({ sections }) => {
  console.log('test');
  return (
    <main className="main">
      {sections.map((section) => (
        <Section key={section} sectionName={section} sectionId={section} />
      ))}

    </main>
  );
};

export default Main;
