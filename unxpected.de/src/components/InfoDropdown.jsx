import { useState } from 'react'

const InfoDropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div 
      className={`info-dropdown ${isOpen ? 'open' : ''}`}
      onClick={toggleDropdown}
    >
      <div className="info-dropdown-header">
        <span>{title}</span>
        <span className="info-dropdown-icon">▼</span>
      </div>
      <div className="info-dropdown-content">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default InfoDropdown
