const Profile = ({ name, bio, imageSrc }) => (
  <div className="profile">
    <img src={imageSrc} alt="profile" className="profile-image" />
    <h1 className="profile-name">{name}</h1>
    <p className="profile-bio">{bio}</p>
  </div>
);

export const LinkList = ({ children }) => (
  <div className="link-list">{children}</div>
);

export const ProfileLink = ({ title, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="card">
    {title}
  </a>
);

export default Profile;
