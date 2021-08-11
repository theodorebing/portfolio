import React from 'react';

const Header = ({ sections }) => {
  console.log('sections', sections);
  return (
    <header className="header">
      <a href="/">
        <h1 className="header-title">théodore bing</h1>
      </a>
      <h2 className="header-title_sub">fullstack developper</h2>
      <nav className="header-menu">
        {sections && sections.map((section) => (
          <a key={section.name} href={`#${section.name}`} className="header-menu-link">{section.name}</a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
