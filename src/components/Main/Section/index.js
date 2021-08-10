import React from 'react';

const Section = ({ sectionName, sectionId }) => {
  console.log('section');
  return (
    <section className="main-section" id={sectionId}>
      <h3 className="main-section-title">{sectionName}</h3>
    </section>
  );
};

export default Section;
