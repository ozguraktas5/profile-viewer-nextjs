import Link from "next/link";

function JohnDoe() {
  return (
    <Link href="/profile/john-doe">
      <h1>Name: John Doe</h1>
      <p>Title: Software Engineer</p>
      <p>Location: San Francisco, CA</p>
      <p>
        Bio: Experienced Software Engineer with a passion for developing
        innovative programs that expedite the efficiency and effectiveness of
        organizational success.
      </p>
      <img
        src="https://xsgames.co/randomusers/assets/avatars/female/77.jpg"
        alt="John Doe"
      />
    </Link>
  );
}

export default JohnDoe;
