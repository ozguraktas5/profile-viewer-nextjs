import Link from "next/link";

function MikeJones() {
  return (
    <Link href="/profile/mike-jones">
      <h1>Name: Mike Jones</h1>
      <p>Title: UI/UX Designer</p>
      <p>Location: Austin, TX</p>
      <p>
        Bio: Creative UI/UX Designer with a strong background in designing interfaces that improve user experience and user interaction.
      </p>
      <img
        src="https://xsgames.co/randomusers/assets/avatars/female/64.jpg"
        alt="Mike Jones"
      />
    </Link>
  );
}

export default MikeJones;
