import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Section = ({ section }) => {
  // console.log(section);
  const { name, content } = section;
  const {
    text, subText, icons, subIcons, projects, img, link, links,
  } = content;
  return (
    <section className="main-section" id={name}>
      <h3 className="main-section-title">{name}</h3>
      {content && (
        <div className="main-section-content" key={name}>
          {text && (
            <p className="main-section-text">
              {text}
            </p>
          )}
          {icons && (
            <div className="main-section-icons_container">
              {icons.map((icon) => (
                <Fade delay={500} key={icon.skillName}>
                  <div className="main-section-icon">
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
                <Fade delay={100} key={icon.skillName}>
                  <div className="main-section-icon">
                    <img className="main-section-icons icons" src={icon.img} alt="skills" />
                    <p className="main-section-iconsText">{icon.skillName}</p>
                  </div>
                </Fade>
              ))}
            </div>
          )}
          {projects && projects.map((project) => {
            const {
              title, text, img, link,
            } = project;
            return (
              <div key={title}>
                <a href={link} target="_blank" rel="noreferrer">
                  <h4 className="main-section-title main-section-subtitle">{title}</h4>
                </a>
                <p className="main-section-text main-section-subtext">{text}</p>
                <a href={link} target="_blank" rel="noreferrer">
                  <img className="main-section-image" src={img} alt={title} />
                </a>
              </div>
            );
          })}
          {img && link && (
          <a className="education-link" href={link}>
            <img className="education-img" src={img} alt="education" />
          </a>
          )}
          {links && (
            <div className="main-section-cv">
              {links.map((cvLink) => (
                <div key={cvLink.href} className="main-section-cvLink">
                  <p className="main-section-text main-section-subtext">{cvLink.lang}</p>
                  <a href={cvLink.href} target="_blank" rel="noreferrer">
                    <img className="pdfImg" src="https://img.icons8.com/ios/500/000000/pdf--v2.png" alt="cv" />
                  </a>
                  <a href={cvLink.href} download>
                    <p className="main-section-text">Click here to download</p>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </section>
  );
};

Section.propTypes = {
  section: PropTypes.shape({
    name: PropTypes.string,
    content: PropTypes.shape({
      text: PropTypes.string,
      subText: PropTypes.string,
      icons: PropTypes.arrayOf(
        PropTypes.object,
      ),
      subIcons: PropTypes.arrayOf(
        PropTypes.object,
      ),
      projects: PropTypes.arrayOf(
        PropTypes.object,
      ),
      img: PropTypes.string,
      link: PropTypes.string,
      links: PropTypes.arrayOf(
        PropTypes.object,
      ),
    }),
  }).isRequired,
};

export default Section;
