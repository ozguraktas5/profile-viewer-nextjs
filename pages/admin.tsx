import { useRouter } from "next/navigation";
import { GetServerSideProps, NextPage } from "next";
import ProfileCard from "./components/ProfileCard";
import { Profile } from "@/types/types";
import profiles from "@/users.json";
import Header from "./components/Header";

interface Props {
  profiles: Profile[];
}

const Admin: NextPage<Props> = ({ profiles }) => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/api/auth/signin");
  };

  return (
    <>
      <Header />
      <div>
        <div>
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const fetchedProfiles: Profile[] = profiles;

  return {
    props: {
      profiles: fetchedProfiles,
    },
  };
};

export default Admin;
