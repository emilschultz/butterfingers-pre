import Link from "next/link";
// import NavBarStyle from "../NavBarStyle";

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/lost">
          <a>Lost</a>
        </Link>
      </li>
      <li>
        <Link href="/found">
          <a>Found</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  );
}
