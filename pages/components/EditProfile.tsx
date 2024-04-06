import React, { useState } from "react";
import styled from "styled-components";
import { Profile } from "@/types/types";

const Form = styled.form`
  max-width: 25rem;
  margin: 0 auto;
  padding: 3rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FormGroup = styled.div`
  margin-bottom: 0.6rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
`;

const Button = styled.button`
  width: 100%;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  padding: 0.6rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

interface EditProfileProps {
  profile: Profile;
  onSave: (editedProfile: Profile) => void;
}

const EditProfile: React.FC<EditProfileProps> = ({ profile, onSave }) => {
  const defaultProfile: Profile = {
    id: "",
    slug: "",
    profilePicture: "",
    name: "",
    title: "",
    location: "",
    bio: "",
    likes: 0,
  };
  const [editedProfile, setEditedProfile] = useState<Profile>(
    profile || defaultProfile
  );

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
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={editedProfile.name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="title">Title:</Label>
        <Input
          type="text"
          id="title"
          name="title"
          value={editedProfile.title}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="location">Location:</Label>
        <Input
          type="text"
          id="location"
          name="location"
          value={editedProfile.location}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="bio">Bio:</Label>
        <TextArea
          id="bio"
          name="bio"
          value={editedProfile.bio}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="likes">Likes:</Label>
        <Input
          type="number"
          id="likes"
          name="likes"
          value={editedProfile.likes}
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default EditProfile;
