import React from 'react';
import Fade from 'react-reveal/Fade';

const Section = ({ section }) => {
  const { name, content } = section;
  const {
    text, subText, icons, subIcons,
  } = content;
  console.log('section');
  return (
    <section className="main-section" id={name}>
      <h3 className="main-section-title">{name}</h3>
      {content && (
      <div className="main-section-content">
        {text && (
        <p className="main-section-text">
          {text}
        </p>
        )}
        {icons && (
        <div className="main-section-icons_container">
          {icons.map((icon) => (
            <Fade delay={500}>
              <div key={icon.skillName} className="main-section-icon">
                <img className="main-section-icons icons" src={icon.img} alt="skills" />
                <p className="main-section-iconsText">{icon.skillName}</p>
              </div>
            </Fade>
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
            <Fade delay={500}>
              <div key={icon.skillName} className="main-section-icon">
                <img className="main-section-icons icons" src={icon.img} alt="skills" />
                <p className="main-section-iconsText">{icon.skillName}</p>
              </div>
            </Fade>
          ))}
        </div>
        )}
      </div>
      )}

    </section>
  );
};

export default Section;
