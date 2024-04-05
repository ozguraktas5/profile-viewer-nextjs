import { useState } from "react";
import { Profile } from "@/types/types";

interface EditProfileProps {
  profile: Profile;
  onSave: (updatedProfile: Profile) => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ profile, onSave }) => {
  const [editedProfile, setEditedProfile] = useState<Profile>(profile);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave(editedProfile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={editedProfile.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={editedProfile.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={editedProfile.location}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          name="bio"
          value={editedProfile.bio}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="likes">Likes:</label>
        <input
          type="number"
          id="likes"
          name="likes"
          value={editedProfile.likes}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditProfile;
