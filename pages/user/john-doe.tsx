import Link from "next/link";

function JohnDoe() {
  return (
    <ul>
      <li>
        <Link href="/user/john-doe">
          <a>
            <h1>John Doe</h1>
            <p>Ünvan: Software Engineer</p>
            <p>Konum: San Francisco, CA</p>
            <p>
              Biyografi: Experienced Software Engineer with a passion for
              developing innovative programs that expedite the efficiency and
              effectiveness of organizational success.
            </p>
            <img
              src="https://xsgames.co/randomusers/assets/avatars/female/77.jpg"
              alt="John Doe"
            />
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default JohnDoe;
