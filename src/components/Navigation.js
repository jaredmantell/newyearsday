import React from 'react'

const mainNavItems = [
  { url: '/', label: 'Home', mobileOnly: true },
  { url: '/me', label: 'About' },
  { url: '/blog', label: 'Blog' },
  { url: '/projects', label: 'Projects' },
  { url: '/illustration', label: 'Illustration' },
]

const socialNavItems = [
  { url: 'https://github.com/PLACEHOLDER', label: 'GitHub' },
]

export const Navigation = ({ theme, onUpdateTheme }) => {
  return (
    <section className="navigation">
      <div className="container">
        <div className="nav-wrapper">
          <a href="/" className="item brand">
            <span>PLACEHOLDER</span>
          </a>
          <nav>
            {mainNavItems.map((item) => (
              <div className="nav-item-outer" key={item.url}>
                <a
                  href={item.url}
                  key={item.label}
                  className={`item ${slugify(item.label)} ${
                    item.mobileOnly ? 'mobile-only' : ''
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              </div>
            ))}

            {socialNavItems.map((item) => (
              <div className="nav-item-outer" key={item.url}>
                <a
                  href={item.url}
                  key={item.label}
                  className={`desktop-only item ${slugify(item.label)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{item.label}</span>
                </a>
              </div>
            ))}
          </nav>
        </div>
        <div className="theme-toggle">
          <button onClick={onUpdateTheme}>
            <span>Theme</span>
          </button>
        </div>
      </div>
    </section>
  )
}