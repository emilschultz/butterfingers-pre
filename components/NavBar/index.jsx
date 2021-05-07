import Link from "next/link";
import NavBarStyle from "../NavBarStyle";

export default function NavBar() {
  return (
    <NavBarStyle>
      <li>
        <Link href="/">
          <a className="bf-logo">Butterfingers</a>
        </Link>
      </li>
      <div>
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
      </div>
    </NavBarStyle>
  );
}
