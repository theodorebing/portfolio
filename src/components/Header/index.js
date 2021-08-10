import React from 'react';

const Header = ({ sections }) => {
  console.log('sections', sections);
  return (
    <header className="header">
      <a href="/">
        <h1 className="header-title">théodore bing</h1>
        <h2 className="header-title_sub">fullstack developper</h2>
      </a>
      <nav className="header-menu">
        {sections && sections.map((section) => (
          <a href={`#${section}`} className="header-menu-link">{section}</a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
