import { useState } from 'react'

const InfoDropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className={`info-dropdown ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
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
