import React from "react";
import { Profile } from "@/types/types";
import styles from "../../styles/Home.module.css";
import Image from 'next/image';

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
  const handleLike = () => {
    onLike();
  };

  return (
    <div className={styles["profileCard"]}>
      <Image
        src={profile.profilePicture}
        className={styles["profilePicture"]}
        alt={profile.name}
        width={200}
        height={200}
      />
      <h2 className={styles["profileName"]}>{profile.name}</h2>
      <p>{profile.title}</p>
      <p>{profile.location}</p>
      <p>{profile.bio}</p>
      <div>
        <p>Likes: {profile.likes}</p>
        {!hideLikeButton && (
          <button className={styles["likeButton"]} onClick={handleLike}>
            Like
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
