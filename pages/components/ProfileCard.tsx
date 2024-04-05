import React from "react";
import { Profile } from "@/types/types";
import { useState } from "react";

interface ProfileCardProps {
  profile: Profile;
  onLike: () => void;
  hideLikeButton: Boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onLike, hideLikeButton }) => {
  const handleLike = () => {
    onLike(); 
  };

  return (
    <div className="profile-card">
      <img src={profile.profilePicture} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.title}</p>
      <p>{profile.location}</p>
      <p>{profile.bio}</p>
      <p>Likes: {profile.likes}</p>
      {!hideLikeButton && <button onClick={handleLike}>Like</button>}
    </div>
  );
};

export default ProfileCard;
