export interface Profile {
  id: string;
  slug: string;
  name: string;
  title: string;
  location: string;
  bio: string;
  profilePicture: string;
  likes: number;
}

export interface EditProfileProps {
  profile: Profile;
  onSave: (editedProfile: Profile) => void;
}

