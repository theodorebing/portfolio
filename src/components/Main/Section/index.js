import React from 'react';

const Section = ({ section }) => {
  const { name, content } = section;
  const {
    text, subText, icons, subIcons,
  } = section.content;
  console.log('section');
  return (
    <section className="main-section" id={name}>
      <h3 className="main-section-title">{name}</h3>
      {section.content && (
      <div className="main-section-content">
        {text && (
        <p className="main-section-text">
          {text}
        </p>
        )}
        {icons && (
        <div className="main-section-icons_container">
          {icons.map((icon) => (
            <div className="main-section-icon">
              <img className="main-section-icons icons" src={icon.img} alt="skills" />
              <p className="main-section-iconsText">{icon.skillName}</p>
            </div>
          ))}
        </div>
        )}
        {subText && (
          <p className="main-section-text">
            {subText}
          </p>
        )}
        {subIcons && (
        <div className="main-section-icons_container">
          {subIcons.map((icon) => (
            <div className="main-section-icon">
              <img className="main-section-icons icons" src={icon.img} alt="skills" />
              <p className="main-section-iconsText">{icon.skillName}</p>
            </div>
          ))}
        </div>
        )}
      </div>
      )}

    </section>
  );
};

export default Section;
