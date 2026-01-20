import { useState } from 'react'

export const LinkCard = ({ title, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="link-card">
      <span>{title}</span>
    </a>
  );
};

export const LinksContainer = ({ children }) => {
  return (
    <div className="links-container">
      {children}
    </div>
  );
};

export const InfoDropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div 
      className="info-dropdown"
      data-open={isOpen}
      onClick={toggleDropdown}
    >
      <div>
        <span>{title}</span>
        <span>▼</span>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  )
}
