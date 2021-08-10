import React from 'react';

const Section = ({ sectionName, sectionId }) => {
  console.log('section');
  return (
    <section className="section" id={sectionId}>
      <h3>{sectionName}</h3>
    </section>
  );
};

export default Section;
