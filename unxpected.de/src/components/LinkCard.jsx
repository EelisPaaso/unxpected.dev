const LinkCard = ({ title, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="link-card">
      <span className="link-title">{title}</span>
    </a>
  );
};

export default LinkCard;
