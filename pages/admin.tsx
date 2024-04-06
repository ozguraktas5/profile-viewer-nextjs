import { useRouter } from "next/navigation";
import { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import ProfileCard from "./components/ProfileCard";
import EditProfile from "./components/EditProfile";
import { Profile } from "@/types/types";
import profilesData from "@/users.json";
import styles from "@/styles/Home.module.css";

interface Props {
  profiles: Profile[];
}

const Admin: NextPage<Props> = ({ profiles: initialProfiles }) => {
  const router = useRouter();
  const [profiles, setProfiles] = useState<Profile[]>(initialProfiles);
  const [editingProfile, setEditingProfile] = useState<Profile | null>(null);
  const johnDoeProfile = profiles.find(
    (profile) => profile.name === "John Doe"
  );

  const handleLike = (profileId: string) => {
    if (johnDoeProfile?.id === profileId) {
      return;
    }
    const updatedProfiles = profiles.map((profile) => {
      if (profile.id === profileId) {
        return { ...profile, likes: profile.likes + 1 };
      }
      return profile;
    });
    setProfiles(updatedProfiles);
  };

  const handleEditProfile = (profile: Profile) => {
    setEditingProfile(profile);
  };

  const handleSaveProfile = (updatedProfile: Profile) => {
    console.log("Güncellenmiş profil:", updatedProfile);
    const updatedProfiles = profiles.map((profile) => {
      if (profile.id === updatedProfile.id) {
        return updatedProfile;
      }
      return profile;
    });

    setEditingProfile(null);
    setProfiles(updatedProfiles);
  };

  const handleLogout = () => {
    router.push("/api/auth/signin");
  };

  const canEditProfile = (profile: Profile): boolean => {
    return profile.name === "John Doe";
  };

  return (
    <>
      <div>
        {editingProfile ? (
          <EditProfile profile={editingProfile} onSave={handleSaveProfile} />
        ) : (
          <div className={styles.allProfile}>
            {profiles.map((profile) => (
              <div key={profile.id}>
                <ProfileCard
                  profile={profile}
                  onLike={() => handleLike(profile.id)}
                  hideLikeButton={johnDoeProfile?.id === profile.id}
                />
                {canEditProfile(profile) && (
                  <button onClick={() => handleEditProfile(profile)}>
                    Edit
                  </button>
                )}
              </div>
            ))}
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const fetchedProfiles: Profile[] = profilesData;

  return {
    props: {
      profiles: fetchedProfiles,
    },
  };
};

export default Admin;
