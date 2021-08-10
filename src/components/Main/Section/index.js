import React from 'react';

const Section = ({ section }) => {
  const { name } = section;
  console.log('section');
  return (
    <section className="main-section" id={name}>
      <h3 className="main-section-title">{name}</h3>
    </section>
  );
};

export default Section;
