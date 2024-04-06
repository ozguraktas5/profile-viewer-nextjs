// components/ProfileCard.tsx
import React from "react";
import { Profile } from "@/types/types";
import styles from "@/styles/Home.module.css";

interface ProfileCardProps {
  profile: Profile;
  onLike: () => void;
  hideLikeButton: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  profile,
  onLike,
  hideLikeButton,
}) => {
  return (
    <div className={styles.profileCard}>
      <img
        src={profile.profilePicture}
        alt={profile.name}
        className={styles.profilePicture}
      />
      <div className={styles.profileContent}>
        <h2>{profile.name}</h2>
        <p>{profile.title}</p>
        <p>{profile.location}</p>
        <p>{profile.bio}</p>
        <p>Likes: {profile.likes}</p>
      </div>
      {!hideLikeButton && (
        <button className={styles.likeButton} onClick={onLike}>
          Like
        </button>
      )}
    </div>
  );
};

export default ProfileCard;
