import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { Profile } from "@/types/types";
import profilesData from "@/users.json";

interface ProfilePageProps {
  profile: Profile;
}

const UserProfile: NextPage<ProfilePageProps> = ({ profile }) => {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Ana Sayfa</a>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/user">
              <a>Kullanıcılar</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {profile.name}
          </li>
        </ol>
      </nav>
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
  if (!slug) {
    return {
      notFound: true,
    };
  }

  // Veriyi dış API'den getirme yerine, yerel veriye erişiyoruz
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
