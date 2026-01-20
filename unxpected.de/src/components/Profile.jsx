const Profile = ({ name, bio, imageSrc }) => {
  return (
    <div className="profile">
      <img src={imageSrc} alt={`${name}'s profile`} />
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  );
};

export default Profile;
