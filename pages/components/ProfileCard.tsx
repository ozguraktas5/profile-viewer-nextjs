import React from "react";
import { Profile } from "@/types/types";

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  return (
    <div className="profile-card">
      <img src={profile.profilePicture} alt={profile.name} />
      <h2>{profile.name}</h2>
      <p>{profile.title}</p>
      <p>{profile.location}</p>
      <p>{profile.bio}</p>
      <p>Likes: {profile.likes}</p>
    </div>
  );
};

export default ProfileCard;
