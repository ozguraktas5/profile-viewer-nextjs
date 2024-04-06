import Link from "next/link";

function JaneSmith() {
  return (
    <Link href="/profile/jane-smith">
      <h1>Jane Smith</h1>
      <p>Title: Product Manager</p>
      <p>Location: New York, NY</p>
      <p>
        Bio: Dedicated Product Manager with over 5 years of experience in the
        tech industry, specializing in project coordination and team leadership.
      </p>
      <img
        src="https://xsgames.co/randomusers/assets/avatars/female/78.jpg"
        alt="Jane Smith"
      />
    </Link>
  );
}

export default JaneSmith;
