import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router"; 
import { Profile } from "@/types/types";
import profilesData from "@/users.json";

interface ProfilePageProps {
  profile: Profile;
}

const UserProfile: NextPage<ProfilePageProps> = ({ profile }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.title}</p>
      <p>{profile.location}</p>
      <p>{profile.bio}</p>
      <p>Likes: {profile.likes}</p>
      <img src={profile.profilePicture} alt={profile.name} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ProfilePageProps> = async (
  context
) => {
  const { slug } = context.params;
  const fetchedProfiles: Profile[] = profilesData;

  const profile = fetchedProfiles.find((profile) => profile.slug === slug);

  if (!profile) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      profile,
    },
  };
};

export default UserProfile;
